import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const NewsList = ({ token, logout }) => {
  const [news, setNews] = useState("");
  const history = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user !== null) {
      getNews();
    }
  }, [token]);

  const getNews = () => {
    axios
      .get(
        `http://localhost:${import.meta.env.VITE_PORT_SERVER}/private/news`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setNews(response.data);
      })
      .catch((error) => {
        console.error("Error GET news: ", error);
        if (error.status === 401) {
          logout();
        } else if (error.status === 404) {
          history("*");
        }
      });
  };

  return (
    <div className="page-body ">
      <div className="news-list">
        {news &&
          news.map((newsInfo) => (
            <div className="news-card" key={newsInfo.id}>
              <Link key={newsInfo.id} to={`/news/${newsInfo.id}`}>
                <img src={newsInfo.image} alt={newsInfo.title} />
              </Link>
              <h3>Title</h3>
              <span>{newsInfo.content}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewsList;
