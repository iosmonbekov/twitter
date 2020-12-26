import React from "react";

export default function PostLook(props) {
  return (
    <div className="PostLook">
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
}
