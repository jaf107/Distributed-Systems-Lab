import {
  CREATE_STATUS_FAIL,
  CREATE_STATUS_REQUEST,
  CREATE_STATUS_SUCCESS,
  GET_STATUS_FAIL,
  GET_STATUS_REQUEST,
  GET_STATUS_SUCCESS,
} from "../constants/statusConstants";

import axios from "axios";
axios.defaults.withCredentials = true;

export const getStatus = (_id) => async (dispatch) => {
  // console.log(email);
  try {
    dispatch({ type: GET_STATUS_REQUEST });

    const { data } = await axios.get(
      `http://localhost:5000/api/v1/status/`+
      _id
    );
    // console.log(data);
    dispatch({ type: GET_STATUS_SUCCESS, payload: data.status });
  } catch (error) {
    dispatch({ type: GET_STATUS_FAIL, payload: error.response.data.message });
  }
};

export const addStatus = (statusData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_STATUS_REQUEST });
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await axios.post(
      `http://localhost:5000/api/v1/status/new`,
      statusData,
      config
    );

    dispatch({ type: CREATE_STATUS_SUCCESS, payload: data.status });
  } catch (error) {
    dispatch({
      type: CREATE_STATUS_FAIL,
      payload: error.response.data.message,
    });
  }
};
