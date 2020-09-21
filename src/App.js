import React from "react";
import { connect } from "react-redux";
import updateMovies from "./store/actions/updateMovies";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <h2>REDUX MOVIELIST</h2>
      <hr />
      <span style={{ color: "green" }}>YOUR CURRENT MOVIE IS</span>
      {props.movies.name}
      <button onClick={props.updateMovies}>SELECT NEW MOVIE</button>
    </div>
  );
}

const MapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};
const MapDispatchToProps = (dispatch) => {
  return {
    updateMovies: () => dispatch(updateMovies),
  };
};
export default connect(MapStateToProps, MapDispatchToProps)(App);
