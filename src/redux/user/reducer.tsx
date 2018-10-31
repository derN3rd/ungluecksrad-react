import * as t from "./types";

export const initialState: { users: Array<{ id: number; name: string }> } = {
  users: []
};

export const reducer = (
  state = initialState,
  action: { type: string; payload: { [s: string]: any } }
) => {
  switch (action.type) {
    case t.ADD:
      return {
        ...state,
        users: [
          ...state.users,
          { id: state.users.length, name: action.payload.name }
        ]
      };
    case t.EDIT:
      return {
        ...state,
        users: state.users.map(
          user =>
            user.id === action.payload.id
              ? { ...user, name: action.payload.name }
              : user
        )
      };
    case t.REMOVE:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload.id)
      };

    default:
      return state;
  }
};
