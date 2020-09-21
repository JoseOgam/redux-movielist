import React from "react";
import { connect } from "react-redux";
import updateMovies from "./store/actions/updateMovies";
import fetchUsers from "./store/actions/fetchUser";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <h2>REDUX MOVIELIST</h2>
      <hr />
      <span style={{ color: "green" }}>YOUR CURRENT MOVIE IS: </span>
      {props.movies.name}
      <button onClick={props.updateMovies}>SELECT NEW MOVIE</button>
      <hr />
      {props.users.length === 0 ? (
        <p>THERE ARE NO USERS</p>
      ) : (
        props.users.map((user) => (
          <p key={user.id}>
            {user.first_name} - {user.email}
          </p>
        ))
      )}
      <br />
      <button onClick={props.fetchUsers}>FETCH USERS</button>
    </div>
  );
}

const MapStateToProps = (state) => {
  return {
    movies: state.movies,
    users: state.users,
  };
};
const MapDispatchToProps = (dispatch) => {
  return {
    updateMovies: () => dispatch(updateMovies),
    fetchUsers: () => dispatch(fetchUsers),
  };
};
export default connect(MapStateToProps, MapDispatchToProps)(App);
