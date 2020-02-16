// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  function makeComments(obj) {
    return <Comment username={obj.username} text={obj.text} />;
  }

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {props.comments.map(makeComments)}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
