import axios from "axios";
import { ALLMOVIES, MovieApi } from "../types/moviestype";

export const getAllMovie = () => {
  return async (dispatch) => {
    const res = await axios.get(MovieApi);
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};
export const getMovieSearch = (word) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=2cb53535aac3d21f2f18dd7397aa6297&language=ar&query=${word}`
    );
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};
export const getPage = (page) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=2cb53535aac3d21f2f18dd7397aa6297&language=ar&page=1${page}`
    );
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};
