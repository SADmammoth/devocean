import React, { useCallback, useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { history } from 'umi';

import Form from '../../../components/generic/Form';
import Sidebar from '../../../components/generic/Sidebar';
import GridLayout from '../../../components/generic/layouts/GridLayout';
import Skip from '../../../components/generic/layouts/GridLayout/Skip';
import StackLayout from '../../../components/generic/layouts/StackLayout';
import useLocale from '../../../helpers/hooks/useLocale';
import useLocalizedForm from '../../../helpers/hooks/useLocalizedForm';
import Document from './Document';

import styles from './EditDocumentPageContent.styles';

const useStyles = createUseStyles(styles);

function EditDocumentPageContent({ initialValues, onSubmit }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [abstract, setAbstract] = useState(initialValues?.abstract);

  useEffect(() => {
    if (initialValues) setAbstract(initialValues.abstract);
  }, [initialValues?.abstract]);

  const onSubmitHandler = useCallback(
    (data) => {
      onSubmit({ abstract, ...data });
      history.push('/docs');
    },
    [abstract],
  );

  const localizedForm = useLocalizedForm([
    {
      type: 'textarea',
      name: 'abstract',
      id: 'abstract',
      label: 'Abstract',
      placeholder: 'Write a few words what is this document about',
      value: abstract,
      onChange: (name, value) => {
        setAbstract(value);
      },
    },
  ]);

  return (
    <GridLayout className={classes.content}>
      <Sidebar column={3} className={classes.paddingTop}>
        <Form inputs={localizedForm} submitButton={<></>} />
      </Sidebar>
      <Skip column={1} />
      <StackLayout
        className={classes.marginTop}
        column={5}
        orientation="vertical">
        <Document
          classes={classes}
          title={initialValues?.title}
          content={initialValues?.content}
          onSubmit={onSubmitHandler}
        />
      </StackLayout>
    </GridLayout>
  );
}

EditDocumentPageContent.propTypes = {};

export default EditDocumentPageContent;
