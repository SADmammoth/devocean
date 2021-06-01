import React, { useState } from 'react';

import _ from 'lodash';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { Validator } from '@sadmammoth/react-form';

import Form from '../../../components/generic/Form';
import Sidebar from '../../../components/generic/Sidebar';
import Text from '../../../components/generic/Text';
import ToggleList from '../../../components/generic/ToggleList/ToggleList';
import GridLayout from '../../../components/generic/layouts/GridLayout';
import StackLayout from '../../../components/generic/layouts/StackLayout';
import showPopup from '../../../helpers/components/showPopup';
import getInitTeammateProfileForm from '../../../helpers/forms/getInitTeammateProfileForm';
import useLocalizedForm from '../../../helpers/forms/useLocalizedForm';
import FormPage from '../../../layouts/FormPage';
import subteamsState from '../../../recoil/states/subteamsState';
import tagsState from '../../../recoil/states/tagsState';

import styles from './InitTeammateProfilePageContent.styles';

const useStyles = createUseStyles(styles);

function InitTeammateProfilePageContent({ initialValues, edit, onSubmit }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const addTag = useSetRecoilState(tagsState);
  const addSubteam = useSetRecoilState(subteamsState);

  const addTagAction = async (value) => {
    const tag = await showPopup({
      inputs: [
        {
          type: 'text',
          name: 'name',
          id: 'name',
          label: 'Tag name',
        },
      ],
      children: <Text type="h2">New tag</Text>,
      closeButtonContent: 'Create',
    });

    if (!tag) return;

    await addTag({ name: tag.name });

    return [...value, tag.name];
  };

  const addSubteamAction = async (value) => {
    const subteam = await showPopup({
      inputs: [
        {
          type: 'text',
          name: 'name',
          id: 'name',
          label: 'Subteam name',
        },
      ],
      children: <Text type="h2">New subteam</Text>,
      closeButtonContent: 'Create',
    });

    if (!subteam) return;

    await addSubteam({ name: subteam.name });

    return [...value, subteam.name];
  };

  const title = edit ? 'Edit profile' : 'Create profile';

  return (
    <FormPage
      title={title}
      getInputs={() =>
        getInitTeammateProfileForm({
          ...initialValues,
          addTagAction,
          addSubteamAction,
        })
      }
      onSubmit={onSubmit}
      inputsAtSidebar={[
        'name',
        'lastName',
        'subteams',
        'tags',
        'joinedAt',
        'avatar',
      ]}
      inputsAtBody={[
        'login',
        'email',
        'temporaryPassword',
        'workMode',
        'workHours',
        'workHoursStart',
        'workHoursEnd',
      ]}
    />
  );
}

InitTeammateProfilePageContent.propTypes = {};

export default InitTeammateProfilePageContent;
