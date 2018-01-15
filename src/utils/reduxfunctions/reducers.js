import {types} from './actions';
export function apiReducer(state = {}, action) {
    switch (action.type) {
        case types.POST_DATA_SUCCESS:
            return {...state, ...action.data}
        default :
            return state
    }
}
export function userReducer(state = {}, action) {
    switch (action.type) {
        case types.LOGIN_USER_SUCCESS:
            return {...state, ...action.data}
        default :
            return state
    }
}
export function notificationReducers(state = {}, action) {
    switch (action.type) {
        case types.PUSH_NOTIFICATION:
            return {...state, infoText : action.infoText, infoColor: action.infoColor}
        case types.CLEAR_NOTIFICATION:
            return {};
        default :
            return state
    }
}