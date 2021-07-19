import {combineReducers} from "redux";
import couponsReducer from "./coupons/coupons-reducer";
import authReducer from "./authentication/auth-reducer";

const rootReducer = combineReducers({
    coupons: couponsReducer,
    auth: authReducer
});

export default rootReducer;