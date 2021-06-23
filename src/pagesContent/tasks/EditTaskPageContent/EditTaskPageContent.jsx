import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { useRecoilStateLoadable, useSetRecoilState } from 'recoil';

import Form from '../../../components/generic/Form';
import Sidebar from '../../../components/generic/Sidebar';
import Text from '../../../components/generic/Text';
import GridLayout from '../../../components/generic/layouts/GridLayout';
import StackLayout from '../../../components/generic/layouts/StackLayout';
import getCreateTaskForm from '../../../helpers/forms/getCreateTaskForm';
import useLocale from '../../../helpers/hooks/useLocale';
import FormPage from '../../../layouts/FormPage/FormPage';
import useTemplate from './useTemplate';

import styles from './EditTaskPageContent.styles';

const useStyles = createUseStyles(styles);

function EditTaskPageContent({ edit, initialValues, onSubmit }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  const templateProps = useTemplate(initialValues.template);

  const [inputs, setInputs] = useState({});

  const title = edit ? locale('Edit task') : locale('Create task');

  return (
    <FormPage
      title={title}
      getInputs={() =>
        getCreateTaskForm({ ...initialValues, ...templateProps })
      }
      inputsAtSidebar={[
        'template',
        'priority',
        'estimate',
        'teammate',
        'list',
        'status',
      ]}
      inputsAtBody={['title', 'customFields']}
      onSubmit={onSubmit}></FormPage>
  );
}

EditTaskPageContent.propTypes = {
  initialValues: PropTypes.shape({
    title: PropTypes.string,
    priority: PropTypes.string,
    estimate: PropTypes.shape({
      toString: PropTypes.func,
    }),
    reportedTime: PropTypes.shape({
      toString: PropTypes.func,
    }),
    list: PropTypes.string.isRequired,
    teammate: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default EditTaskPageContent;
