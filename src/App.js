import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// package
// components
import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";
// icons

import React, { useContext } from "react";
import { Context } from "./context/contextApi";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const { login } = useContext(Context);

  return (
    <BrowserRouter>
      <div className="flex flex-col h-full">
        <Header />
        <Routes>
          {login ? (
            <Route path="/" exact element={<Feed />} />
          ) : (
            <Route path="/" exact element={<Login />} />
          )}
          <Route path="/register" element={<Register />} />
          <Route path="/searchResult/:searchQuery" element={<SearchResult />} />
          <Route path="/video/:id" element={<VideoDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
