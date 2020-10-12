import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/AuthReducer";
import contactReducer from "./reducers/ContactReducer";
const rootReducer = combineReducers({
  authReducer,
  contactReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
