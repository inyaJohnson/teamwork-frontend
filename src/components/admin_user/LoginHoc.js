import React, { Component } from 'react';

const LoginHoc = (WrappedLogin) =>{
    class LoginHoc extends Component{
        constructor(props){
            super(props);
            this.state = {
                userName : '',
                password : ''
            };
        }
    
        onChangeHandler  = event =>{
            const { target: { name, value } } = event
            this.setState({[name] : value})
        }
    
        render(){
            return (
                <WrappedLogin onChangeHandler = {this.onChangeHandler} {...this.state} {...this.props} />
                )
        }
    }
    return LoginHoc
}
export default LoginHoc;