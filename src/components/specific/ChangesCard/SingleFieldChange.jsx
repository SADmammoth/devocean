import React from "react";

import { FaChevronRight } from "react-icons/fa";

import PanelCard from "../../generic/PanelCard";

import PropTypes from "prop-types";
import CommentAuthorBadge from "../CommentAuthorBadge/CommentAuthorBadge";
import StackLayout from "../../generic/layouts/StackLayout";
import Text from "../../generic/Text";

function SingleFieldChange({ text, from, to, author, time }) {
  return (
    <PanelCard orientation="vertical">
      <CommentAuthorBadge author={author} time={time} />
      <StackLayout alignY="center">
        <div>{from}</div>
        <div>
          <FaChevronRight />
        </div>
        <div>{to}</div>
      </StackLayout>
      <Text type="common">{text}</Text>
    </PanelCard>
  );
}

SingleFieldChange.propTypes = {};

export default SingleFieldChange;
