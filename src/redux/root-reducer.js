import {combineReducers} from "redux";
import couponsReducer from "./coupons/coupons-reducer";

const rootReducer = combineReducers({
    coupons: couponsReducer
});

export default rootReducer;