import { USER_LOGIN_START, USER_LOGIN_FULFILLED, USER_LOGIN_FAILED } from '../admin_user/constant';

const initialState = {
    user : {},
    fetching : false,
    fetched : false,
    error : null
}

export function userLoginReducer(state = initialState, action){
    switch(action.type){
        case USER_LOGIN_START: {
            return {...state, fetching: true}
        }
        case USER_LOGIN_FULFILLED : {
            return{ ...state, fetching : false, fetched : true, user: action.payload }
        }
        case USER_LOGIN_FAILED : {
            return { ...state, fetching : false, fetched :false, error: action.payload }
        }
        default : return state
    }
}