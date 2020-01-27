import Axios from 'axios';
import { USER_LOGIN_FULFILLED, USER_LOGIN_FAILED } from '../admin_user/constant';

export function LoginDispatch(data){
    return function (dispatch){
        Axios({
            method : "POST",
            url : "http://localhost:4200/v1/auth/signin",
            data
        }).then((result) => {
            localStorage.setItem('userToken', result.data.token);
            dispatch({type: USER_LOGIN_FULFILLED, payload: result.data})
        }).catch((error) =>{
            dispatch({type: USER_LOGIN_FAILED, payload: error})
        })
    }
}

