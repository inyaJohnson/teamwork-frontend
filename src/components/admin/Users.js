import React, { Component } from 'react';
import Layout from './Layout';
import { getAllUsers } from '../actions/admin';
import { connect } from 'react-redux';
import { AddUserForm, OrderedList, ListItem } from '../style'

class Users extends Component{
    constructor(props){
        super(props);
        this.state = {
            users : []
        }
    }
   
    componentDidMount = () => {
        const token = localStorage.getItem('adminToken');
        this.props.getAllUsers(token)
    }

    render(){
        return(
            <Layout>
                <AddUserForm>
                    <OrderedList>
                    {
                        !this.props.loading ? <div>Loading...</div> :
                            this.props.users.map((index, key) =>{
                            return <ListItem key={key}>{ index.firstname} {index.lastname} {index.email} </ListItem>
                            })
                    }
                    </OrderedList>
                </AddUserForm>
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        users : state.usersList.users.data,
        loading : state.usersList.fetched
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getAllUsers : (token) => dispatch(getAllUsers(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);