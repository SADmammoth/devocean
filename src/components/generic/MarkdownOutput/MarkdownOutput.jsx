import React from 'react';

import { MarkdownOutput as ReactFormMarkdown } from '@bit/sadmammoth.components.react-form';
import { identity } from 'lodash';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import styles from './MarkdownOutput.styles';

const useStyles = createUseStyles(styles);

function MarkdownOutput({ name, children }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <ReactFormMarkdown
      id={name}
      name={name}
      value={children}
      markdownFeatures={{
        headings: true,
        bold: true,
        italic: true,
        links: true,
      }}
    />
  );
}

MarkdownOutput.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default MarkdownOutput;
