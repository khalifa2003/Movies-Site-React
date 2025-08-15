import axios from "axios";
import { ALLMOVIES, MovieApi } from "../types/moviestype";

export const getAllMovie = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(MovieApi);
      dispatch({
        type: ALLMOVIES,
        data: res.data.results,
        pages: res.data.total_pages,
      });
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
};

export const getMovieSearch = (word) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=2cb53535aac3d21f2f18dd7397aa6297&language=en&query=${word}`
      );
      dispatch({
        type: ALLMOVIES,
        data: res.data.results,
        pages: res.data.total_pages,
      });
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };
};

export const getPage = (page) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=2cb53535aac3d21f2f18dd7397aa6297&language=en&page=${page}`
      );
      dispatch({
        type: ALLMOVIES,
        data: res.data.results,
        pages: res.data.total_pages,
      });
    } catch (error) {
      console.error("Error fetching page:", error);
    }
  };
};
