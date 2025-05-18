import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostList from "./PostList";
import PostCreate from "./PostCreate";
import PostView from "./PostView";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<PostList />} />
        <Route path="/posts/new" element={<PostCreate />} />
        <Route path="/posts/:id" element={<PostView />} />
      </Routes>
    </Router>
  );
};

export default App;
