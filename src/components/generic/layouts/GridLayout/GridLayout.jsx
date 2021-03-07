import React, { useCallback } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./GridLayout.styles";
import Skip from "./Skip";

const useStyles = createUseStyles(styles);

function GridLayout({ children, className, gap, columns, stretchLast }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const renderChildren = useCallback(() => {
    let filledColumns = 1;
    let columnCount;
    let newChild;

    return React.Children.map(children, (child, i) => {
      columnCount = child.props.column;

      if (child.type === Skip) {
        filledColumns += columnCount;
        return null;
      }

      if (columnCount) {
        newChild = React.cloneElement(child, {
          style: { gridColumn: `${filledColumns} / span ${columnCount}` },
        });
        filledColumns += columnCount;

        return newChild;
      }

      if (stretchLast && i === children.length - 1) {
        return React.cloneElement(child, {
          style: {
            gridColumn: `${filledColumns} / span ${
              columns - filledColumns + 1
            }`,
          },
        });
      }

      return child;
    });
  }, [children]);

  return (
    <div
      className={classNames(classes.grid, className)}
      style={{
        gap,
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {renderChildren()}
    </div>
  );
}

GridLayout.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.number,
  gap: PropTypes.string,
  stretchLast: PropTypes.bool,
};

GridLayout.defaultProps = {
  columns: 12,
  gap: "30px",
  stretchLast: false,
};

export default GridLayout;
