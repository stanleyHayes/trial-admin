import {
    CHANGE_PASSWORD_FAILURE,
    CHANGE_PASSWORD_REQUEST,
    CHANGE_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAILURE,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_OUT_FAILURE,
    SIGN_OUT_REQUEST,
    SIGN_OUT_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    UPDATE_PROFILE_FAILURE,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    VERIFY_ACCOUNT_FAILURE,
    VERIFY_ACCOUNT_REQUEST,
    VERIFY_ACCOUNT_SUCCESS
} from "./auth-action-types";
import axios from "axios";
import {
    DARKDOCS_SHOP_TOKEN_KEY,
    DARKDOCS_SHOP_USER_KEY,
    DEVELOPMENT_SERVER,
    PRODUCTION_HEROKU_SERVER
} from "../../constants/constants";

const signInRequest = () => {
    return {
        type: SIGN_IN_REQUEST
    }
}

const signInSuccess = (user, token) => {
    return {
        type: SIGN_IN_SUCCESS,
        payload: {user, token}
    }
}

const signInFailure = error => {
    return {
        type: SIGN_IN_FAILURE,
        payload: error
    }
}

export const signIn = (user, history) => {
    return dispatch => {
        dispatch(signInRequest());
        axios({
            method: 'post',
            url: `${PRODUCTION_HEROKU_SERVER}/auth/login`,
            data: user
        }).then(res => {
            const {data, token} = res.data;
            if (data) {
                dispatch(signInSuccess(data, token));
                localStorage.setItem(DARKDOCS_SHOP_TOKEN_KEY, JSON.stringify(token));
                localStorage.setItem(DARKDOCS_SHOP_USER_KEY, JSON.stringify(data));
                history.push('/');
            }
        }).catch(error => {
            dispatch(signInFailure(error.response.data.message));
        });
    }
}

const signUpRequest = () => {
    return {
        type: SIGN_UP_REQUEST
    }
}

const signUpSuccess = (user, token) => {
    return {
        type: SIGN_UP_SUCCESS,
        payload: {user, token}
    }
}

const signUpFailure = error => {
    return {
        type: SIGN_UP_FAILURE,
        payload: error
    }
}

export const signUp = (user, history) => {
    return dispatch => {
        dispatch(signUpRequest());
        axios({
            method: 'post',
            url: `${PRODUCTION_HEROKU_SERVER}/auth/register`,
            data: user
        }).then(res => {
            const {data, token} = res.data;
            dispatch(signUpSuccess(data, token));
            localStorage.setItem(DARKDOCS_SHOP_TOKEN_KEY, JSON.stringify(token));
            localStorage.setItem(DARKDOCS_SHOP_USER_KEY, JSON.stringify(data));
            history.push('/auth/verify-account');
        }).catch(error => {
            dispatch(signUpFailure(error.response.data.message));
        });
    }
}

const verifyAccountRequest = () => {
    return {
        type: VERIFY_ACCOUNT_REQUEST
    }
}

const verifyAccountSuccess = user => {
    return {
        type: VERIFY_ACCOUNT_SUCCESS,
        payload: user
    }
}

const verifyAccountFailure = error => {
    return {
        type: VERIFY_ACCOUNT_FAILURE,
        payload: error
    }
}

export const verifyAccount = (otp, token, history) => {
    return dispatch => {
        dispatch(verifyAccountRequest());
        axios({
            method: 'put',
            url: `${PRODUCTION_HEROKU_SERVER}/auth/verify-otp`,
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            data: {otp}
        }).then(res => {
            const {data} = res.data;
            dispatch(verifyAccountSuccess(data));
            history.push('/auth/login');
        }).catch(error => {
            dispatch(verifyAccountFailure(error.response.data.message));
        });
    }
}


const updateProfileRequest = () => {
    return {
        type: UPDATE_PROFILE_REQUEST
    }
}

const updateProfileSuccess = user => {
    return {
        type: UPDATE_PROFILE_SUCCESS,
        payload: user
    }
}

const updateProfileFailure = error => {
    return {
        type: UPDATE_PROFILE_FAILURE,
        payload: error
    }
}

export const updateProfile = (user, token, history) => {
    return dispatch => {
        dispatch(updateProfileRequest());
        axios({
            method: 'put',
            url: `${DEVELOPMENT_SERVER}/auth/profile`,
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            data: user
        }).then(res => {
            const {data} = res.data;
            dispatch(updateProfileSuccess(data));
            history.push('/profile');
        }).catch(error => {
            dispatch(updateProfileFailure(error.response.data.message));
        });
    }
}


const changePasswordRequest = () => {
    return {
        type: CHANGE_PASSWORD_REQUEST
    }
}

const changePasswordSuccess = user => {
    return {
        type: CHANGE_PASSWORD_SUCCESS,
        payload: user
    }
}

const changePasswordFailure = error => {
    return {
        type: CHANGE_PASSWORD_FAILURE,
        payload: error
    }
}

export const changePassword = (passwords, token, history) => {
    return dispatch => {
        dispatch(changePasswordRequest());
        axios({
            method: 'put',
            url: `${PRODUCTION_HEROKU_SERVER}/auth/update-password`,
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            data: passwords
        }).then(res => {
            const {data} = res.data;
            dispatch(changePasswordSuccess(data));
            history.push('/profile');
        }).catch(error => {
            dispatch(changePasswordFailure(error.response.data.message));
        });
    }
}


const forgotPasswordRequest = () => {
    return {
        type: FORGOT_PASSWORD_REQUEST
    }
}

const forgotPasswordSuccess = user => {
    return {
        type: FORGOT_PASSWORD_SUCCESS,
        payload: user
    }
}

const forgotPasswordFailure = error => {
    return {
        type: FORGOT_PASSWORD_FAILURE,
        payload: error
    }
}

export const forgotPassword = (email, history) => {
    return dispatch => {
        dispatch(forgotPasswordRequest());
        axios({
            method: 'put',
            url: `${DEVELOPMENT_SERVER}/auth/forgot-password`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: email
        }).then(res => {
            const {data} = res.data;
            dispatch(forgotPasswordSuccess(data));
            history.push('/auth/login');
        }).catch(error => {
            dispatch(forgotPasswordFailure(error.response.data.message));
        });
    }
}


const signOutRequest = () => {
    return {
        type: SIGN_OUT_REQUEST
    }
}

const signOutSuccess = () => {
    return {
        type: SIGN_OUT_SUCCESS
    }
}

const signOutFailure = error => {
    return {
        type: SIGN_OUT_FAILURE,
        payload: error
    }
}

export const signOut = (user, token, history) => {
    return dispatch => {
        dispatch(signOutRequest());
        axios({
            method: 'POST',
            url: `${DEVELOPMENT_SERVER}/auth/logout`,
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            data: user
        }).then(res => {
            const {data} = res.data;
            dispatch(signOutSuccess(data));
            localStorage.clear();
            history.push('/auth/login');
        }).catch(error => {
            dispatch(signOutFailure(error.response.data.message));
        });
    }
}
