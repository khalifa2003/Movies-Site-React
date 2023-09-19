import React, { useEffect, useState } from "react";
import NavBar from "./Component/NavBar";
import { Container } from "react-bootstrap";
import MoviesList from "./Component/MoviesList";
import axios from "axios";
import MovieDeatails from "./Component/MovieDeatails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovie } from "./redux/actions/movieAction";

const App = () => {

  return (
    <div className="color-body font body">
      <NavBar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList />} />
            <Route path="/movie/:id" element={<MovieDeatails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
};

export default App;
