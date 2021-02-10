import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import PostLook from "../Components/PostLook";

axios.defaults.baseURL = "https://twitter-42eb0.firebaseio.com/";

export default function PostInfo() {
  const [post, setPost] = useState([]);
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    getPostInfo(id);
  }, [id]);

  const goToPostEdit = (id) => {
    history.push("/add/" + id);
  };

  const getPostInfo = async (id) => {
    const response = await axios.get("posts/" + id + ".json");
    setPost([...post, response.data]);
  };

  const remove = async (id) => {
    await axios.delete("posts/" + id + ".json");
    history.push("/");
  };

  return (
    post.length !== 0 ? 
    <div>
      {post.map((el, index) => {
        return <PostLook text={el.text} title={el.title} key={index} />;
      })}
      <div className="Buttons">
        <button className="btn btn-danger" onClick={() => remove(id)}>
          Delete
        </button>
        <button className="btn btn-warning" onClick={() => goToPostEdit(id)}>
          Edit
        </button>
      </div>
    </div>
    :
    <div className='loading'>
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
