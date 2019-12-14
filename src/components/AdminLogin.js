import React from 'react';
import { Button, Input, Form, LoginForm, RowDiv, AdminLoginBackground, H4, H5, Item } from './style';

const AdminLogin = () => {
    return(
        <RowDiv>
            <AdminLoginBackground />
            <LoginForm>
                <Form>
                    <H4>ADMIN LOGIN</H4>
                    <RowDiv>
                        <Input type='text' placeholder='Username' />
                        <Input type='password' placeholder='Password' />
                    </RowDiv>
                    <Button>Login</Button>
                    <H5>
                        Switch account 
                            <Item activeClassName='is-active' to='/admin' >Admin</Item> |
                            <Item activeClassName='is-active' to='/' >User</Item>
                    </H5>
                </Form>
            </LoginForm>
        </RowDiv>
    );
}

export default AdminLogin;