import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import rootReducers from "./reducers/index";
import thunk from "redux-thunk";

const initialState = {};

const middleware = [thunk];

const store = configureStore(
  rootReducers,
  initialState,
  applyMiddleware(...middleware)
);

export default store;