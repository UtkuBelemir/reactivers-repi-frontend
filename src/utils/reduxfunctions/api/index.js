import axios from 'axios';
import {cookieByName} from "../../utils";
//const APIURL = "http://www.reactivers.com:4000";
const APIURL = "http://localhost:4000";

class QueryApi {
    static sendData(data,apiEndPoint){
        return axios.post(APIURL + "/" +  apiEndPoint,data,{headers:{ 'Authorization': cookieByName("bikriptAuth")}}).then((response) => {
            return {...response.data}
        }).catch((error) => {
            return {err : error}
        })
    }
    static getDataFromOutsider(url){
        return axios.get(url)
            .then(function (response) {
                return {res :response.data}
            })
            .catch(function (error) {
                return {err :error}
            });
    }

}
export default QueryApi;
