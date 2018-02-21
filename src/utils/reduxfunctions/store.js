import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {combineReducers} from 'redux';
import {apiReducer,notificationReducers,userReducer,dataReducers} from './reducers';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    notification : notificationReducers,
    apiReducer,
    userInfo : userReducer,
    datas : dataReducers,
    form: formReducer,
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)
export default store;
