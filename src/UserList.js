import * as React from "react";
import { connect } from "react-redux";
import { actions as UserActions } from "./redux/user";

const UserList = ({ users, removeUser }) => (
  <table>
    <tbody>
      {users && users.length ? (
        users.map((user, index) => (
          <tr key={`user-${user.id}`}>
            <>
              <td>{user.name}</td>
              <td>
                <button onClick={() => removeUser({ id: user.id })}>X</button>
              </td>
            </>
          </tr>
        ))
      ) : (
        <tr>
          <td>No Users</td>
        </tr>
      )}
    </tbody>
  </table>
);
const mapStateToProps = ({ user }) => ({ users: user.users });
export default connect(
  mapStateToProps,
  { removeUser: UserActions.remove }
)(UserList);
