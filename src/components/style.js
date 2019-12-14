import React from 'react';
import { NavLink } from 'react-router-dom';
import  styled, { css }  from 'styled-components';
import userBackground from './user-background.jpg';
import adminBackground from './admin-background.jpg';

export const InputStyle = css`
    padding: 1em 1em;
    border-radius: 10px;
    margin: 5px 5px;
    font-size: 1em;
`;

export const Button = styled.button`
    background-color: green;
    color: white;
    width: 88%;
    ${InputStyle};
`;

export const Input = styled.input`
    ${InputStyle}
`;
export const H4 = styled.h4`
    font-weight: bolder;
`;

export const H5 = styled.h5`
    font-weight: normal;
`;


export const Form = styled.form`
    display: flex;
    flex-flow: column wrap;
    border-radius:10px;
    padding : 50px;
    align-items : center;
    `;


// export const List = styled.ul`
//     display : flex;
//     list-style: none;
//     width: auto;
//     justify-content: space-around;
// `;


const NavigationLink = ({ className, children, to, activeClassName }) =>{
    return <NavLink className={className} to={to} activeClassName={activeClassName}> {children} </NavLink>
}

export const Item = styled(NavigationLink)`
    margin : 3px 6px;
    color: green;
    text-decoration: none;
    // &.is-active{
    //     color:red;
    // } 
    &:hover  {
        color:red;
    }
`;


// export const AddUserForm = styled.form`
//     display: flex;
//     flex-flow: column wrap;
//     background-color: white;
//     opacity: 0.5;
//     border-radius:10px;
//     padding : 70px;
//     width: 50%;
//     margin-top: 30px;

//     `;

// export const AddUserInput = styled.input`
//     ${InputStyle};
//     width: 100%;
//     margin : 5px 5px;
// `;

// export const Div = css `
//     display: flex;
// `;



// export const AddUserInputDiv = styled.div`
//     display: flex;
//     width: 100%;
// `;

export const RowDiv = styled.div`
    display: flex;
    // flex-flow: row wrap;
`;

export const ColumnDiv = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-content: center;
    `;

export const Spacer = styled.div`
    flex-grow: 1;
`

// export const AdminDiv = styled.div`
//     flex-flow: column wrap;
//     ${Background};
// `;

export const LoginForm = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    min-height: 100vh;
    width:50%;
    background-color: #EEEEEE;
`;

export const Background = css `
    background-size: cover;
    width: 50%;
    min-height: 100vh;
`;

export const LoginBackground = styled.div`
    background: url(${userBackground}) transparent no-repeat center;
    ${Background};
`;

export const AdminLoginBackground = styled.div`
    background: url(${adminBackground}) transparent no-repeat center;
    ${Background};
`;
