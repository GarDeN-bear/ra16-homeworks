import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:${import.meta.env.VITE_PORT_SERVER}/posts`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => console.error("Error get post list:", error));
  }, []);

  return (
    <div className="post-element">
      <div className="post-list">
        <div className="create-button-header">
          <Link to="/posts/new" className="btn">
            Создать пост
          </Link>
        </div>
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <Link to={`/posts/${post.id}`} className="post-link">
              <div className="post-content">{post.content}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
