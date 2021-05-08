import React from "react";
import PanelCard from "../../generic/PanelCard";
import PropTypes from "prop-types";
import CommentAuthorBadge from "../CommentAuthorBadge/CommentAuthorBadge";
import StackLayout from "../../generic/layouts/StackLayout";
import Text from "../../generic/Text";
import FieldChange from "./FieldChange";

function SingleFieldChange({ text, from, to, author, time }) {
  return (
    <PanelCard orientation="vertical">
      <CommentAuthorBadge author={author} time={time} />
      <StackLayout alignY="center">
        <FieldChange from={from} to={to} />
      </StackLayout>
      <Text type="common">{text}</Text>
    </PanelCard>
  );
}

SingleFieldChange.propTypes = {};

export default SingleFieldChange;
