import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { statusReducer } from './reducers/statusReducers';
import { userReducer } from "./reducers/userReducers";
import { storyReducer } from "./reducers/storyReducers";


const reducer = combineReducers ({
    status: statusReducer,
    user: userReducer,
    story: storyReducer,
  });

let initialState = {

};
const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;