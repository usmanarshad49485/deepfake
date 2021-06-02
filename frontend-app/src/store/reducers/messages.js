import produce from "immer";

export const FETCH_MESSAGES = "auth/START";
export const ADD_MESSAGE = "auth/SUCCESS";

const initialState = {
  data: [],
};

const reducer = produce((state, action) => {
  switch (action.type) {
    case FETCH_MESSAGES:
      state.data = action.payload;
      break;

    case ADD_MESSAGE:
      state.data.push(action.payload);
      break;
      
    default:
      return state;
  }
}, initialState);

export default reducer;
