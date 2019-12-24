import React from 'react';
import { RowDiv, NavMenu, NavMenuItem, StyledH4, Dashboard } from '../style';
import AddUser from './AddUser';

const Layout = ({children}) =>{
    // const children = props.children;
    return (
        <RowDiv>
            <NavMenu>
                <NavMenuItem exact activeClassName = 'is-active' to='/admin/users'>User</NavMenuItem>
                <NavMenuItem exact activeClassName = 'is-active' to='/admin/feed'>Feed</NavMenuItem>
                <NavMenuItem exact activeClassName = 'is-active' to='/admin/statistics'>Statistics</NavMenuItem>
                <NavMenuItem exact activeClassName = 'is-active' to='/admin/logout'>Logout</NavMenuItem>
            </NavMenu>
            <Dashboard>
                <StyledH4>Admin Dashboard </StyledH4>
                <RowDiv>
                    {children}
                    <AddUser />
                </RowDiv>
            </Dashboard>
        </RowDiv>
    );
}

export default Layout;
