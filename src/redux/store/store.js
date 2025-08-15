import { createStore, applyMiddleware } from "redux";
import { moviesReducer } from "../reducer/moviesReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const store = createStore(
 moviesReducer, 
 composeWithDevTools(applyMiddleware(thunk))
);