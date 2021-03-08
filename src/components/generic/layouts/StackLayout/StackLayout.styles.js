import { aligns, orientations } from "./maps";

import orientationPrefix from "./orientationPrefix";

const justifyContent = (value) => ({
  justifyContent: value,
});

const alignItems = (value) => ({
  alignItems: value,
});

const getAlignsStylesForOrientation = (orientation) => {
  if (orientation === orientations.vertical) {
    return Object.values(aligns).map((value) => {
      return {
        [orientationPrefix(orientation, value, "Y")]: justifyContent(value),
        [orientationPrefix(orientation, value, "X")]: alignItems(value),
      };
    });
  }

  if (orientation === orientations.horizontal) {
    return Object.values(
      Object.values(aligns).map((value) => {
        return {
          [orientationPrefix(orientation, value, "X")]: justifyContent(value),
          [orientationPrefix(orientation, value, "Y")]: alignItems(value),
        };
      })
    );
  }
};

const alignsStyles = Object.assign(
  ...Object.entries(orientations).map(([key, value]) =>
    Object.assign(...getAlignsStylesForOrientation(value))
  )
);

const styles = {
  stack: {
    display: "flex",
    flexWrap: "wrap",
  },

  vertical: {
    flexDirection: "column",
  },

  ...alignsStyles,
};

export default styles;
