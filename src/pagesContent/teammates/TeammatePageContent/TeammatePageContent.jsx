import React from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { getLocale } from 'umi';

import Avatar from '../../../components/generic/Avatar';
import Button from '../../../components/generic/Button';
import Interactive from '../../../components/generic/Interactive/Interactive';
import PanelCard from '../../../components/generic/PanelCard';
import Sidebar from '../../../components/generic/Sidebar';
import Text from '../../../components/generic/Text';
import WorkDaysBadge from '../../../components/generic/WorkDaysBadge';
import WorkHoursBadge from '../../../components/generic/WorkHoursBadge/WorkHoursBadge';
import BlockDescriptionLayout from '../../../components/generic/layouts/BlockDescriptionLayout';
import GridLayout from '../../../components/generic/layouts/GridLayout';
import StackLayout from '../../../components/generic/layouts/StackLayout';
import TeammateStatusBadge from '../../../components/specific/TeammateStatusBadge/TeammateStatusBadge';
import FeatureMonade from '../../../helpers/components/FeatureMonade';
import formatName from '../../../helpers/functions/formatName';
import useLocale from '../../../helpers/hooks/useLocale';
import { teammatesState_getWithTasks } from '../../../recoil/states/teammatesState';
import { userDataState } from '../../../recoil/states/userState';

import styles from './TeammatePageContent.styles';

const useStyles = createUseStyles(styles);

function TeammatePageContent({ initialValues }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  const {
    id,
    avatar,
    name,
    lastName,
    shortName,
    joinedAt,
    referAs,
    aboutYourself,
    workDays,
    workHours,
    workHoursStart,
    workHoursEnd,
    status,
    actualStatus,
  } = initialValues;

  const userData = useRecoilValueLoadable(userDataState);

  const ButtonLink = Interactive(Button);

  const editButton = (
    <ButtonLink link={`/teammates/${id}/edit`}>{locale('Edit')}</ButtonLink>
  );

  return (
    <GridLayout className={classes.content}>
      <Sidebar column={3} className={classes.paddingTop}>
        <StackLayout gap="10px" alignY="start">
          <PanelCard orientation="vertical">
            <TeammateStatusBadge status={status} actualStatus={actualStatus} />
          </PanelCard>
          {!workDays || (
            <PanelCard orientation="vertical">
              <Text type="common" bold>
                Working days
              </Text>
              <WorkDaysBadge days={workDays} />
            </PanelCard>
          )}
          {(!workHoursStart && !workHoursEnd) || (
            <PanelCard orientation="vertical">
              <Text type="common" bold>
                Working hours
              </Text>

              <WorkHoursBadge
                type={workHours}
                start={workHoursStart}
                end={workHoursEnd}
              />
            </PanelCard>
          )}
          {userData?.contents && id === userData.contents?.id ? (
            editButton
          ) : (
            <FeatureMonade feature="manageTeammates">
              {editButton}
            </FeatureMonade>
          )}
        </StackLayout>
      </Sidebar>
      <StackLayout
        column={7}
        className={classes.marginTop}
        orientation="vertical"
        gap="30px">
        <BlockDescriptionLayout>
          <BlockDescriptionLayout.Block>
            <Avatar
              image={avatar}
              displayName={formatName({ name, lastName })}
              size="85px"
            />
          </BlockDescriptionLayout.Block>
          <BlockDescriptionLayout.Description alignY="center">
            <Text type="h1" className={classes.name}>
              {name} {lastName}
            </Text>
            {shortName ? (
              <>
                <Text type="sub">
                  {locale('shortName', {
                    referAs: locale(referAs + 'Form'),
                    shortName,
                  })}
                </Text>
              </>
            ) : (
              <Text type="sub">{locale(referAs + 'Full')}</Text>
            )}
          </BlockDescriptionLayout.Description>
        </BlockDescriptionLayout>
        <StackLayout orientation="vertical" gap="0">
          <h2>
            <Text type="h2" as="span">
              Joined at
            </Text>
          </h2>
          <Text type="common">
            {new Date(joinedAt).toLocaleDateString(getLocale)}
          </Text>
        </StackLayout>
        {aboutYourself ? (
          <StackLayout orientation="vertical" gap="0">
            <h2>
              <Text type="h2" as="span" italic>
                {shortName || name}
              </Text>{' '}
              <Text type="h2" as="span">
                in few words
              </Text>
            </h2>
            <Text type="common">{aboutYourself}</Text>
          </StackLayout>
        ) : null}
      </StackLayout>
    </GridLayout>
  );
}

TeammatePageContent.propTypes = {};

export default TeammatePageContent;
