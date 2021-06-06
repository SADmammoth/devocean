import React from 'react';

import _ from 'lodash';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { useSetRecoilState } from 'recoil';

import showPopup from '../../../helpers/components/showPopup';
import getTimeReportForm from '../../../helpers/forms/getTimeReportForm';
import useLocalizedForm from '../../../helpers/forms/useLocalizedForm';
import Duration from '../../../helpers/types/Duration';
import reportsState from '../../../recoil/states/reportsState';
import Button from '../../generic/Button';

import styles from './ReportPopup.styles';

const useStyles = createUseStyles(styles);

function ReportPopup({ id }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const addReport = useSetRecoilState(reportsState(id));
  const localizedForm = useLocalizedForm(getTimeReportForm());

  const popup = () =>
    showPopup({
      inputs: localizedForm,
      children: [],
      closeButtonContent: 'Report',
    });

  return (
    <Button
      onClick={() => {
        popup().then((result) => {
          if (!result) {
            return;
          }
          const { reportedTime, activity } = result;
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
