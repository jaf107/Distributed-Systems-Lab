import { statusReducer } from './reducers/statusReducers';
import { composeWithDevTools } from "redux-devtools-extension";

const thunk = require('thunk')
const middleware = [thunk];

const reducer = combineReducers({
    status: statusReducer,
  });

let initialState = {

};

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;