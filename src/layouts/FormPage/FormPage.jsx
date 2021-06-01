import React, { useState } from 'react';

import classNames from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import Form from '../../components/generic/Form';
import Sidebar from '../../components/generic/Sidebar';
import Text from '../../components/generic/Text';
import GridLayout from '../../components/generic/layouts/GridLayout';
import ScrollLayout from '../../components/generic/layouts/ScrollLayout';
import StackLayout from '../../components/generic/layouts/StackLayout';
import useLocalizedForm from '../../helpers/forms/useLocalizedForm';

import styles from './FormPage.styles';

const useStyles = createUseStyles(styles);

function FormPage({
  title,
  getInputs,
  onSubmit,
  inputsAtSidebar,
  inputsAtBody,
  sidebarContent,
}) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const localizedForm = useLocalizedForm(getInputs());

  const [inputs, setInputs] = useState({});

  const onInputsUpdate = (inputs) => {
    setInputs(inputs);
  };

  return (
    <GridLayout className={classes.content}>
      <Sidebar
        column={3}
        className={classNames(classes.sidebar, classes.paddingTop)}>
        {typeof inputsAtSidebar === 'function'
          ? inputsAtSidebar(inputs).map((key) => inputs[key])
          : inputsAtSidebar.map((key) => inputs[key])}
        {sidebarContent}
      </Sidebar>
      <StackLayout
        column={5}
        className={classes.marginTop}
        orientation="vertical"
        alignY="start">
        <Text type="h1">{title}</Text>
        <ScrollLayout
          className={classes.scrollArea}
          orientation="vertical"
          scrollOrientation="vertical">
          <Form
            inputs={localizedForm}
            onSubmit={onSubmit}
            onInputsUpdate={onInputsUpdate}>
            {typeof inputsAtBody === 'function'
              ? inputsAtBody(inputs).map((key) => inputs[key])
              : inputsAtBody.map((key) => inputs[key])}
          </Form>
        </ScrollLayout>
      </StackLayout>
    </GridLayout>
  );
}

FormPage.propTypes = {};

export default FormPage;
