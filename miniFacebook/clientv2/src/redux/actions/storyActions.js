import axios from "axios";
import {
  CREATE_STORY_FAIL,
  CREATE_STORY_REQUEST,
  CREATE_STORY_SUCCESS,
  GET_STORY_FAIL,
  GET_STORY_REQUEST,
  GET_STORY_SUCCESS,
} from "../constants/storyConstants";

export const getStories = () => async (dispatch) => {
  try {
    dispatch({ type: GET_STORY_REQUEST });

    const { data } = await axios.get(`http://localhost:5000/api/v1/story`);
    console.log(data);
    dispatch({ type: GET_STORY_SUCCESS, payload: data.stories });
  } catch (error) {
    dispatch({ type: GET_STORY_FAIL, payload: error.response.data.message });
  }
};
export const postStory = (storyData) => async (dispatch) => {
  console.log(storyData);
  try {
    dispatch({ type: CREATE_STORY_REQUEST });
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await axios.post(
      `http://localhost:5000/api/v1/story/new`,
      storyData,
      config
    );

    dispatch({ type: CREATE_STORY_SUCCESS, payload: data.status });
  } catch (error) {
    dispatch({ type: CREATE_STORY_FAIL, payload: error.response.data.message });
  }
};
