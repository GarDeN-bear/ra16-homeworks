import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PostCreate = () => {
  const [content, setContent] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:${import.meta.env.VITE_PORT_SERVER}/posts`, {
        content,
      })
      .then(() => history("/"))
      .catch((error) => console.error("Error creating post:", error));
  };

  return (
    <div className="post-element">
      <form onSubmit={handleSubmit} className="post-form">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Введите содержание поста"
          required
        />
        <button type="submit" className="btn">
          Опубликовать
        </button>
        <button type="button" className="btn" onClick={() => history("/")}>
          Отмена
        </button>
      </form>
    </div>
  );
};

export default PostCreate;
