import React from 'react';

import _ from 'lodash';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { useSetRecoilState } from 'recoil';

import showPopup from '../../../helpers/components/showPopup';
import Duration from '../../../helpers/types/Duration';
import reportsState from '../../../recoil/states/reportsState';
import Button from '../../generic/Button';

import styles from './ReportPopup.styles';

const useStyles = createUseStyles(styles);

function ReportPopup({ id }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const addReport = useSetRecoilState(reportsState(id));

  const popup = () =>
    showPopup({
      inputs: [
        {
          type: 'text',
          name: 'reportedTime',
          label: 'Reported time',
          validator: (input) => {
            return !_.isNaN(new Duration(input).value);
          },
        },
        {
          type: 'select',
          name: 'activity',
          label: 'Activity',
          valueOptions: [
            {
              label: 'Development',
              value: 'Development',
            },
            {
              label: 'Testing',
              value: 'Testing',
            },
          ],
        },
      ],
      children: [],
      closeButtonContent: 'Report',
    });

  return (
    <Button
      onClick={() => {
        popup().then(({ reportedTime, activity }) => {
          addReport({
            reportedTime: new Duration(reportedTime).getHours(),
            activity,
            task: id,
          });
        });
      }}>
      Report
    </Button>
  );
}

ReportPopup.propTypes = {};

export default ReportPopup;
