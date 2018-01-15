import queryApi from './api';

export const types = {
    POST_DATA_FAILED: 'POST_DATA_FAILED',
    POST_DATA_SUCCESS: 'POST_DATA_SUCCESS',
    PUSH_NOTIFICATION: 'PUSH_NOTIFICATION',
    CLEAR_NOTIFICATION: 'CLEAR_NOTIFICATION',
    LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS',
    LOGIN_USER_FAILED: 'LOGIN_USER_FAILED',
}
export function postData(optData) {
    return function (dispatch, state) {
        return queryApi.sendData(state().form[optData.form].values, optData.params.apiEndPoint).then((newData) => {
            if (newData.err) {
                dispatch({
                    type: types.POST_DATA_FAILED,
                    data: newData.err
                })
                dispatch(showNotification(newData.err, "red"))
            } else {
                dispatch({
                    type: types.POST_DATA_SUCCESS,
                    data: newData
                });
                dispatch(showNotification("Form Başarıyla Oluşturuldu.", "green"))
                if (optData.onSave) {
                    optData.onSave(newData.res.data)
                }
            }
        }).catch((error) => {
            dispatch({
                type: types.POST_DATA_FAILED,
                data: error
            })
            dispatch(showNotification("Form Oluşturulurken Hata Oluştu. Hata: " + error, "red"))
        })
    }
}
export function userLogin(optData) {
    return function (dispatch, state) {
        return queryApi.sendData(state().form.frm_user_login.values, "login").then((newData) => {
            if (newData.err) {
                dispatch({
                    type: types.LOGIN_USER_FAILED,
                    data: newData.err
                })
                dispatch(showNotification(newData.err, "red"))
            } else {
                dispatch({
                    type: types.LOGIN_USER_SUCCESS,
                    data: newData.res.data
                });
                dispatch(showNotification("Başarıyla Giriş Yapıldı", "green"))
                if (optData.onSave) {
                    optData.onSave(newData.res.data)
                }
            }
        }).catch((error) => {
            dispatch({
                type: types.LOGIN_USER_FAILED,
                data: error
            })
            dispatch(showNotification(error, "red"))
        })
    }
}
export function showNotification(infoText, infoColor) {
    return {
        type: types.PUSH_NOTIFICATION,
        infoText,
        infoColor,
    }
}