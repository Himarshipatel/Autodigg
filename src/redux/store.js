import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/AuthReducer";
import contactReducer from "./reducers/ContactReducer";
import carSearchReducer from "./reducers/CarSearchReducer";

const rootReducer = combineReducers({
  authReducer,
  contactReducer,
  carSearchReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
