import _ from "lodash";

const scaleSector = (calcParameter) => {
  const angleStep = 1.8;
  const animation = {};
  let percent = 0;
  let angle = 0;

  for (percent; percent <= 100; percent++) {
    animation[percent + "%"] = calcParameter(_.ceil(angle, 2) + "deg");

    if (percent < 50) {
      angle += angleStep;
    } else {
      angle -= angleStep;
    }
  }

  return animation;
};

const sectorGradient = (angle) => ({
  "--angle": angle,
});

const styles = {
  spinner: {
    padding: 0,
    position: "relative",
    width: (theme) => theme.spinner.size,
    height: (theme) => theme.spinner.size,
    border: (theme) =>
      `calc(${theme.spinner.size} / 5) solid ${theme.spinner.color}`,
    borderRadius: "50%",
    boxSizing: "border-box",

    "&$centered": {
      position: "absolute",
      right: "50%",
      bottom: "50%",
      transform: "translate(50%, 50%)",
    },

    "&::before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: (theme) => `calc(-1 * ${theme.spinner.size} / 5 - 1px)`,
      left: (theme) => `calc(-1 * ${theme.spinner.size} / 5 - 1px)`,
      width: (theme) => `calc(${theme.spinner.size} + 2px)`,
      height: (theme) => `calc(${theme.spinner.size} + 2px)`,
      borderRadius: "100%",
      boxSizing: "border-box",
      background: (theme) => `linear-gradient(
        var(--angle),
        transparent 50%,
        ${theme.spinner.background} 50%),
        linear-gradient(90deg, ${theme.spinner.background} 50%, transparent 50%
      )`,

      animation: "$spin 0.4s linear infinite, $scale 0.4s infinite ease-in-out",
    },
  },

  "@keyframes spin": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
  "@keyframes scale": scaleSector(sectorGradient),
};

export default styles;
