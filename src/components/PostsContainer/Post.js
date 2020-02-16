// You will add code in this file

import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

const Post = props => {
  console.log(props.data.likes);
  // set up state for the likes
  let [like, setlikes] = useState(props.data.likes);
  const plusLike = () => {
    setlikes(like => like + 1);
  };

  return (
    <div className="post-border">
      <PostHeader username={props.username} thumbnailUrl={props.thumbnailUrl} />
      <div className="post-image-wrapper">
        <img alt="post thumbnail" className="post-image" src={props.imageUrl} />
      </div>
      <LikeSection plusLike={plusLike} likes={like} />
      <CommentSection postId={props.imageUrl} comments={props.comments} />
    </div>
  );
};

export default Post;
