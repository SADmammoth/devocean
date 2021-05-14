import React, { useEffect } from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import useHyphenate from '../../../helpers/hooks/useHyphenate';
import useLocale from '../../../helpers/hooks/useLocale';
import alignments from './alignments';
import types from './types';

import styles from './Text.styles';

const useStyles = createUseStyles(styles);

function Text(
  {
    type,
    as,
    children,
    className,
    bold,
    italic,
    alignment,
    ellipsis,
    lines,
    hyphenated,

    ...props
  },

  ref,
) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const TextTag = as || types[type];

  const locale = useLocale();
  const hyphenate = useHyphenate(locale('vowels'), locale('consonants'));
  let text;
  useEffect(() => {
    if (typeof children === 'string' && hyphenated) {
      text = hyphenate(children);
    }
  }, [hyphenated, children]);

  return (
    <TextTag
      ref={ref}
      className={classNames(
        classes.text,
        classes[type],
        className,
        classes[alignments[alignment] + '-alignment'],
        {
          [classes.bold]: bold,
          [classes.italic]: italic,
          [classes.ellipsis]: ellipsis || !!lines,
          [classes.hyphenated]: hyphenated,
        },
      )}
      style={{ '--lines': lines }}
      {...props}>
      {text || children}
    </TextTag>
  );
}

Text.propTypes = {
  type: PropTypes.oneOf(Object.keys(types)),
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  bold: PropTypes.bool,
  italic: PropTypes.bool,
  alignment: PropTypes.oneOf(Object.keys(alignments)),
  ellipsis: PropTypes.bool,
  lines: PropTypes.number,
  hyphenated: PropTypes.bool,
};

export default React.forwardRef(Text);
