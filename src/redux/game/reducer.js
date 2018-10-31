import * as t from "./types";

export const initialState = {
  users: []
};

export const reducer = (state = initialState, action) => {
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
