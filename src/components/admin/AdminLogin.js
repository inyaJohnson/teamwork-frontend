import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { AdminLoginBackground } from '../style';
import { connect } from 'react-redux';
import { LoginDispatch }  from '../actions/admin';
import Login from '../admin_user/Login'
import LoginHoc from '../admin_user/LoginHoc';

class AdminLogin extends Component{
     
    onSubmitHandler = event => {
        event.preventDefault();
        const { fetchLogin } = this.props;
        const data = {userName: this.props.userName, password:this.props.password};
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
                {isAuth ?  this.props.history.push('/admin/feed') :
                    <Login 
                    title = {this.props.title}
                    Background={AdminLoginBackground}
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginHoc(AdminLogin)));

