import React, { useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./DiscussionsPageContent.styles";
import StackLayout from "../../../components/generic/layouts/StackLayout";
import MessageBox from "../../../components/generic/MessageBox/MessageBox";
import CreateCommentForm from "./CreateCommentForm";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import discussionsState from "../../../recoil/states/discussionsState";
import StateMonade from "../../../helpers/StateMonade";

const useStyles = createUseStyles(styles);

function DiscussionsPageContent({ id }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const discussions = useRecoilValueLoadable(discussionsState(id));
  useEffect(() => {
    console.log(discussions);
  }, [discussions.state]);

  const renderDiscussions = useCallback(() => {
    if (discussions.state === "hasValue")
      return discussions.contents.map((discussion) => {
        return <MessageBox {...discussion} />;
      });
  }, [discussions.contents]);

  return (
    <StackLayout orientation="vertical" className={classes.messageBoard}>
      <StateMonade state={discussions.state}>
        <StackLayout
          orientation="vertical"
          className={classes.messageBoard}
          allowScroll
        >
          {renderDiscussions()}
        </StackLayout>
      </StateMonade>
      <CreateCommentForm id={id} />
    </StackLayout>
  );
}

DiscussionsPageContent.propTypes = {};

export default DiscussionsPageContent;
