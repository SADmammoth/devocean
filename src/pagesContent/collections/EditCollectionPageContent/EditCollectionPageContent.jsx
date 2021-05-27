import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import Form from '../../../components/generic/Form';
import Sidebar from '../../../components/generic/Sidebar';
import Text from '../../../components/generic/Text';
import GridLayout from '../../../components/generic/layouts/GridLayout';
import StackLayout from '../../../components/generic/layouts/StackLayout';
import getCreateCollectionForm from '../../../helpers/forms/getCreateCollectionForm';
import useLocalizedForm from '../../../helpers/forms/useLocalizedForm';
import useLocale from '../../../helpers/hooks/useLocale';
import FormPage from '../../../layouts/FormPage';

import styles from './EditCollectionPageContent.styles';

const useStyles = createUseStyles(styles);

function EditCollectionPageContent({ edit, initialValues, onSubmit }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  const title = edit
    ? locale('Edit task collection')
    : locale('New task collection');

  return (
    <FormPage
      getInputs={() => getCreateCollectionForm(initialValues)}
      title={title}
      inputsAtSidebar={(inputs) =>
        inputs.type?.props.value === 'list'
          ? ['parent', 'folder', 'color']
          : ['parent', 'folder']
      }
      inputsAtBody={['name', 'type']}
      onSubmit={onSubmit}
    />
  );
}

EditCollectionPageContent.propTypes = {
  edit: PropTypes.bool,
  initialValues: PropTypes.shape({}),
  onSubmit: PropTypes.func.isRequired,
};

EditCollectionPageContent.defaultProps = {
  edit: false,
  initialValues: {},
};

export default EditCollectionPageContent;
