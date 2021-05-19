import React, { useCallback } from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles, ThemeProvider } from 'react-jss';
import { IntlProvider } from 'umi';

import themeGlobal from '../../../theme';
import Button from '../Button';
import PanelCard from '../PanelCard';
import StackLayout from '../layouts/StackLayout';
import PopupForm from './PopupForm';

import styles from './PopupWindow.styles';

const useStyles = createUseStyles(styles);

function PopupWindow({
  inputs,
  onClose,
  closeButtonContent,
  showCancelButton = true,
  cancelText,
  children,
}) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const renderContent = useCallback(() => {
    if (inputs) {
      return (
        <PopupForm
          inputs={inputs}
          onSubmit={onClose}
          submitText={closeButtonContent}>
          {!showCancelButton || (
            <Button onClick={() => onClose(false)}>
              {cancelText || 'Cancel'}
            </Button>
          )}
        </PopupForm>
      );
    } else {
      return (
        <StackLayout gap="5px" alignX="center">
          <Button onClick={() => onClose(true)}>{closeButtonContent}</Button>,
          {!showCancelButton || (
            <Button onClick={() => onClose(false)}>
              {cancelText || 'Cancel'}
            </Button>
          )}
        </StackLayout>
      );
    }
  }, [inputs, onClose, closeButtonContent, showCancelButton, cancelText]);

  return (
    <>
      <PanelCard className={classes.popup} orientation="vertical" gap="20px">
        <StackLayout orientation="vertical" gap="10px">
          {children}
        </StackLayout>
        {renderContent()}
      </PanelCard>
      <div className={classes.backdrop}></div>
    </>
  );
}

PopupWindow.propTypes = {};

export default (props) => (
  <IntlProvider>
    <ThemeProvider theme={themeGlobal}>
      <PopupWindow {...props} />
    </ThemeProvider>
  </IntlProvider>
);
