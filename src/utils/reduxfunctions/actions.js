import queryApi from './api';

export const types = {
    POST_DATA_FAILED    :   'POST_DATA_FAILED',
    POST_DATA_SUCCESS   :   'POST_DATA_SUCCESS',
    PUSH_NOTIFICATION   :   'PUSH_NOTIFICATION',
    CLEAR_NOTIFICATION  :   'CLEAR_NOTIFICATION',
    LOGIN_USER_SUCCESS  :   'LOGIN_USER_SUCCESS',
    LOGIN_USER_FAILED   :   'LOGIN_USER_FAILED',
    DATA_LOADING        :   'DATA_LOADING',
    FETCH_DATA_SUCCESS  :   'FETCH_DATA_SUCCESS',
    FETCH_DATA_FAILED   :   'FETCH_DATA_FAILED',
}
export function postData(optData) {
    return function (dispatch, state) {
        console.log("STATE : ",state().form[optData.form].values," END POINT ",optData.params.apiEndPoint);
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
export function getOrderList(url){
   return function(dispatch,state){
       dispatch(setLoading(true));
       return queryApi.getDataFromOutsider(url).then( ({res}) => {
           dispatch({
               type: types.FETCH_DATA_SUCCESS,
               data_name : "temp_data",
               data: res
           });
           dispatch(setLoading(false));
       }).catch( (err) => {
           dispatch({
               type: types.FETCH_DATA_FAILED,
               data_name : "change_this",
           });
           dispatch(setLoading(false));
       })
   }

}
export function setLoading(status = true) {
    return{
        type : types.DATA_LOADING,
        status
    }
}
export function showNotification(infoText, infoColor) {
    return {
        type: types.PUSH_NOTIFICATION,
        infoText,
        infoColor,
    }
}
