import React from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { useSetRecoilState } from 'recoil';

import Text from '../../../components/generic/Text';
import showPopup from '../../../helpers/components/showPopup';
import getCreateTeammateProfileForm from '../../../helpers/forms/getCreateTeammateProfileForm';
import FormPage from '../../../layouts/FormPage';
import subteamsState from '../../../recoil/states/subteamsState';
import tagsState from '../../../recoil/states/tagsState';

import styles from './CreateTeammateProfilePageContent.styles';

const useStyles = createUseStyles(styles);

function CreateTeammateProfilePageContent({ initialValues, onSubmit }) {
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

  const title = 'Create profile';

  return (
    <FormPage
      title={title}
      getInputs={() =>
        getCreateTeammateProfileForm({
          ...initialValues,
          addTagAction,
          addSubteamAction,
        })
      }
      onSubmit={onSubmit}
      inputsAtSidebar={['name', 'lastName', 'subteams', 'tags', 'joinedAt']}
      inputsAtBody={[
        'login',
        'temporaryPassword',
        'email',
        'workMode',
        'workHours',
        'workHoursStart',
        'workHoursEnd',
      ]}
    />
  );
}

CreateTeammateProfilePageContent.propTypes = {};

export default CreateTeammateProfilePageContent;
