import alignments from "./alignments";

const alignmentStyles = Object.fromEntries(
  Object.entries(alignments).map(([key, value]) => [
    key + "-alignment",
    {
      textAlign: value,
    },
  ])
);

const styles = {
  common: {
    fontSize: (theme) => theme.fontSizes.default,
  },
  h1: {
    fontSize: (theme) => theme.fontSizes.biggest,
    fontWeight: "bold",
  },
  h1Small: {
    fontSize: (theme) => theme.fontSizes.bigger,
    fontWeight: "bold",
  },
  h2: {
    fontSize: (theme) => theme.fontSizes.bigger,
    fontWeight: "bold",
  },
  h3: {
    fontSize: (theme) => theme.fontSizes.big,
    fontWeight: "bold",
  },
  h4: {
    fontSize: (theme) => theme.fontSizes.big,
  },
  sub: {
    fontSize: (theme) => theme.fontSizes.default,
  },
  hint: {
    fontSize: (theme) => theme.fontSizes.smaller,
  },
  small: {
    fontSize: (theme) => theme.fontSizes.small,
  },
  navitem: {
    fontSize: (theme) => theme.fontSizes.small,
  },
  big: {
    fontSize: (theme) => theme.fontSizes.big,
  },
  bold: {
    fontWeight: "bold",
  },
  italics: {
    fontStyle: "italics",
  },

  ...alignmentStyles,
};

export default styles;
