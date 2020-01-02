import React, { Component } from 'react';
// import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';
import { LoginBackground } from './style';
import { connect } from 'react-redux';
import { LoginDispatch } from './actions/user';
import Login from './Login';



class UserLogin extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName : '',
            password : '',
            // isAuth: false
        };
    }

    onChangeHandler  = event =>{
        const { target: { name, value } } = event
        this.setState({[name] : value})
    }

    onSubmitHandler = event => {
        event.preventDefault();
        const { fetchLogin } = this.props;
        const data = {email: this.state.userName, password:this.state.password};
        fetchLogin(data);
        // this.setState();
    }

    isAuthenticated = () => {
        const token = localStorage.getItem('userToken');      
        return token && token !== "undefined";
    }

    // componentDidMount = () => {
    //     const {isAuthenticated} = this;
    //     this.setState({
    //         isAuth: isAuthenticated()
    //     })
    // }

    loginError = () => {
        if(this.props.user.message){ 
            return this.props.user.message;
        };
    } 

    render(){
        
        const isAuth = this.isAuthenticated();
        return(
            <div>
                {/* {this.state.isAuth ? <Redirect to='admin/users' /> : */}
               {isAuth ?  this.props.history.push('/admin/feed') :
                   <Login 
                   title = 'USER LOGIN'
                   Background={LoginBackground}
                   onChangeHandler = {this.onChangeHandler}
                   onSubmitHandler = {this.onSubmitHandler}
                   userName = {this.state.userName}
                   password = {this.state.password}
                   placeholder = 'Email'
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserLogin));
// export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);