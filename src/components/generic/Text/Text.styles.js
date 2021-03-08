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
  },
  h1Small: {
    fontSize: (theme) => theme.fontSizes.bigger,
  },
  h2: {
    fontSize: (theme) => theme.fontSizes.bigger,
  },
  h3: {
    fontSize: (theme) => theme.fontSizes.big,
  },
  h4: {
    fontSize: (theme) => theme.fontSizes.big,
  },
  sub: {
    fontSize: (theme) => theme.fontSizes.bigger,
  },
  subSmall: {
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
  italic: {
    fontStyle: "italic",
  },

  ...alignmentStyles,
};

export default styles;
