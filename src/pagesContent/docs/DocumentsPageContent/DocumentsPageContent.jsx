import React, { useCallback } from 'react';

import PropTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';
import { useTheme, createUseStyles } from 'react-jss';
import { useRecoilValueLoadable } from 'recoil';

import LoadableItemsList from '../../../components/generic/LoadableItemsList';
import Text from '../../../components/generic/Text';
import ScrollLayout from '../../../components/generic/layouts/ScrollLayout';
import StretchLastLayout from '../../../components/generic/layouts/StretchLastLayout';
import DocumentAbstractCard from '../../../components/specific/DocumentAbstractCard';
import useLocale from '../../../helpers/hooks/useLocale';
import TitledPage from '../../../layouts/TitledPage';
import docsState from '../../../recoil/states/docsState';

import styles from './DocumentsPageContent.styles';

const useStyles = createUseStyles(styles);

function DocumentsPageContent(props) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  const docs = useRecoilValueLoadable(docsState);

  const renderDoc = (doc) => {
    let abstract = doc.abstract;
    if (!abstract) {
      if (doc.content.blocks && doc.content.blocks.length) {
        abstract = doc.content.blocks
          .map(({ data }) => {
            if (typeof data.text === 'string') {
              return data.text;
            }
            if (typeof data.caption === 'string') {
              return data.caption;
            }
            if (data.items && typeof data.items[0] === 'string') {
              return ' * ' + data.items.join(' // * ');
            }
          })
          .filter((item) => !!item)
          .join(' // ')
          .slice(0, 200);
      }
    }
    return <DocumentAbstractCard {...doc} abstract={abstract} />;
  };

  const docsInSidebar = 3;

  const sidebar = (
    <LoadableItemsList
      items={docs}
      renderItem={renderDoc}
      processors={[{ slice: [0, docsInSidebar] }]}
    />
  );

  const toolbar = {
    manageDocuments: [
      {
        label: <FaPlusCircle />,
        title: locale('Add new document'),
        link: '/docs/new',
        id: 'new-doc',
      },
    ],
  };

  const ItemsContainer = ({ className, children }) => {
    return (
      <ScrollLayout
        className={className}
        orientation="horizontal"
        scrollOrientation="vertical"
        gap="10px">
        {children}
      </ScrollLayout>
    );
  };

  return (
    <TitledPage
      title="Documentation"
      sidebarTitle={'Recent docs'}
      sidebarContent={sidebar}
      toolbarItems={toolbar}>
      <LoadableItemsList
        className={classes.docs}
        placeholderClassName={classes.placeholder}
        as={ItemsContainer}
        items={docs}
        renderItem={renderDoc}
      />
    </TitledPage>
  );
}

DocumentsPageContent.propTypes = {};

export default DocumentsPageContent;
