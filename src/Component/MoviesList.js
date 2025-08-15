import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import MyPagination from "./MyPagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovie } from "../redux/actions/movieAction";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovie());
  }, [dispatch]);

  const dataMovies = useSelector((state) => state.movies);

  useEffect(() => {
    setMovies(dataMovies);
  }, [dataMovies]);

  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
        movies.map((movie) => <CardMovie key={movie.id} movie={movie} />)
      ) : (
        <h2 className="text-center p-5">No movies available...</h2>
      )}
      {movies.length >= 1 ? <MyPagination /> : null}
    </Row>
  );
};

export default MoviesList;
