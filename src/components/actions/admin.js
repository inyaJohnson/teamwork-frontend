import Axios from 'axios';
import { FETCH_FULFILLED, FETCH_FAILED, FETCH_LOGIN_FULFILLED, FETCH_LOGIN_FAILED,
    FETCH_FEED_FULFILLED, FETCH_FEED_FAILED
} from '../constant';


export function LoginDispatch (data){
    return function(dispatch){
        Axios({
            method: 'post',
            url:"http://localhost:4200/v1/admin/login",
            data
        }).then((result) => {
            localStorage.setItem('adminToken', result.data.token);
            dispatch({type:FETCH_LOGIN_FULFILLED, payload: result.data})
        }).catch((error) =>{
            dispatch({type:FETCH_LOGIN_FAILED, payload: error})
        })
    }
}

export function getAllUsers(token){
    return function (dispatch){
        Axios({
            method : "GET",
            url: "http://localhost:4200/v1/auth/user/",
            headers:{
                authorization: `Bearer ${token}`
                // Accept : "application/json",
                // Content-Type: "application/json"
            }
        }).then((result) => {
            dispatch({type: FETCH_FULFILLED, payload: result.data})
        }).catch((error) =>{
            dispatch({type:FETCH_FAILED, payload: error})
        })
    }
}


export const getAllFeed = token => dispatch => {
    Axios({
        method : 'GET',
        url : 'http://localhost:4200/v1/feed/',
        headers:{
            authorization : token
        }
    }).then((result)=>{
        // console.log("result from ===", result.data.data.results)
        dispatch({type:FETCH_FEED_FULFILLED, payload : result.data})
    }).catch((error) => {
        dispatch({type: FETCH_FEED_FAILED, payload: error})
    })
}