import { USER_LOGIN_FULFILLED } from '../admin_user/constant';
export function LoginDispatch(){
    const result = {

        data : {
            id: 1,
            name : "johnson",
            age : 25,
            state: "ebonyi"
        }
        
    }
    return {type: USER_LOGIN_FULFILLED, payload: result.data}  
}

