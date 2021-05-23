import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';
import { useTheme, createUseStyles } from 'react-jss';
import {
  useRecoilStateLoadable,
  useRecoilValue,
  useRecoilValueLoadable,
} from 'recoil';

import Button from '../../../components/generic/Button';
import FoldersTree from '../../../components/generic/FoldersTree/FoldersTree';
import Sidebar from '../../../components/generic/Sidebar';
import GridLayout from '../../../components/generic/layouts/GridLayout';
import StackLayout from '../../../components/generic/layouts/StackLayout';
import FeatureDependentToolbar from '../../../components/specific/FeatureDependentToolbar/FeatureDependentToolbar';
import TaskFolderButton from '../../../components/specific/TaskFolderButton';
import TeammateProfileCard from '../../../components/specific/TeammateProfileCard/TeammateProfileCard';
import StateMonade from '../../../helpers/components/StateMonade';
import subteamsState from '../../../recoil/states/subteamsState';
import { teammateProfilesState_getBySubteam } from '../../../recoil/states/teammatesProfilesState';
import TeammatesList from './TeammatesList';
import currentSubteamState from './localState/currentSubteamState';

import styles from './TeammatesPageContent.styles';

const useStyles = createUseStyles(styles);

function TeammatesPageContent(props) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const subteams = useRecoilValueLoadable(subteamsState);

  const [currentSubteam, setCurrentSubteam] = useRecoilStateLoadable(
    currentSubteamState,
  );

  const [currentSubteamId, setCurrentSubteamId] = useState();

  useEffect(() => {
    if (subteams.state === 'hasValue') {
      setCurrentSubteamId(subteams.contents[currentSubteam.contents]?.id);
    }
  }, [subteams, currentSubteam]);

  return (
    <GridLayout className={classes.content}>
      <Sidebar column={3} title="Subteams">
        <FoldersTree
          folders={subteams.contents}
          onSelectedChange={(index) => {
            setCurrentSubteam(index);
          }}
          FolderBase={TaskFolderButton}
        />
      </Sidebar>
      <StackLayout column={7} className={classes.marginTop}>
        <StackLayout gap="10px" alignY="start" alignX="start">
          <StateMonade state={!!currentSubteamId}>
            <TeammatesList subteamId={currentSubteamId} />
          </StateMonade>
        </StackLayout>
      </StackLayout>
      <StackLayout column={1} className={classes.marginTop}>
        <FeatureDependentToolbar
          expandable
          items={{
            manageTeammates: [
              {
                label: <FaPlusCircle />,
                title: 'Add new teammate',
                link: '/teammates/new',
                id: 'new-teammate',
              },
            ],
          }}
        />
      </StackLayout>
    </GridLayout>
  );
}

TeammatesPageContent.propTypes = {};

export default TeammatesPageContent;
