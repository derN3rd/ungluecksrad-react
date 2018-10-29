import * as t from "./types";

export const add = ({ name }) => ({
  type: t.ADD,
  payload: {
    name
  }
});

export const edit = ({ id, name }) => ({
  type: t.EDIT,
  payload: {
    id,
    name
  }
});

export const remove = ({ id }) => ({
  type: t.REMOVE,
  payload: {
    id
  }
});
