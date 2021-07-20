import {createStore, applyMiddleware} from "redux";

import thunk from "redux-thunk";
import rootReducer from "./root-reducer";
import {VIENHEALTH_TOKEN_KEY, VIENHEALTH_USER_KEY} from "../constants/constants";

const token = localStorage.getItem(VIENHEALTH_TOKEN_KEY) ? JSON.parse(localStorage.getItem(VIENHEALTH_TOKEN_KEY)) : null;
const user = localStorage.getItem(VIENHEALTH_USER_KEY) ? JSON.parse(localStorage.getItem(VIENHEALTH_USER_KEY)) : null;

const INITIAL_STATE = {
    auth: {token, user}
};

const store = createStore(rootReducer, INITIAL_STATE, applyMiddleware(thunk));

export default store;