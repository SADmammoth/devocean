import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import { Validator } from '@sadmammoth/react-form';

import Form from '../../components/generic/Form';
import Sidebar from '../../components/generic/Sidebar';
import ToggleList from '../../components/generic/ToggleList/ToggleList';
import GridLayout from '../../components/generic/layouts/GridLayout';
import StackLayout from '../../components/generic/layouts/StackLayout';
import getInitTeammateProfileForm from '../../helpers/forms/getInitTeammateProfileForm';
import useLocalizedForm from '../../helpers/forms/useLocalizedForm';

import styles from './InitTeammateProfilePageContent.styles';

const useStyles = createUseStyles(styles);

function InitTeammateProfilePageContent({ config }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [hideWorkHours, setHideWorkHours] = useState(true);

  const [inputs, setInputs] = useState({});

  const localizedForm = useLocalizedForm(
    getInitTeammateProfileForm({ hideWorkHours, setHideWorkHours }),
  );

  return (
    <GridLayout className={classes.content}>
      <Sidebar column={3} className={classes.paddingTop}></Sidebar>
      <StackLayout column={5} className={classes.marginTop}>
        <Form
          inputs={localizedForm}
          onInputsUpdate={(inputs) => {
            setInputs(inputs);
          }}>
          {inputs.login}
          {inputs.email}
          {inputs.temporaryPassword}
          {inputs.joinedAt}
          <ToggleList
            initialState={false}
            title={{
              open:
                'This fields will be prefilled for team member on his first login. HIDE',
              hidden: 'Fill out additional fields',
            }}
            showMarker={false}>
            {inputs.name}
            {inputs.lastName}
            {inputs.workMode}
            {inputs.workHours}
            {inputs.workHoursStart}
            {inputs.workHoursEnd}
          </ToggleList>
        </Form>
      </StackLayout>
    </GridLayout>
  );
}

InitTeammateProfilePageContent.propTypes = {};

export default InitTeammateProfilePageContent;
