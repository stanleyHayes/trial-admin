import {combineReducers} from "redux";
import couponsReducer from "./coupons/coupons-reducer";
import authReducer from "./authentication/auth-reducer";
import usedCouponsReducer from "./used-coupons/used-coupons-reducer";

const rootReducer = combineReducers({
    coupons: couponsReducer,
    auth: authReducer,
    usedCoupons: usedCouponsReducer
});

export default rootReducer;