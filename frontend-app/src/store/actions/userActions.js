import axios from "../custom-axios";
import { LOADING_START, LOADING_END } from "../reducers/ui";

export const uploadFile = (file, type) => {
  let url = `/api/${type}/upload`;

  const formData = new FormData();
  formData.append("file", file, file.name);

  return (dispatch) => {
    dispatch({ type: LOADING_START });
    axios
      .post(url, formData)
      .catch((err) => console.log(err.response))
      .finally(() => dispatch({ type: LOADING_END }));
  };
};

export const performStep = (step) => {
  return (dispatch) => {
    dispatch({ type: LOADING_START });
    axios
      .post(`/api/make-step/${step}`)
      .catch((err) => console.log(err.response))
      .finally(() => dispatch({ type: LOADING_END }));
  };
};
