import axios from "../custom-axios";

import { ADD_MESSAGE, FETCH_MESSAGES } from "../reducers/messages";

export const fetchMessages = () => {
  return (dispatch) => {
    axios
      .get("/api/message")
      .then((res) => {
        dispatch({ type: FETCH_MESSAGES, payload: res.data });
      })
      .catch((err) => {
        console.log(err?.respnose);
      });
  };
};

export const addMessage = (message) => {
    return (dispatch) => {
      axios
        .post("/api/message")
        .then((res) => {
          dispatch({ type: ADD_MESSAGE, payload: res.data });
        })
        .catch((err) => {
          console.log(err?.respnose);
        });
    };
  };
