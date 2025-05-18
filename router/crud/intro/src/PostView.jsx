import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

const PostView = () => {
  const { id } = useParams();
  const history = useNavigate();
  const [post, setPost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:${import.meta.env.VITE_PORT_SERVER}/posts/${id}`)
      .then((response) => {
        setPost(response.data.post);
        setContent(response.data.post.content);
      })
      .catch((error) => console.error("Error fetching post:", error));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(
        `http://localhost:${import.meta.env.VITE_PORT_SERVER}/posts/${id}`
      )
      .then(() => history("/"))
      .catch((error) => console.error("Error deleting post:", error));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    axios
      .put(`http://localhost:${import.meta.env.VITE_PORT_SERVER}/posts/${id}`, {
        content,
      })
      .then(() => {
        setIsEditing(false);
        setPost({ ...post, content });
      })
      .catch((error) => console.error("Error updating post:", error));
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="post-element">
      {isEditing ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
          className="post-form"
        >
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <button type="submit" className="btn">
            Сохранить
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => {
              setContent(post.content);
              setIsEditing(false);
            }}
          >
            Отмена
          </button>
        </form>
      ) : (
        <div>
          <p>{post.content}</p>
          <p>Создано: {new Date(post.created).toLocaleString()}</p>
          <button className="btn" onClick={handleEdit}>
            Редактировать
          </button>
          <button className="btn" onClick={handleDelete}>
            Удалить
          </button>
          <Link to="/" className="btn">
            Назад
          </Link>
        </div>
      )}
    </div>
  );
};

export default PostView;
