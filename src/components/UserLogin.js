import React, { Component } from 'react';
// import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';
import { LoginButton, Input, Form, LoginForm, RowDiv, LoginBackground, H4, H5, Item } from './style';
import { connect } from 'react-redux';
import Login from './actions/adminLogin';


class UserLogin extends Component {
    constructor(){
        super();
        this.state = {
            userName : '',
            password : ''
        };
    }

    onChangeHandler = event =>{
        const { target: { name, value } } = event
        this.setState({[name] : value})
    }

    onSubmitHandler = event => {
        event.preventDefault();
        const { fetchLogin } = this.props;
        const data = {userName: this.state.userName, password:this.state.password};
        fetchLogin(data);
        // this.setState();
    }

    isAuthenticated = () => {
        const token = localStorage.getItem('token');      
        return token && token.length > 0;
    }

    render(){
        const isAlreadyAuthenticated = this.isAuthenticated();
        return(
            <div>
                {/* {isAlreadyAuthenticated ? <Redirect to='admin/users' /> : */}
               {isAlreadyAuthenticated ?  this.props.history.push('/admin/users') : 
                    <RowDiv>
                        <LoginBackground />
                        <LoginForm>
                            <Form onSubmit={this.onSubmitHandler}>
                                <H4>USER LOGIN</H4>
                                <RowDiv>
                                    <Input name='userName' onChange={this.onChangeHandler} value={this.state.userName} placeholder='Username' />
                                    <Input name='password' type='password' onChange={this.onChangeHandler} value={this.state.password} placeholder='Password' />
                                </RowDiv>
                                <LoginButton>Login</LoginButton>
                                <H5>
                                    Switch account 
                                    <Item activeClassName='is-active' to='/admin' >Admin</Item> |
                                    <Item activeClassName='is-active' to='/' >User</Item>
                                </H5>
                            </Form>
                        </LoginForm>
                    </RowDiv>
                }
        </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        admin : state.adminLogin.admin
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchLogin : (data) => dispatch(Login(data))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserLogin));
// export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);