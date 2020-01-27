import { USER_LOGIN_START, USER_LOGIN_FULFILLED, USER_LOGIN_FAILED } from '../admin_user/constant';
import { userLoginReducer } from '../reducers/user';

describe("User Reducer", () =>{

    const state = {
        user :{},
        fetching : false,
        fetched : false,
        error : null
    }

    it('START_LOGIN', () => {
        const action = {type: USER_LOGIN_START, payload: {} }
        const results = userLoginReducer(state, action)
        expect(results).toEqual({...state, fetching: true})

    })

    it('LOGIN_FULFILLED', () => {
        const action = {type: USER_LOGIN_FULFILLED, payload: {} }
        const results = userLoginReducer(state, action)
        expect(results).toEqual({...state, fetching: false, fetched: true})
    })

    it('LOGIN_FAILED', () =>{
        const action = {type: USER_LOGIN_FAILED, payload:{} };
        const results = userLoginReducer(state, action);
        expect(results).toEqual({...state, fetching: false, fetched: false, error:{} })
    })
    
})