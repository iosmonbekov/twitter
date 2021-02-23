import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Loader from "../Components/Loader";
import Post from "../Components/Post";

export default function Home(props) {
    const history = useHistory();

    const goToPostInfo = (id) => {
        history.push("/post/" + id);
    };

    useEffect(() => {
        props.getArticles();
    }, []);

    return (
        <div className="Home">
            {props.isLoading ? (
                props.articles
                    .slice(0)
                    .reverse()
                    .map((el) => {
                        return (
                            <Post
                                title={el.title}
                                key={el.id}
                                date={el.time}
                                click={() => goToPostInfo(el.id)}
                            />
                        );
                    })
            ) : (
                <Loader />
            )}
        </div>
    );
}
