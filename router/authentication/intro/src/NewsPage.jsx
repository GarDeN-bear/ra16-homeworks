import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const NewsPage = ({ token, logout }) => {
  const [newsInfo, setNewsInfo] = useState("");
  const { id } = useParams();
  const history = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user !== null) {
      getNewsInfo();
    } else {
      logout();
    }
  }, [token]);

  const getNewsInfo = () => {
    axios
      .get(
        `http://localhost:${
          import.meta.env.VITE_PORT_SERVER
        }/private/news/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setNewsInfo(response.data);
      })
      .catch((error) => {
        console.error("Error GET news info: ", error);
        if (error.status === 401) {
          logout();
        } else if (error.status === 404) {
          history("*");
        }
      });
  };

  return (
    <div className="page-body ">
      <div className="news-card-page">
        <img src={newsInfo.image} alt={newsInfo.title} />
        <h3>Title</h3>
        <span>{newsInfo.content}</span>
      </div>
    </div>
  );
};

export default NewsPage;
