import React, { useState } from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import Form from '../../../components/generic/Form';
import Sidebar from '../../../components/generic/Sidebar';
import Text from '../../../components/generic/Text';
import GridLayout from '../../../components/generic/layouts/GridLayout';
import StackLayout from '../../../components/generic/layouts/StackLayout';
import StretchLayout from '../../../components/generic/layouts/StretchLayout';
import getCreateNotificationForm from '../../../helpers/forms/getCreateNotificationForm';
import useLocale from '../../../helpers/hooks/useLocale';
import FormPage from '../../../layouts/FormPage/FormPage';

import styles from './EditNotificationPageContent.styles';

const useStyles = createUseStyles(styles);

function EditNotificationPageContent({
  isCreatingNew,
  initialValues,
  onSubmit,
}) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  const title = isCreatingNew
    ? locale('New notification')
    : locale('Edit notification');

  return (
    <FormPage
      title={title}
      getInputs={() => getCreateNotificationForm(initialValues)}
      inputsAtSidebar={['time']}
      inputsAtBody={['title', 'fullText']}
      onSubmit={onSubmit}
    />
  );
}

EditNotificationPageContent.propTypes = {
  isCreatingNew: PropTypes.bool,
  initialValues: PropTypes.shape({
    title: PropTypes.string,
    fullText: PropTypes.string,
    time: PropTypes.string,
    author: PropTypes.string,
  }),
  onSubmit: PropTypes.func,
};

export default EditNotificationPageContent;
