//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

function makeNote(obj) {
  return (
    <Post
      username={obj.username}
      thumbnailUrl={obj.thumbnailUrl}
      imageUrl={obj.imageUrl}
      comments={obj.comments}
      likes={obj.likes}
      data={obj}
    />
  );
}
// pass the data from App.js down as props then map through the data
const PostsPage = props => {
  return (
    <div className="posts-container-wrapper">
      {/* map through data here */}
      {props.data.map(makeNote)}

      {/* test <Post
        username={props.data[0].username}
        thumbnailUrl={props.data[1].thumbnailUrl}
        imageUrl={props.data[0].imageUrl}
      /> */}
    </div>
  );
};

export default PostsPage;
