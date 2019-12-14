import React from 'react';
import { List, AdminDiv, Spacer, Item } from '../style';

const Layout = () =>{
    return (
        <AdminDiv>
            <Spacer />
            <List>
                <Item exact={true} to='/'> List </Item>
                <Item exact activeClassName = 'isActive' to='/adduser'>Add User</Item>
                <Item exact activeClassName = 'isActive' to='/logout'> Logout</Item>
            </List>
        </AdminDiv>
    );
}

export default Layout;
