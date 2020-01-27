import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { LoginBackground } from '../style';
import { connect } from 'react-redux';
import { LoginDispatch } from '../actions/user';
import Login from '../admin_user/Login';
import LoginHoc from '../admin_user/LoginHoc';

class UserLogin extends Component{

    onSubmitHandler = event => {
        event.preventDefault();
        const { fetchLogin } = this.props;
        const data = {email: this.props.userName, password:this.props.password};
        fetchLogin(data);
    }

    isAuthenticated = () => {
        const token = localStorage.getItem('userToken');    
        return token && token !== "undefined";
    }

    loginError = () => {
        if(this.props.user.message){ 
            return this.props.user.message;
        };
    }
    
    render(){
        const isAuth = this.isAuthenticated();
        return(
            <div>
                {isAuth ?  this.props.history.push('/user') :
                    <Login 
                    title = {this.props.title}
                    Background={LoginBackground}
                    onChangeHandler = {this.props.onChangeHandler}
                    onSubmitHandler = {this.onSubmitHandler}
                    userName = {this.props.userName}
                    password = {this.props.password}
                    placeholder = {this.props.placeholder}
                    errorMessage = {this.loginError}
                    /> 
                }
        </div>
        );
    }
    
}

const mapStateToProps = state =>{
    return {
        user : state.userLogin.user
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchLogin : (data) => dispatch(LoginDispatch(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginHoc(UserLogin)));
