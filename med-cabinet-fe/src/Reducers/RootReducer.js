import { ROOT_TEST } from "../Actions/ActionType";

const initialState = {
  strains: ["indica", "hybrid", "sativa"]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ROOT_TEST:
      console.log(action.type);
      return { ...state };

    default:
      return state;
  }
};
