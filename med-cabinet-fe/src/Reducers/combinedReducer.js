import * as types from "../Actions/ActionType";

const user = JSON.parse(localStorage.getItem("user"));

export const initialState = {
  email: user ? user.email : "",
  password: ""
};

export const combinedReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_UP:
      return state;
    case types.LOGIN:
      return initialState;

// add search, save, delete 

    default:
      return state;
  }
};

export default [combinedReducer, initialState];

