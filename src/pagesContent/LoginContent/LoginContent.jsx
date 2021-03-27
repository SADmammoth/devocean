import React from "react";
import { useTheme, createUseStyles } from "react-jss";
import { useSetRecoilState } from "recoil";
import Form from "../../components/generic/Form";
import GridLayout from "../../components/generic/layouts/GridLayout";
import Skip from "../../components/generic/layouts/GridLayout/Skip";
import StackLayout from "../../components/generic/layouts/StackLayout";
import getLoginForm from "../../helpers/forms/getLoginForm";
import useLocalizedForm from "../../helpers/forms/useLocalizedForm";
import { userState_login } from "../../recoil/states/userState";
import styles from "./LoginContent.styles";

const useStyles = createUseStyles(styles);

const LoginContent = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const localizedForm = useLocalizedForm(getLoginForm());
  const login = useSetRecoilState(userState_login);

  return (
    <>
      <StackLayout alignX="center">
        <Form column={3} inputs={localizedForm} onSubmit={login} />
      </StackLayout>
    </>
  );
};

export default LoginContent;
