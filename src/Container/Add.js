import React from "react";
import { useHistory } from "react-router-dom";
import Loader from "../Components/Loader";

export default function Add(props) {
    const history = useHistory();

    const add = async () => {
        await props.postArticle(props.title, props.description);
        history.push("/");
    };

    return !props.isLoading ? (
        <div className="add">
            <h2>Add New Post</h2>
            <div>
                <p>Title:</p>
                <input
                    className="add__input form-control"
                    value={props.title}
                    onChange={(e) => props.setTitle(e.target.value)}
                ></input>
            </div>
            <div>
                <p>Description:</p>
                <textarea
                    className="form-control text-area"
                    value={props.description}
                    onChange={(e) => props.setDescription(e.target.value)}
                ></textarea>
            </div>
            <div>
                <button className="btn btn-primary" onClick={add}>
                    Add
                </button>
            </div>
        </div>
    ) : (
        <Loader />
    );
}
