import React from 'react';
import { LoginButton, Input, Form, LoginForm, RowDiv, H4, H5, Item } from '../style';
import { loginValidator } from '../functions/validate';
import { Error } from './Error';
import '../style2.css';

const Login = (props) =>{
    const { title, Background, onChangeHandler, onSubmitHandler, userName, password, placeholder, errorMessage } = props;
    const errors = loginValidator(userName, password);
    const isEnabled = Object.keys(errors).some(x => errors[x]);
    return(
        <RowDiv>
            <Background />
            <LoginForm>
                <Form onSubmit={onSubmitHandler}>
                    <H4>{title}</H4>
                    <RowDiv>
                        <Input className={errors.email ? 'error' : ''} name='userName' onChange={onChangeHandler} value={userName} placeholder={placeholder} />
                        <Input className={errors.password ? 'error' : ''} name='password' type='password' onChange={onChangeHandler} value={password} placeholder='Password' />
                    </RowDiv>
                    <LoginButton disabled={isEnabled}>Login</LoginButton>
                    <H5>
                        Switch account 
                        <Item activeClassName='is-active' to='/admin' >Admin</Item> |
                        <Item activeClassName='is-active' to='/' >User</Item>
                    </H5>
                    <Error errorMessage={errorMessage}/>
                </Form>
            </LoginForm>
            
        </RowDiv>
    );
    
}

export default Login;