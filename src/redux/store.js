import {createStore, applyMiddleware} from "redux";

import thunk from "redux-thunk";
import rootReducer from "./root-reducer";

const INITIAL_STATE = {};

const store = createStore(rootReducer, INITIAL_STATE, applyMiddleware(thunk));

export default store;