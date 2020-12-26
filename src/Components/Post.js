import React from "react";

export default function Post(props) {
  return (
    <div className="Post">
      <p className="Post__time">Created on: {props.date}</p>
      <h2>{props.title}</h2>
      <button onClick={props.click} className="btn btn-secondary">
        Read More...
      </button>
    </div>
  );
}
