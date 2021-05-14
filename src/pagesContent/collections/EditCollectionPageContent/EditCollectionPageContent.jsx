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

import styles from './EditCollectionPageContent.styles';

const useStyles = createUseStyles(styles);

function EditCollectionPageContent({ edit, initialValues, onSubmit }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  const formInputs = useLocalizedForm(getCreateCollectionForm(initialValues));

  const [inputs, setInputs] = useState({});

  const title = edit
    ? locale('Edit task collection')
    : locale('New task collection');

  return (
    <GridLayout className={classes.content}>
      <Sidebar column={3} className={classes.sidebar}>
        {inputs.parent}
        {inputs.type?.props.value === 'folder' || inputs.color}
      </Sidebar>
      <StackLayout
        column={5}
        orientation="vertical"
        className={classes.marginTop}>
        <Text type="h1">{title}</Text>
        <Form
          inputs={formInputs}
          onSubmit={onSubmit}
          onInputsUpdate={(inputs) => {
            setInputs(inputs);
          }}>
          {inputs.name}
          {inputs.type}
        </Form>
      </StackLayout>
    </GridLayout>
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
