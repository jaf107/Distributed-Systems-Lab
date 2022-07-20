import axios from "axios";
import { CREATE_STORY_FAIL, CREATE_STORY_REQUEST, CREATE_STORY_SUCCESS } from "../constants/storyConstants";

export const postStory = (statusData) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_STORY_REQUEST });
        const config = { headers: { "Content-Type": "application/json" } };
        
        const { data } = await axios.post(`http://localhost:5000/api/v1/story/new`, 
        statusData,
        config);
        
        dispatch({ type: CREATE_STORY_SUCCESS, payload: data.status });
    } catch (error) {
        dispatch({ type: CREATE_STORY_FAIL, payload: error.response.data.message });
    }
};