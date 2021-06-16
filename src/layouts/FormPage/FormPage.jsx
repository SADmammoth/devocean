import React, { useState } from 'react';

import classNames from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import Form from '../../components/generic/Form';
import FormToast from '../../components/generic/FormToast/FormToast';
import Sidebar from '../../components/generic/Sidebar';
import Text from '../../components/generic/Text';
import GridLayout from '../../components/generic/layouts/GridLayout';
import ScrollLayout from '../../components/generic/layouts/ScrollLayout';
import StackLayout from '../../components/generic/layouts/StackLayout';
import useLocalizedForm from '../../helpers/forms/useLocalizedForm';
import useArrayState from '../../helpers/hooks/useArrayState';

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

  const [
    notifications,
    addNotification,
    closeNotification,
    clearNotifications,
  ] = useArrayState(0);

  const renderInput = (inputComponent) => {
    if (inputComponent?.$title) {
      return Object.values(_.omit(inputComponent, ['$title']));
    }
    return inputComponent;
  };

  return (
    <GridLayout className={classes.content}>
      <Sidebar
        column={3}
        className={classNames(classes.sidebar, classes.paddingTop)}>
        {typeof inputsAtSidebar === 'function'
          ? inputsAtSidebar(inputs).map((key) => renderInput(inputs[key]))
          : inputsAtSidebar.map((key) => renderInput(inputs[key]))}
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
          scrollOrientation="vertical"
          blockSnapType="start"
          scrollPaddingStart="20px"
          scrollPaddingEnd="20px">
          <Form
            notify={(type, message) => {
              if (type === 'error') {
                clearNotifications();
                addNotification({ type, message });
              }
            }}
            inputs={localizedForm}
            onSubmit={onSubmit}
            onInputsUpdate={onInputsUpdate}>
            {typeof inputsAtBody === 'function'
              ? inputsAtBody(inputs).map((key) => renderInput(inputs[key]))
              : inputsAtBody.map((key) => renderInput(inputs[key]))}
          </Form>
        </ScrollLayout>
      </StackLayout>
      <StackLayout
        className={classes.notifications}
        column={3}
        orientation="vertical"
        alignY="start"
        gap="10px">
        {notifications.map(({ id, type, message }, index) => {
          console.log(id);
          return (
            <FormToast
              key={id}
              type={type}
              message={message}
              onClose={() => closeNotification(id)}
            />
          );
        })}
      </StackLayout>
    </GridLayout>
  );
}

FormPage.propTypes = {};

export default FormPage;
