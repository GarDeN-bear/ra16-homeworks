import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Header = ({ isAuthorized, login, logout }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfor] = useState("");
  const history = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user !== null) {
      getUserInfo();
    } else {
      history("/");
    }
  }, [isAuthorized]);

  const getUserInfo = () => {
    const token = localStorage.getItem("user");

    axios
      .get(`http://localhost:${import.meta.env.VITE_PORT_SERVER}/private/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserInfor(response.data);
      })
      .catch((error) => {
        console.error("Error GET user: ", error);
        if (error.status === 401) {
          logout();
        } else if (error.status === 404) {
          history("*");
        }
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:${import.meta.env.VITE_PORT_SERVER}/auth`, {
        login: username,
        password: password,
      })
      .then((response) => {
        history("/news");
        login(response.data.token);
        getUserInfo();
      })
      .catch((error) => console.error("Error auth: ", error));
  };

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    history("/");
  };

  return (
    <>
      <div className="header">
        <div className="logo">Neto Social</div>
        {!isAuthorized && (
          <div className="header-content">
            <form className="login-form" onSubmit={handleSubmit}>
              <input
                className="input"
                placeholder="Username"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              ></input>
              <input
                className="input"
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <button className="btn">LogIn</button>
            </form>
          </div>
        )}
        {isAuthorized && (
          <div className="header-content">
            <div className="user-info">
              <div className="user-greating">Hello, {userInfo.name}</div>
              <img src={userInfo.avatar} alt={userInfo.id} />
              <button className="btn btn-logout" onClick={handleLogout}>
                LogOut
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
