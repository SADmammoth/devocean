import React from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import InteractiveCard from '../../generic/InteractiveCard';
import Text from '../../generic/Text';

import styles from './DocumentAbstractCard.styles';

const useStyles = createUseStyles(styles);

function DocumentAbstractCard({ id, title, abstract }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <InteractiveCard
      link={`/docs/${id}`}
      className={classes.documentCard}
      orientation="vertical">
      <header>
        <Text type="h2">{title}</Text>
      </header>
      {abstract ? <Text type="common">{abstract}</Text> : null}
    </InteractiveCard>
  );
}

DocumentAbstractCard.propTypes = {};

export default DocumentAbstractCard;
