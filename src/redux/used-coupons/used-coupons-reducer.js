import {usedCoupons} from "./used-coupons.data";

const INITIAL_STATE = {
    usedCoupons: [...usedCoupons],
    singleUsedCoupon: {},
    error: "",
    loading: false
};

const usedCouponsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default usedCouponsReducer;