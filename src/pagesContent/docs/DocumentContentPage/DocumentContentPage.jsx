import React from 'react';

import Blocks from 'editorjs-blocks-react-renderer';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import Button from '../../../components/generic/Button';
import Interactive from '../../../components/generic/Interactive';
import Sidebar from '../../../components/generic/Sidebar';
import Text from '../../../components/generic/Text';
import GridLayout from '../../../components/generic/layouts/GridLayout';
import Skip from '../../../components/generic/layouts/GridLayout/Skip';
import ScrollLayout from '../../../components/generic/layouts/ScrollLayout';
import StackLayout from '../../../components/generic/layouts/StackLayout';
import FeatureMonade from '../../../helpers/components/FeatureMonade';
import useLocale from '../../../helpers/hooks/useLocale';
import TitledPage from '../../../layouts/TitledPage';

import styles from './DocumentContentPage.styles';

const useStyles = createUseStyles(styles);

function DocumentContentPage({ initialValues }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  const InteractiveButton = Interactive(Button);

  const sidebar = (
    <StackLayout orientation="vertical" gap="10px">
      {!initialValues.abstract || (
        <Text className={classes.abstract} type="common">
          {initialValues.abstract}
        </Text>
      )}
      <FeatureMonade feature="manageDocuments">
        <InteractiveButton link={`/docs/${initialValues.id}/edit`}>
          {locale('Edit')}
        </InteractiveButton>
      </FeatureMonade>
    </StackLayout>
  );

  return (
    <TitledPage title={initialValues.title} sidebarContent={sidebar}>
      <ScrollLayout
        className={classes.blocks}
        orientation="vertical"
        scrollOrientation="vertical"
        nowrap
        gap="5px">
        {initialValues?.content?.blocks &&
        initialValues?.content?.blocks.length ? (
          <Blocks
            data={initialValues.content || { blocks: [] }}
            renderers={{
              simpleImage: ({ data, className = '' }) => {
                return (
                  <picture>
                    <img src={data.url} alt={data.caption} />
                    {!data.caption || <caption>{data.caption}</caption>}
                  </picture>
                );
              },
              code: ({ data }) => {
                let code = data.code.trim().split('\n');

                if (code.length > 1) {
                  code = code.map((line) => <pre className="line">{line}</pre>);
                }
                return (
                  <code>
                    <pre>{code}</pre>
                  </code>
                );
              },
              table: ({ data }) => {
                return (
                  <table>
                    <thead>
                      {data.content[0].map((text) => (
                        <th>{text}</th>
                      ))}
                    </thead>
                    <tbody>
                      {data.content.slice(1).map((row) => (
                        <tr>
                          {row.map((text) => (
                            <td>{text}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                );
              },
            }}
          />
        ) : (
          <Text className={classes.placeholder} type="big">
            {
              locale(
                'Empty document',
              ) /* Document is empty. Press "Edit" to add
            content*/
            }
          </Text>
        )}
      </ScrollLayout>
    </TitledPage>
  );
}

DocumentContentPage.propTypes = {};

export default DocumentContentPage;
