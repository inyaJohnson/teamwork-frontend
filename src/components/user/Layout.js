import React from 'react';
import { RowDiv, NavMenu, NavMenuItem } from '../style';
import FeedLayout from '../admin_user/FeedLayout';

const Layout = ({children, title}) =>{
    return (
        <RowDiv>
            <NavMenu>
                <NavMenuItem exact={true} activeClassName = 'is-active' to='/user'>Feed</NavMenuItem>
                <NavMenuItem exact activeClassName = 'is-active' to='/user/article'>Articles</NavMenuItem>
                <NavMenuItem exact activeClassName = 'is-active' to='/user/gifs'>Gifs</NavMenuItem>
                <NavMenuItem exact activeClassName = 'is-active' to='/user/logout'>Logout</NavMenuItem>
            </NavMenu>
            <FeedLayout children={children} title={title} />
        </RowDiv>
    );
}

export default Layout;
