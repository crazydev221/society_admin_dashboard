import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "./reducers";

const initialState = {};
const enhancers = [];
const middleware = [
  thunk
];

const composedEnhancers = composeWithDevTools(applyMiddleware(...middleware), ...enhancers);
export const rootReducer = combineReducers({
    ...reducers
});
const store = createStore(rootReducer, composedEnhancers);
export default store;