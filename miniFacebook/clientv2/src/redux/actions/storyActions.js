import axios from "axios";
import {
  CREATE_STORY_FAIL,
  CREATE_STORY_REQUEST,
  CREATE_STORY_SUCCESS,
} from "../constants/storyConstants";

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
