import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import axios from "axios";
import Loader from "../Components/Loader";

axios.defaults.baseURL = "https://twitter-42eb0.firebaseio.com/";

export default function Add() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [flag, setFlag] = useState(true);
    const { id } = useParams();

    const history = useHistory();

    useEffect(() => {
        if (id) {
            request();
        }
    }, [id]);

    const add = async () => {
        if (description && title) {
            setFlag(false);
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
        }
    };

    const request = async () => {
        const response = await axios.get("posts/" + id + ".json");
        setTitle(response.data.title);
        setDescription(response.data.text);
    };

    return flag ? (
        <div className="add">
            <h2>{id ? "Edit Post" : "Add New Post"}</h2>
            <div>
                <p>Title:</p>
                <input
                    className="add__input form-control"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                ></input>
            </div>
            <div>
                <p>Description:</p>
                <textarea
                    className="form-control text-area"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                ></textarea>
            </div>
            <div>
                <button className="btn btn-primary" onClick={add}>
                    {id ? "Edit" : "Add"}
                </button>
            </div>
        </div>
    ) : (
        <Loader />
    );
}
