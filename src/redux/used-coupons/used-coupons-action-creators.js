import {
    APPLY_COUPON_FAILURE,
    APPLY_COUPON_REQUEST,
    APPLY_COUPON_SUCCESS,
    DELETE_USED_COUPON_FAILURE,
    DELETE_USED_COUPON_REQUEST,
    DELETE_USED_COUPON_SUCCESS,
    GET_USED_COUPON_FAILURE,
    GET_USED_COUPON_REQUEST,
    GET_USED_COUPON_SUCCESS,
    GET_USED_COUPONS_FAILURE,
    GET_USED_COUPONS_REQUEST,
    GET_USED_COUPONS_SUCCESS,
    UPDATE_USED_COUPON_FAILURE,
    UPDATE_USED_COUPON_REQUEST,
    UPDATE_USED_COUPON_SUCCESS
} from "./used-coupons-action-types";
import axios from "axios";
import {SERVER_DEVELOPMENT_BASE_URL} from "../../constants/constants";

const applyCouponRequest = () => {
    return {
        type: APPLY_COUPON_REQUEST
    }
}

const applyCouponSuccess = usedCoupon => {
    return {
        type: APPLY_COUPON_SUCCESS,
        payload: usedCoupon
    }
}

const applyCouponFailure = error => {
    return {
        type: APPLY_COUPON_FAILURE,
        payload: error
    }
}

export const applyCoupon = (couponID, token) => {
    return dispatch => {
        dispatch(applyCouponRequest());
        axios({
            method: 'POST',
            url: `${SERVER_DEVELOPMENT_BASE_URL}/used-coupons`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: couponID
        }).then(res => {
            const {data} = res.data;
            dispatch(applyCouponSuccess(data));
        }).catch(error => {
            dispatch(applyCouponFailure(error.response.data.message));
        });
    }
}


const getUsedCouponsRequest = () => {
    return {
        type: GET_USED_COUPONS_REQUEST
    }
}

const getUsedCouponsSuccess = usedCoupons => {
    return {
        type: GET_USED_COUPONS_SUCCESS,
        payload: usedCoupons
    }
}

const getUsedCouponsFailure = error => {
    return {
        type: GET_USED_COUPONS_FAILURE,
        payload: error
    }
}

export const getUsedCoupons = (token) => {
    return dispatch => {
        dispatch(getUsedCouponsRequest());
        axios({
            method: 'GET',
            url: `${SERVER_DEVELOPMENT_BASE_URL}/used-coupons`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            const {data} = res.data;
            dispatch(getUsedCouponsSuccess(data));
        }).catch(error => {
            dispatch(getUsedCouponsFailure(error.response.data.message));
        });
    }
}


const getUsedCouponRequest = () => {
    return {
        type: GET_USED_COUPON_REQUEST
    }
}

const getUsedCouponSuccess = usedCoupon => {
    return {
        type: GET_USED_COUPON_SUCCESS,
        payload: usedCoupon
    }
}

const getUsedCouponFailure = error => {
    return {
        type: GET_USED_COUPON_FAILURE,
        payload: error
    }
}

export const getUsedCoupon = (id, token) => {
    return dispatch => {
        dispatch(getUsedCouponRequest());
        axios({
            method: 'GET',
            url: `${SERVER_DEVELOPMENT_BASE_URL}/used-coupons/${id}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            const {data} = res.data;
            dispatch(getUsedCouponSuccess(data));
        }).catch(error => {
            dispatch(getUsedCouponFailure(error.response.data.message));
        });
    }
}


const updateUsedCouponRequest = () => {
    return {
        type: UPDATE_USED_COUPON_REQUEST
    }
}

const updateUsedCouponSuccess = coupon => {
    return {
        type: UPDATE_USED_COUPON_SUCCESS,
        payload: coupon
    }
}

const updateUsedCouponFailure = error => {
    return {
        type: UPDATE_USED_COUPON_FAILURE,
        payload: error
    }
}

export const updateUsedCoupon = (id, usedCoupon, token) => {
    return dispatch => {
        dispatch(updateUsedCouponRequest());
        axios({
            method: 'PUT',
            url: `${SERVER_DEVELOPMENT_BASE_URL}/used-coupons/${id}`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: usedCoupon
        }).then(res => {
            const {data} = res.data;
            dispatch(updateUsedCouponSuccess(data));
        }).catch(error => {
            dispatch(updateUsedCouponFailure(error.response.data.message));
        });
    }
}


const deleteUsedCouponRequest = () => {
    return {
        type: DELETE_USED_COUPON_REQUEST
    }
}

const deleteUsedCouponSuccess = coupon => {
    return {
        type: DELETE_USED_COUPON_SUCCESS,
        payload: coupon
    }
}

const deleteUsedCouponFailure = error => {
    return {
        type: DELETE_USED_COUPON_FAILURE,
        payload: error
    }
}

export const deleteUsedCoupon = (id, token) => {
    return dispatch => {
        dispatch(deleteUsedCouponRequest());
        axios({
            method: 'DELETE',
            url: `${SERVER_DEVELOPMENT_BASE_URL}/used-coupons/${id}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            const {data} = res.data;
            dispatch(deleteUsedCouponSuccess(data));
        }).catch(error => {
            dispatch(deleteUsedCouponFailure(error.response.data.message));
        });
    }
}