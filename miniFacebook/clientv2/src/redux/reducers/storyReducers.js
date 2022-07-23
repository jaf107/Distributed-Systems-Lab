import {
    CREATE_STORY_FAIL,
    CREATE_STORY_REQUEST,
    CREATE_STORY_SUCCESS,
    GET_STORY_FAIL,
    GET_STORY_REQUEST,
    GET_STORY_SUCCESS,
  } from "../constants/storyConstants";
  
  export const storyReducer = (state = { story: [] }, action) => {
    switch (action.type) {
      case GET_STORY_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case GET_STORY_REQUEST:
        return {
          ...state,
          story: [],
        };
      case GET_STORY_SUCCESS:
        return {
          ...state,
          loading: false,
          story: action.payload,
        };
  
      case CREATE_STORY_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case CREATE_STORY_REQUEST:
        return {
          ...state,
        };
      case CREATE_STORY_SUCCESS:
        return {
          ...state,
          loading: false,
          // story: action.payload,
        };
  
      default:
        return state;
    }
  };
  