import React from 'react';
import { RowDiv, NavMenu, NavMenuItem } from '../style';
import FeedLayout from '../admin_user/FeedLayout';

const Layout = ({children, title }) =>{
    return (
        <RowDiv>
            <NavMenu>
                <NavMenuItem exact activeClassName = 'is-active' to='/admin/users'>User</NavMenuItem>
                <NavMenuItem exact activeClassName = 'is-active' to='/admin/feed'>Feed</NavMenuItem>
                <NavMenuItem exact activeClassName = 'is-active' to='/admin/adduser'>Add User</NavMenuItem>
                <NavMenuItem exact activeClassName = 'is-active' to='/admin/statistics'>Statistics</NavMenuItem>
                <NavMenuItem exact activeClassName = 'is-active' to='/admin/logout'>Logout</NavMenuItem>
            </NavMenu>
            <FeedLayout children={children} title={title} />
        </RowDiv>
    );
}

export default Layout;
