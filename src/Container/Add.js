import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "https://twitter-42eb0.firebaseio.com/";

export default function Add() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { id } = useParams();

  const history = useHistory();

  useEffect(() => {
    if (id) {
      request();
    }
  }, [id]);

  const add = async () => {
    const post = {
      title: title,
      text: description,
      time:
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate() +
        " " +
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds(),
    };
    setDescription("");
    setTitle("");
    if (id) {
      await axios.put("posts/" + id + ".json", post);
    } else {
      await axios.post("posts.json", post);
    }
    history.push("/");
  };

  const request = async () => {
    const response = await axios.get("posts/" + id + ".json");
    setTitle(response.data.title);
    setDescription(response.data.text);
  };

  return (
    <div className="add">
      <h2>{id ? "Edit Post" : "Add New Post"}</h2>
      <div>
        <p>Title</p>
        <input
          className="add__input"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        ></input>
      </div>
      <div>
        <p>Description</p>
        <textarea
          cols="55"
          rows="10"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
      </div>
      <div>
        <button className="btn btn-secondary" onClick={add}>
          {id ? "Edit" : "Add"}
        </button>
      </div>
    </div>
  );
}
