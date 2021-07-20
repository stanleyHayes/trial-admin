import {
    CREATE_COUPON_FAILURE,
    CREATE_COUPON_REQUEST,
    CREATE_COUPON_SUCCESS, DELETE_COUPON_FAILURE, DELETE_COUPON_REQUEST, DELETE_COUPON_SUCCESS,
    GET_COUPONS_FAILURE,
    GET_COUPONS_REQUEST,
    GET_COUPONS_SUCCESS, UPDATE_COUPON_FAILURE, UPDATE_COUPON_REQUEST, UPDATE_COUPON_SUCCESS
} from "./coupons-action-types";

const INITIAL_STATE = {
    coupons: [],
    singleCoupon: {},
    error: "",
    loading: false
};

const couponsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case CREATE_COUPON_REQUEST:
            return {
                ...state,
                loading: true
            }

        case CREATE_COUPON_SUCCESS:
            return {
                ...state,
                loading: false,
                coupons: [...state.coupons, action.payload]
            }

        case CREATE_COUPON_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }


        case GET_COUPONS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_COUPONS_SUCCESS:
            return {
                ...state,
                loading: false,
                coupons: [...action.payload]
            }

        case GET_COUPONS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                coupons: []
            }

        case UPDATE_COUPON_REQUEST:
            return {
                ...state,
                loading: true
            }

        case UPDATE_COUPON_SUCCESS:
            return {
                ...state,
                loading: false,
                coupons: [...state.coupons.map(coupon => {
                    if (coupon._id === action.payload._id){
                        return {...action.payload};
                    }
                    return coupon;
                })]
            }

        case UPDATE_COUPON_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case DELETE_COUPON_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_COUPON_SUCCESS:
            return {
                ...state,
                loading: false,
                coupons: [...state.coupons.map(coupon => {
                    if (coupon._id === action.payload._id){
                        return {...action.payload};
                    }
                    return coupon;
                })]
            }

        case DELETE_COUPON_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default couponsReducer;