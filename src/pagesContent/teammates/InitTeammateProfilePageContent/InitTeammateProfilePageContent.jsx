import React from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { useSetRecoilState } from 'recoil';
import { useHistory } from 'umi';

import Text from '../../../components/generic/Text';
import showPopup from '../../../helpers/components/showPopup';
import getInitTeammateProfileForm from '../../../helpers/forms/getInitTeammateProfileForm';
import FormPage from '../../../layouts/FormPage';
import subteamsState from '../../../recoil/states/subteamsState';
import tagsState from '../../../recoil/states/tagsState';

import styles from './InitTeammateProfilePageContent.styles';

const useStyles = createUseStyles(styles);

function InitTeammateProfilePageContent({ initialValues, onSubmit }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  const addTag = useSetRecoilState(tagsState);
  const addSubteam = useSetRecoilState(subteamsState);

  const addTagAction = async (value) => {
    const tag = await showPopup({
      inputs: [
        {
          type: 'text',
          name: 'name',
          id: 'name',
          label: locale('Tag name'),
        },
      ],
      children: <Text type="h2">{locale('New tag')}</Text>,
      closeButtonContent: locale('Create'),
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
          label: locale('Subteam name'),
        },
      ],
      children: <Text type="h2">{locale('New subteam')}</Text>,
      closeButtonContent: locale('Create'),
    });

    if (!subteam) return;

    await addSubteam({ name: subteam.name });

    return [...value, subteam.name];
  };

  const title = edit ? locale('Edit profile') : locale('Create profile');

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
      inputsAtSidebar={['avatar', 'subteams', 'tags', 'joinedAt']}
      inputsAtBody={[
        'name',
        'lastName',
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
