import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import homeReducer from "./homeReducer";
import addReducer from "./addReducer";

const reducers = combineReducers({
    homeReducer,
    addReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
