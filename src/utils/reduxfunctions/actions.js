import queryApi from './api';
import {coloredConsole, cookieByName, idGenerator} from "../utils";

export const types = {
    POST_DATA_FAILED        : 'POST_DATA_FAILED',
    POST_DATA_SUCCESS       : 'POST_DATA_SUCCESS',
    PUSH_NOTIFICATION       : 'PUSH_NOTIFICATION',
    CLEAR_NOTIFICATION      : 'CLEAR_NOTIFICATION',
    LOGIN_USER_SUCCESS      : 'LOGIN_USER_SUCCESS',
    LOGIN_USER_FAILED       : 'LOGIN_USER_FAILED',
    DATA_LOADING            : 'DATA_LOADING',
    FETCH_DATA_SUCCESS      : 'FETCH_DATA_SUCCESS',
    FETCH_DATA_FAILED       : 'FETCH_DATA_FAILED',
    COOKIE_IS_VALID         : 'COOKIE_IS_VALID',
    COOKIE_IS_NOT_VALID     : 'COOKIE_IS_NOT_VALID',
    GET_DATA_FAILED         : 'GET_DATA_FAILED',
    GET_DATA_SUCCESS        : 'GET_DATA_SUCCESS',
}

export function cookieLogin() {
    return function (dispatch, state) {
        let token = cookieByName("bikriptAuth")
        if (token != null) {
            queryApi.sendData(token, "isloggedin").then((newData) => {
                if (newData.err == null) {
                    dispatch({
                        type: types.COOKIE_IS_VALID,
                        data: {token : token}
                    })
                } else {
                    coloredConsole("CheckLoggedIn Error 1 : " + newData.err)
                    dispatch({
                        type: types.COOKIE_IS_NOT_VALID,
                        data: {}
                    })
                }
            }).catch(err => {
                coloredConsole("CheckLoggedIn Error 2 : " + err)
                dispatch({
                    type: types.COOKIE_IS_NOT_VALID,
                    data: {}
                })
            })
        } else {
            dispatch({
                type: types.COOKIE_IS_NOT_VALID,
                data: {}
            })
        }
    }
}

export function userLogin(redirect) {
    return function (dispatch, state) {
        return queryApi.sendData(state().form.frm_user_login.values, "login").then((newData) => {
            if (newData.err) {
                dispatch({
                    type: types.LOGIN_USER_FAILED,
                    data: newData.err
                })
                dispatch(showNotification('Kullanıcı Adı veya Şifre Hatalı', "error"))
            } else {
                dispatch({
                    type: types.LOGIN_USER_SUCCESS,
                    data: newData
                });
                dispatch(showNotification("Başarıyla Giriş Yapıldı", "success", "user_login"))
                setTimeout(() => redirect(), 1500)
            }
        }).catch((error) => {
            dispatch({
                type: types.LOGIN_USER_FAILED,
                data: error
            })
            dispatch(showNotification("Sunucuyla Bağlantı Kurulamadı", "error"))
        })
    }
}

export function postData(optData) {
    return function (dispatch, state) {
        return queryApi.sendData(optData.withoutForm ? optData.values : state().form[optData.form].values, optData.params.apiEndPoint).then((newData) => {
            if (newData.err) {
                dispatch({
                    type: types.POST_DATA_FAILED,
                    data: newData.err
                })
                dispatch(showNotification(newData.err, "error"))
            } else {
                dispatch({
                    type: types.POST_DATA_SUCCESS,
                    data: newData
                });
                if (optData.successMsg) {
                    dispatch(showNotification(optData.successMsg, "success"))
                }
                if (optData.onSave) {
                    optData.onSave(newData.data)
                }
            }
        }).catch((error) => {
            dispatch({
                type: types.POST_DATA_FAILED,
                data: error
            })
            if (optData.errMsg) {
                dispatch(showNotification(optData.errMsg, "error"))
            }
        })
    }
}

export function getData(optData) {
    return function (dispatch, state) {
        return queryApi.getData(optData.apiEndPoint).then((newData) => {
            if (newData.err) {
                dispatch({
                    type: types.FETCH_DATA_FAILED,
                    data_name : optData.data_name,
                    data: newData.err
                })
                console.log("New Data",newData)
                dispatch(showNotification(newData.err, "error"))
            } else {
                dispatch({
                    type: types.FETCH_DATA_SUCCESS,
                    data_name : optData.data_name,
                    data: newData
                });
                if (optData.successMsg) {
                    dispatch(showNotification(optData.successMsg, "success"))
                }
                if (optData.onSave) {
                    optData.onSave(newData.data)
                }
            }
        }).catch((error) => {
            dispatch({
                type: types.FETCH_DATA_FAILED,
                data_name : optData.data_name,
                data: error
            })
            if (optData.errMsg) {
                dispatch(showNotification(optData.errMsg, "error"))
            }
        })
    }
}

export function getOrderList(url) {
    return function (dispatch, state) {
        dispatch(setLoading(true));
        return queryApi.getDataFromOutsider(url).then(({res}) => {
            dispatch({
                type: types.FETCH_DATA_SUCCESS,
                data_name: "temp_data",
                data: res
            });
            dispatch(setLoading(false));
        }).catch((err) => {
            dispatch({
                type: types.FETCH_DATA_FAILED,
                data_name: "change_this",
            });
            dispatch(setLoading(false));
        })
    }

}

export function setLoading(status = true) {
    return {
        type: types.DATA_LOADING,
        status
    }
}

export function showNotification(infoText, notificationType, id) {
    return {
        type: types.PUSH_NOTIFICATION,
        infoText,
        notificationType,
        id
    }
}

export function clearNotification(notificationId) {
    return {
        type: types.CLEAR_NOTIFICATION,
        id: notificationId
    }
}
