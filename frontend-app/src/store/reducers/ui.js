import produce from "immer";

export const LOADING_START = "ui/LOADING";
export const LOADING_END = "ui/NOT_LOADING";

const initialState = {
  loading: 0,
};

const reducer = produce((state, action) => {
  switch (action.type) {
    case LOADING_START:
      state.loading += 1;
      break;

    case LOADING_END:
      state.loading -= 1;
      break;

    default:
      return state;
  }
}, initialState);

export default reducer;
