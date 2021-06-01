import React from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import Button from '../Button';
import Text from '../Text';
import BlockDescriptionLayout from '../layouts/BlockDescriptionLayout';

import styles from './IconTextButton.styles';

const useStyles = createUseStyles(styles);

function IconTextButton({ icon, text, ...props }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Button className={classes.iconTextButton} {...props}>
      <BlockDescriptionLayout>
        <BlockDescriptionLayout.Block>{icon}</BlockDescriptionLayout.Block>
        <BlockDescriptionLayout.Description className={classes.text}>
          <Text type="small">{text}</Text>
        </BlockDescriptionLayout.Description>
      </BlockDescriptionLayout>
    </Button>
  );
}

IconTextButton.propTypes = {};

export default IconTextButton;
