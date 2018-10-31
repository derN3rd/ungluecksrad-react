import React from "react";
import { connect } from "react-redux";
import "./App.css";
import NewUserForm from "./User";
import { remove as removeUser } from "./redux/user/actions";

const App = ({ users, dispatch }) => (
  <div className="App">
    <header className="App-header">
      {users && users.length ? (
        <ul>
          {users.map((user, index) => (
            <li key={`user-${user.id}`}>
              {user.name}{" "}
              <button onClick={() => dispatch(removeUser({ id: user.id }))}>
                X
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <span>No Users created</span>
      )}
      <NewUserForm />
    </header>
  </div>
);

const mapStateToProps = ({ user }) => ({ users: user.users });

export default connect(mapStateToProps)(App);
