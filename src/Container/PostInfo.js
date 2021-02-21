import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Loader from "../Components/Loader";
import PostLook from "../Components/PostLook";

export default function PostInfo(props) {
    const id = props.match.params.id;
    const history = useHistory();
    useEffect(() => {
        props.getOneArticle(id);
    }, [id]);

    const remove = async (id) => {
        await props.deleteArticle(id);
        history.push("/");
    };

    return props.isLoading ? (
        <div>
            {props.article.map((el, index) => {
                return <PostLook text={el.text} title={el.title} key={index} />;
            })}
            <div className="Buttons">
                <button className="btn btn-danger" onClick={() => remove(id)}>
                    Delete
                </button>
                <button
                    className="btn btn-warning"
                    onClick={() => history.push("/add/" + id)}
                >
                    Edit
                </button>
            </div>
        </div>
    ) : (
        <Loader />
    );
}
