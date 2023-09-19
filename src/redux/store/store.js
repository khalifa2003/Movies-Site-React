import { createStore, applyMiddleware } from "redux";
import { moviesReducer } from "../reducer/moviesReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// 1- Create Store
export const store = createStore(moviesReducer, applyMiddleware(thunk));


