import { FETCH_START, FETCH_FULFILLED, FETCH_FAILED, FETCH_LOGIN_START, FETCH_LOGIN_FULFILLED, 
    FETCH_LOGIN_FAILED, FETCH_FEED_START, FETCH_FEED_FULFILLED, FETCH_FEED_FAILED } from '../constant';

const initialState = {
    fetching: false,
    fetched: false,
    error: null 
}

export function adminLoginReducer (state = {...initialState, admin:{} }, action){
    switch(action.type){
        case FETCH_LOGIN_START :{
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

export function usersListReducer (state = {...initialState, users:{} }, action){
    switch(action.type){
        case FETCH_START :{
            return {
                ...state, fetching: true
            }
       }

        case FETCH_FULFILLED:{
            return {
                ...state, fetching : false, fetched: true, users: action.payload
            }
        }

        case FETCH_FAILED:{
            return {
                ...state, fetching: false, fetched: false, error: action.payload
            }
        }

        default : return state;
    }
}

export const FeedReducer =(state = {...initialState, feed : {} }, action) => {
    switch(action.type){
        case FETCH_FEED_START :{
            return {
                ...state, fetching : true
            }
        }
        case FETCH_FEED_FULFILLED : {
            return {
                ...state, fetching : false, fetched : true, feed : action.payload
            }
        }
        case FETCH_FEED_FAILED : {
            return{
                ...state, fetching : false, fetched : false, error : action.payload
            }
        }
        default : return state
    }
}