import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import movieListReducer from "./reducers/moviesListReducer";
import userReducer from "./reducers/userReducer";
import thunk from "redux-thunk";
const middleware = [thunk];

const allReducer = combineReducers({
  movies: movieListReducer,
  users: userReducer,
});
const initialstate = {
  users: [],
  movies: { name: "TERMINATOR 2" },
};

const store = createStore(
  allReducer,
  initialstate,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
