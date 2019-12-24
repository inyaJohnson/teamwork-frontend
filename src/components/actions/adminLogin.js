import Axios from 'axios';

export const FETCH_LOGIN_FULFILLED = "FETCH_LOGIN_FULFILLED";
export const FETCH_LOGIN_FAILED = "FETCH_LOGIN_FAILED";

export default function (data){
    return function(dispatch){
        Axios({
            method: 'post',
            url:"http://localhost:4200/v1/admin/login",
            data
        }).then((result) => {
            localStorage.setItem('token', result.data.token);
            dispatch({type:"FETCH_LOGIN_FULFILLED", payload: result.data})
        }).catch((error) =>{
            dispatch({type:"FETCH_LOGIN_FAILED", payload: error})
        })
    }
}
