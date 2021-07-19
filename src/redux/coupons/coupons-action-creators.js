import {
    CREATE_COUPON_FAILURE,
    CREATE_COUPON_REQUEST,
    CREATE_COUPON_SUCCESS,
    DELETE_COUPON_FAILURE,
    DELETE_COUPON_REQUEST,
    DELETE_COUPON_SUCCESS,
    GET_COUPON_FAILURE,
    GET_COUPON_REQUEST,
    GET_COUPON_SUCCESS,
    GET_COUPONS_FAILURE,
    GET_COUPONS_REQUEST,
    GET_COUPONS_SUCCESS, UPDATE_COUPON_FAILURE,
    UPDATE_COUPON_REQUEST,
    UPDATE_COUPON_SUCCESS
} from "./coupons-action-types";
import axios from "axios";
import {SERVER_DEVELOPMENT_BASE_URL} from "../../constants/constants";

const createCouponRequest = () => {
    return {
        type: CREATE_COUPON_REQUEST
    }
}

const createCouponSuccess = coupon => {
    return {
        type: CREATE_COUPON_SUCCESS,
        payload: coupon
    }
}

const createCouponFailure = error => {
    return {
        type: CREATE_COUPON_FAILURE,
        payload: error
    }
}

export const createCoupon = (coupon, token) => {
    return dispatch => {
        dispatch(createCouponRequest());
        axios({
            method: 'POST',
            url: `${SERVER_DEVELOPMENT_BASE_URL}/coupons`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: coupon
        }).then(res => {
            const {data} = res.data;
            dispatch(createCouponSuccess(data));
        }).catch(error => {
            dispatch(createCouponFailure(error.response.data.message));
        });
    }
}


const getCouponsRequest = () => {
    return {
        type: GET_COUPONS_REQUEST
    }
}

const getCouponsSuccess = coupons => {
    return {
        type: GET_COUPONS_SUCCESS,
        payload: coupons
    }
}

const getCouponsFailure = error => {
    return {
        type: GET_COUPONS_FAILURE,
        payload: error
    }
}

export const getCoupons = (token) => {
    return dispatch => {
        dispatch(getCouponsRequest());
        axios({
            method: 'GET',
            url: `${SERVER_DEVELOPMENT_BASE_URL}/coupons`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            const {data} = res.data;
            dispatch(getCouponsSuccess(data));
        }).catch(error => {
            dispatch(getCouponsFailure(error.response.data.message));
        });
    }
}


const getCouponRequest = () => {
    return {
        type: GET_COUPON_REQUEST
    }
}

const getCouponSuccess = coupon => {
    return {
        type: GET_COUPON_SUCCESS,
        payload: coupon
    }
}

const getCouponFailure = error => {
    return {
        type: GET_COUPON_FAILURE,
        payload: error
    }
}

export const getCoupon = (id, token) => {
    return dispatch => {
        dispatch(getCouponRequest());
        axios({
            method: 'GET',
            url: `${SERVER_DEVELOPMENT_BASE_URL}/coupons/${id}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            const {data} = res.data;
            dispatch(getCouponSuccess(data));
        }).catch(error => {
            dispatch(getCouponFailure(error.response.data.message));
        });
    }
}


const updateCouponRequest = () => {
    return {
        type: UPDATE_COUPON_REQUEST
    }
}

const updateCouponSuccess = coupon => {
    return {
        type: UPDATE_COUPON_SUCCESS,
        payload: coupon
    }
}

const updateCouponFailure = error => {
    return {
        type: UPDATE_COUPON_FAILURE,
        payload: error
    }
}

export const updateCoupon = (id, coupon, token) => {
    return dispatch => {
        dispatch(updateCouponRequest());
        axios({
            method: 'PUT',
            url: `${SERVER_DEVELOPMENT_BASE_URL}/coupons/${id}`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: coupon
        }).then(res => {
            const {data} = res.data;
            dispatch(updateCouponSuccess(data));
        }).catch(error => {
            dispatch(updateCouponFailure(error.response.data.message));
        });
    }
}


const deleteCouponRequest = () => {
    return {
        type: DELETE_COUPON_REQUEST
    }
}

const deleteCouponSuccess = coupon => {
    return {
        type: DELETE_COUPON_SUCCESS,
        payload: coupon
    }
}

const deleteCouponFailure = error => {
    return {
        type: DELETE_COUPON_FAILURE,
        payload: error
    }
}

export const deleteCoupon = (id, token) => {
    return dispatch => {
        dispatch(deleteCouponRequest());
        axios({
            method: 'DELETE',
            url: `${SERVER_DEVELOPMENT_BASE_URL}/coupons/${id}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            const {data} = res.data;
            dispatch(deleteCouponSuccess(data));
        }).catch(error => {
            dispatch(deleteCouponFailure(error.response.data.message));
        });
    }
}