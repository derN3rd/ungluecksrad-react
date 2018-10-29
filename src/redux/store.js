import { createStore } from "redux";
import rootReducer from "./reducers";

export default createStore(
  rootReducer,
  process.env.NODE_ENV !== "production" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);
