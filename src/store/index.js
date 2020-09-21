import { combineReducers, createStore } from "redux";
import movieListReducer from "./reducers/moviesListReducer";

const reducer = combineReducers({ movies: movieListReducer });
const initialstate = {
  movies: { name: "TERMINATOR 2" },
};

const store = createStore(
  reducer,
  initialstate,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
