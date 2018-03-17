import queryApi from "./reduxfunctions/api";

let globalId = 0;
export const idGenerator = (prefix = "") => {
    globalId++;
    return prefix + globalId
}
export const cookieByName = function (name) {
    let match = document.cookie.match(new RegExp(name + '=([^;]+)'));
    if (match) return match[1];
}
export const validateEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
export const coloredConsole = function (string){
    console.log('%c ' + string, 'background: #222; color: red;font-size : 16px ');
}
