import produce from "immer";

export const FETCH_MESSAGES = "message/FETCH_ALL";
export const ADD_MESSAGE = "message/ADD_SUCCESS";

const initialState = {
  data: [],
};

const reducer = produce((state, action) => {
  switch (action.type) {
    case FETCH_MESSAGES:
      state.data = action.payload;
      break;

    case ADD_MESSAGE:
      debugger;
      state.data?.push(action.payload);
      break;
      
    default:
      return state;
  }
}, initialState);

export default reducer;
