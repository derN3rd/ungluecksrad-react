import React from "react";
import { connect } from "react-redux";
import "./App.css";
import NewUserForm from "./User";

const App = ({ users }) => (
  <div className="App">
    <header className="App-header">
      <ul>
        {users && users.length ? (
          users.map((user, index) => (
            <li key={`user-${user.id}`}>{user.name}</li>
          ))
        ) : (
          <li>No Users created</li>
        )}
      </ul>
      <hr />
      <NewUserForm />
    </header>
  </div>
);

const mapStateToProps = ({ user }) => {
  return { users: user.users };
};

export default connect(mapStateToProps)(App);
