import { combineReducers } from 'redux';
import { adminLoginReducer, usersListReducer, FeedReducer } from './admin';
import { userLoginReducer }from './user';

const reducer = combineReducers({
    adminLogin: adminLoginReducer,  userLogin: userLoginReducer, usersList : usersListReducer,
    feedList : FeedReducer
});

export default reducer;