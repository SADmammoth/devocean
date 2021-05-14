import React from 'react';

import Blocks from 'editorjs-blocks-react-renderer';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import Sidebar from '../../components/generic/Sidebar';
import Text from '../../components/generic/Text';
import GridLayout from '../../components/generic/layouts/GridLayout';
import Skip from '../../components/generic/layouts/GridLayout/Skip';
import StackLayout from '../../components/generic/layouts/StackLayout';

import styles from './DocumentContentPage.styles';

const useStyles = createUseStyles(styles);

function DocumentContentPage({ initialValues }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  console.log(initialValues);
  return (
    <GridLayout className={classes.content}>
      <Sidebar column={3} className={classes.paddingTop}>
        <Text type="common">{initialValues.abstract}</Text>
      </Sidebar>
      <Skip column={1} />
      <StackLayout
        column={5}
        className={classes.doc}
        orientation="vertical"
        className={classes.paddingTop}>
        <Text type="h1">{initialValues.title}</Text>
        <div className={classes.blocks}>
          <Blocks
            data={initialValues.content || { blocks: [] }}
            renderers={{
              simpleImage: ({ data, className = '' }) => {
                console.log(data);
                return (
                  <picture>
                    <img src={data.url} alt={data.caption} />
                    <caption>{data.caption}</caption>
                  </picture>
                );
              },
            }}
          />
        </div>
      </StackLayout>
    </GridLayout>
  );
}

DocumentContentPage.propTypes = {};

export default DocumentContentPage;
