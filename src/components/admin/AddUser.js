import React, { Component } from 'react';
import { AddUserForm, RowDiv, Button, AddUserInput } from '../style';

class AddUser extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    onChangeHandler = event => {
        const { target : { name, value } } = event;
        this.setState({
            [name] : value
        });
    }
    
    onSubmitHandler = event => {
        event.preventDefault();
    }

    render(){
        return (
            <AddUserForm>
                <RowDiv>
                    <AddUserInput name='firstName' placeholder='First Name' />
                    <AddUserInput name='lastName' placeholder='Last Name' />
                </RowDiv>
                <RowDiv>
                    <AddUserInput name='email' type='email' placeholder='Email' />
                    <AddUserInput name='password' type='password' placeholder='Password' />
                </RowDiv>
                <RowDiv>
                    <AddUserInput name='gender' placeholder='Gender' />
                    <AddUserInput name='address' placeholder='Address' />
                </RowDiv>
                <RowDiv>
                    <AddUserInput name='department' placeholder='Department' />
                    <AddUserInput name='role' placeholder='Job Role' />
                </RowDiv>
                <Button>Submit</Button>
            </AddUserForm>
        );
    }
}
export default AddUser;