import { aligns, orientations } from "./maps";

import orientationPrefix from "./orientationPrefix";

export const justifyContent = (value) => ({
  justifyContent: value,
});

export const alignItems = (value) => ({
  alignItems: value,
});

export const getAlignsStylesForOrientation = (orientation) => {
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

export const alignsStyles = Object.assign(
  ...Object.entries(orientations).map(([key, value]) =>
    Object.assign(...getAlignsStylesForOrientation(value))
  )
);

export const justifySelf = (value) => ({
  justifySelf: value,
});

export const alignSelf = (value) => ({
  alignSelf: value,
});

export const getAlignsStylesForOrientationForItems = (orientation) => {
  if (orientation === orientations.vertical) {
    return Object.values(aligns).map((value) => {
      return {
        [orientationPrefix(orientation, value, "YItem")]: justifySelf(value),
        [orientationPrefix(orientation, value, "XItem")]: alignSelf(value),
      };
    });
  }

  if (orientation === orientations.horizontal) {
    return Object.values(
      Object.values(aligns).map((value) => {
        return {
          [orientationPrefix(orientation, value, "XItem")]: justifySelf(value),
          [orientationPrefix(orientation, value, "YItem")]: alignSelf(value),
        };
      })
    );
  }
};

export const alignsStylesForItems = Object.assign(
  ...Object.entries(orientations).map(([key, value]) =>
    Object.assign(...getAlignsStylesForOrientationForItems(value))
  )
);
