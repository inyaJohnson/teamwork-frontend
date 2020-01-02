
import React, { Component } from 'react';
import { AdminLoginBackground } from './style';
import { connect } from 'react-redux';
import { LoginDispatch }  from './actions/admin';
import Login from './Login'

class AdminLogin extends Component{
    constructor(props){
        super(props);
        this.state = {
            userName : '',
            password : ''
        }
    }

    onChangeHandler = event => {
        const { target:{ name, value } } = event;
        this.setState({
            [name]: value
        })
    }
    
    onSubmitHandler = event => {
        event.preventDefault();
        const { fetchLogin } = this.props;
        const data = {userName : this.state.userName, password:this.state.password }
        fetchLogin(data);
    }


    isAuthenticated = () => {
        const token = localStorage.getItem('adminToken');      
        return token && token !== "undefined";
    }

    loginError = () => {
        if(this.props.admin.message){ 
            return this.props.admin.message;
        };
    }

    render(){
        const isAuth = this.isAuthenticated();
        return(
            <div>
                {/* {this.state.isAuth ? <Redirect to='admin/users' /> : */}
               {isAuth ?  this.props.history.push('/admin/users') :
                   <Login 
                   title = 'ADMIN LOGIN'
                   Background={AdminLoginBackground}
                   onChangeHandler = {this.onChangeHandler}
                   onSubmitHandler = {this.onSubmitHandler}
                   userName = {this.state.userName}
                   password = {this.state.password}
                   placeholder = 'userName'
                   errorMessage = {this.loginError}
                   /> 
                }
        </div>
        );
    }

    
}

const mapStateToProps = state => {
    return{
        admin : state.adminLogin.admin
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchLogin : (data) => dispatch(LoginDispatch(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);

