import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage.jsx";
import NewsList from "./NewsList.jsx";
import NewsPage from "./NewsPage.jsx";
import Header from "./Header.jsx";
import NotFound from "./NotFound.jsx";
import "./App.css";

function App() {
  const [token, setToken] = useState(localStorage.getItem("user") || "");
  const [isAuthorized, setAuthorized] = useState(
    localStorage.getItem("user") !== null ? true : false
  );

  const login = (newToken) => {
    localStorage.setItem("user", newToken);
    setToken(newToken);
    setAuthorized(true);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setToken("");
    setAuthorized(false);
  };

  return (
    <div className="page-element">
      <Router>
        <Header isAuthorized={isAuthorized} login={login} logout={logout} />
        <Routes>
          <Route path="/" exact element={<LoginPage />}></Route>
          <Route
            path="/news"
            element={<NewsList token={token} logout={logout} />}
          ></Route>
          <Route
            path="/news/:id"
            element={<NewsPage token={token} logout={logout} />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
