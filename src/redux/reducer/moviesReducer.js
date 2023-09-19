import { ALLMOVIES } from "../types/moviestype";

const initialValue = { movies: [], pageCount: 0 };

export const moviesReducer = (state = initialValue, action) => {
  if (action.type === ALLMOVIES) {
    return { movies: action.data ,pageCount: action.pages};
  } else {
    return state;
  }
};
