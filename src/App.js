import React from "react";
import { Routes, Route } from "react-router-dom";

import Hackflix from "./components/Hackflix";
import MovieDetails from "./components/MovieDetails";
import Nav from "./components/Nav";
import SearchByName from "./components/SearchByName";

import "./Style.css";

function App() {
  return (
    <div>
      <Nav />
      <div style={{ marginTop: "10vh" }}></div>
      <Routes>
        <Route path="/" element={<Hackflix />} />
        <Route path="/pelicula/:id" element={<MovieDetails />} />
        <Route path="/search-by-name" element={<SearchByName/>} />
      </Routes>
    </div>
  );
}

export default App;
