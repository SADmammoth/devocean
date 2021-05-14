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
import useLocalizedForm from '../../../helpers/forms/useLocalizedForm';
import useLocale from '../../../helpers/hooks/useLocale';

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

  const localizedForm = useLocalizedForm(
    getCreateNotificationForm(initialValues),
  );

  const [inputs, setInputs] = useState({});

  const onInputsUpdate = (inputs) => {
    setInputs(inputs);
  };

  const title = isCreatingNew
    ? locale('New notification')
    : locale('Edit notification');

  return (
    <>
      <GridLayout className={classes.content}>
        <Sidebar column={3} className={classes.sidebar}>
          {inputs.time}
          {inputs.author}
        </Sidebar>
        <StackLayout
          column={5}
          className={classes.marginTop}
          orientation="vertical"
          alignY="start">
          <Text type="h1">{title}</Text>
          <StretchLayout>
            <Form
              inputs={localizedForm}
              onSubmit={onSubmit}
              onInputsUpdate={onInputsUpdate}>
              {inputs.title}
              {inputs.fullText}
            </Form>
          </StretchLayout>
        </StackLayout>
      </GridLayout>
    </>
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
