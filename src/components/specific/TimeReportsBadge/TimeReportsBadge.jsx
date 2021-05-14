import React from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import useLocale from '../../../helpers/hooks/useLocale';
import useProgress from '../../../helpers/hooks/useProgress';
import CircleProgressBar from '../../generic/CircleProgressBar';
import Text from '../../generic/Text';
import BlockDescriptionLayout from '../../generic/layouts/BlockDescriptionLayout';

import styles from './TimeReportsBadge.styles';

const useStyles = createUseStyles(styles);

function TimeReportsBadge({
  estimate,
  reportedTime,
  text,
  estimateUpdate,
  activity,
}) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();
  const progress = useProgress(reportedTime, estimate);

  return (
    <BlockDescriptionLayout>
      <BlockDescriptionLayout.Block>
        <CircleProgressBar
          progress={progress}
          width="5px"
          backdropColor={theme.background.light}
          backgroundColor={theme.background.dark}>
          <Text type="common" bold>
            {text || reportedTime.toString()}
          </Text>
        </CircleProgressBar>
      </BlockDescriptionLayout.Block>
      <BlockDescriptionLayout.Description>
        {estimateUpdate ? (
          <Text type="common" bold>
            {locale('Estimate set')}
          </Text>
        ) : (
          <Text type="common" bold>
            {locale('Reported')}
            {!activity || ` – ${activity}`}
          </Text>
        )}

        {!_.isNaN(estimate.value) && estimate.value ? (
          <Text type="small">
            {locale('from estimate', { estimate: estimate.toString() })}
          </Text>
        ) : null}
      </BlockDescriptionLayout.Description>
    </BlockDescriptionLayout>
  );
}

TimeReportsBadge.propTypes = {
  estimate: PropTypes.object,
  reportedTime: PropTypes.object,
};

export default TimeReportsBadge;
