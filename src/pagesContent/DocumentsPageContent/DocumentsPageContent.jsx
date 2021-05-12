import React, { useCallback } from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { useRecoilValueLoadable } from 'recoil';

import Sidebar from '../../components/generic/Sidebar';
import GridLayout from '../../components/generic/layouts/GridLayout';
import StackLayout from '../../components/generic/layouts/StackLayout';
import DocumentAbstractCard from '../../components/specific/DocumentAbstractCard';
import StateMonade from '../../helpers/StateMonade';
import docsState from '../../recoil/states/docsState';

import styles from './DocumentsPageContent.styles';

const useStyles = createUseStyles(styles);

function DocumentsPageContent(props) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const docs = useRecoilValueLoadable(docsState);

  const renderDocs = useCallback(
    (count) => {
      if (docs.state !== 'hasValue') return null;
      return docs.contents
        .slice(0, count || docs.contents.length)
        .map((doc) => {
          return <DocumentAbstractCard {...doc} />;
        });
    },
    [docs],
  );

  return (
    <GridLayout className={classes.content}>
      <Sidebar className={classes.paddingTop} title="Recent docs" column={3}>
        <StateMonade state={docs.state}>{renderDocs(3)}</StateMonade>
      </Sidebar>
      <StackLayout
        className={classes.paddingTop}
        column={5}
        orientation="vertical">
        <StateMonade state={docs.state}>{renderDocs()}</StateMonade>
      </StackLayout>
    </GridLayout>
  );
}

DocumentsPageContent.propTypes = {};

export default DocumentsPageContent;
