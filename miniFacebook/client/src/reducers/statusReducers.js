import { CREATE_STATUS_FAIL, CREATE_STATUS_REQUEST, CREATE_STATUS_SUCCESS, GET_STATUS_FAIL, GET_STATUS_REQUEST, GET_STATUS_SUCCESS } from "../constants/statusConstants";

export const statusReducer = (state = { status: [] }, action) => {
    switch (action.type) {
      case GET_STATUS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case GET_STATUS_REQUEST:
        return {
          ...state,
          status: []
  
        }
      case GET_STATUS_SUCCESS:
        return {
          ...state,
          loading: false,
          recyclers: action.payload,
        };
  
      case CREATE_STATUS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case CREATE_STATUS_REQUEST:
        return {
          ...state
        }
      case CREATE_STATUS_SUCCESS:
        return {
          ...state,
          loading: false,
          status: action.payload,
        };
  
      default:
        return state;
    }
  };