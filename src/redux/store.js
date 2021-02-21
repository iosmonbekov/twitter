import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import homeReducer from "./homeReducer";

const reducers = combineReducers({
    homeReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
