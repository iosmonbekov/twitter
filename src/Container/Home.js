import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Post from "../Components/Post";

axios.defaults.baseURL = "https://twitter-42eb0.firebaseio.com/";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  const goToPostInfo = (id) => {
    history.push("/post/" + id);
  };

  useEffect(() => {
    request();
  }, []);

  const request = async () => {
    const response = await axios.get("posts.json");

    if (response.data) {
      const set = Object.keys(response.data).map((el) => {
        return {
          ...response.data[el],
          id: el,
        };
      });
      setPosts(set);
    }
  };
  return (
    <div className="Home">
      { posts.length !== 0 ? 
      posts.map((el) => {
        return (
          <Post
            title={el.title}
            key={el.id}
            date={el.time}
            click={() => goToPostInfo(el.id)}
          />
        );
      }):
      <div className='loading'>
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>}
    </div>
  );
}
