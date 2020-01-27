import React from 'react';
import { NavLink } from 'react-router-dom';
import  styled, { css }  from 'styled-components';
import userBackground from './user/user-background.jpg';
import adminBackground from './admin/admin-background.jpg';

export const RowDiv = styled.div`
    display: flex;
    background-color : #EEEEEE;
`;

export const ColumnDiv = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-content: center;
    `;

export const Spacer = styled.div`
    flex-grow: 0.5;
`

export const InputStyle = css`
    padding: 1em 1em;
    border-radius: 10px;
    margin: 5px;
    font-size: 1em;
`;

export const Button = styled.button`
    background-color: green;
    color: white;
    ${InputStyle};
`;


export const LoginButton = styled(Button)`
    width: 88%
`

export const Input = styled.input`
    ${InputStyle}
`;


export const H4 = styled.h4`
    font-weight: bolder;
`;

export const H4Div = styled.div`
border:thin solid red;
text-align: left;
background-color: green;
width: 100%;
`;

export const StyledH4 = styled(H4)`
    text-align: left;
    margin: 0px;
    padding: 10px;
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

const NavigationLink = ({ className, children, to, activeClassName }) =>{
    return <NavLink className={className} to={to} activeClassName={activeClassName}> {children} </NavLink>
}

export const Item = styled(NavigationLink)`
    margin : 3px 6px;
    color: green;
    text-decoration: none;
    &:hover  {
        color:red;
    }
`;

export const NavMenuItem = styled(NavigationLink)`
    color: green;
    text-decoration: none;
    &.is-active{
        color:red;
    } 
    &:hover  {
        color:red;
    }
`;

export const NavMenu = styled(ColumnDiv)`
    list-style: none;
    width: 300px;
    justify-content: space-around;
    background-color:#DDDDDD;
    height: 100vh;
    position: fixed;
    left : 0;
`;

export const Dashboard = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-flow: column wrap;
    margin-left:300px;
`;

export const UserFeed = styled.div`
    margin : 60px 0px 0px 50px ;
`

export const SearchInput = styled.input`
    ${InputStyle}
    padding : 0.5em 0.5em;
    font-size: 0.9em;
    outline: none;
    border-radius : 5px;
`;

export const SearchStyle = styled(RowDiv)`
    width: 100%;
    background-color: green;
    color: white;
    position : fixed;
    left: 300px;
    padding: 10px;
`
export const SearchImageStyle = styled.img`
    margin-left : -32px;
`;

export const AddUserForm = styled.form`
    display: flex;
    flex-flow: column wrap;
    margin-top: 30px;
    `;

export const AddUserInput = styled.input`
    ${InputStyle};
    margin : 5px 5px;
`;

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

export const LoginError = styled.div`
    color: red;
`

export const OrderedList = styled.ol`
text-align : left;
`

export const UnorderedList = styled.ul`
    list-style-type: none;  
    text-align : left;
`
export const ListItem = styled.li`
    padding: 10px;
    font-size: bold;
`
export const FeedSize = styled.div`
    display: flex;
    flex-direction : column;
    background-color : white;
    border : thin solid #dddddd;
    border-radius : 10px; 
    margin : 10px 0px;
    padding : 5px;
    width : 500px;
`;


export const TextArea = styled.textarea`
    width : 90%;
    border: none;
    outline : none;
    font-size : 1.5em;
    font-weight : bold;
    wrap: none;
`;

export const Toolbar = styled.div`
    display: flex;
    border-top: solid thin #dddddd;
    border-bottom: solid thin #dddddd;
    padding : 5px 0px;
    margin-bottom : 10px;
    justify-content: space-around;
`

export const LeftDiv = styled.div`
    text-align: left;
`
export const FeedForm = styled.form`
    display: flex;
    flex-flow: column wrap;
    align-items : left;
    `;

export const ErrorStyle = styled.h2`
    text-align : center;
    font-weight : bold;
    color : red;
`;
