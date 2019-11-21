import React from "react";
import "./styles.css";

export const Feed = props => (
  <div className="feed">
    <div>User: {props.user}</div>
    <div>Says: {props.value}</div>
    <div>Time: {new Date(Number(props.timestamp)).toString()}</div>
    <div className="likes">
      <div>Likes: {props.likes}</div>
      <button onClick={() => props.addLike(props.id)}>+1</button>
    </div>
  </div>
);
