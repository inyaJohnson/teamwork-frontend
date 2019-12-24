import { FETCH_LOGIN_FULFILLED, FETCH_LOGIN_FAILED } from '../actions/adminLogin';

const initialState = {
    admin: {},
    fetching: false,
    fetched: false,
    error: null 
}

export default function reducer (state = initialState, action){
    switch(action.type){
        case "FETCH_LOGIN_START" :{
            return {
                ...state, fetching: true
            }
        }

        case FETCH_LOGIN_FULFILLED:{
            return {
                ...state, fetching : false, fetched: true, admin: action.payload
            }
        }

        case FETCH_LOGIN_FAILED:{
            return {
                ...state, fetching: false, fetched: false, error: action.payload
            }
        }

        default : return state;
    }
}