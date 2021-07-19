import {coupons} from "./coupons.data";

const INITIAL_STATE = {
    coupons: [...coupons],
    singleCoupon: {},
    error: "",
    loading: false
};

const couponsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        default:
            return state;
    }
}

export default couponsReducer;