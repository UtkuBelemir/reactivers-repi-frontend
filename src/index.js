import React from 'react';
import ReactDOM from 'react-dom';
import Router from './RouterIndex'
import './css/app.css';
import {Provider} from 'react-redux'
import store from './utils/reduxfunctions/store';
import {cookieByName} from './utils/utils';
window.getCookie = cookieByName;
String.prototype.capitalize = function() {
    return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};
ReactDOM.render(
    <Provider store={store}>
            <Router/>
    </Provider>,
    document.getElementById('root')
);
