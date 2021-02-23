import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Loader from "../Components/Loader";

export default function Edit(props) {
    const id = props.match.params.id;

    const history = useHistory();

    const add = () => {
        props.putArticle(id, props.article[0]).then(() => {
            history.push("/");
        });
    };

    useEffect(() => {
        props.getArticle(id);
    }, [id]);

    return !props.isLoading ? (
        <div className="add">
            <h2>Edit Post</h2>
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
                    Edit
                </button>
            </div>
        </div>
    ) : (
        <Loader />
    );
}
