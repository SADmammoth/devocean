import React from 'react';

import { useTheme, createUseStyles } from 'react-jss';

import useLocale from '../../../helpers/hooks/useLocale';
import HiddenLink from '../../generic/HiddenLink';
import Text from '../../generic/Text';

import styles from './AppName.styles';

const useStyles = createUseStyles(styles);

const AppName = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  const Link = (props) => <HiddenLink to="/" {...props} />;

  return (
    <Text type="h1" as={Link} bold className={classes.appname}>
      {locale('appname')}
    </Text>
  );
};

export default AppName;
