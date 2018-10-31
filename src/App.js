import React from "react";
import { connect } from "react-redux";
import "./App.css";
import NewUserForm from "./NewUserForm";
import UserList from "./UserList";

const App = ({ users, dispatch }) => (
  <div className="App">
    <NewUserForm />
    <UserList />
  </div>
);

const mapStateToProps = ({ user }) => ({ users: user.users });

export default connect(mapStateToProps)(App);
