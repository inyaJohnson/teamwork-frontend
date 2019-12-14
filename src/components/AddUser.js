// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { AddUserForm, AddUserInputDiv, Button, AdminDiv, AddUserInput, Spacer, Item, List, RowDiv, ColumnDiv } from './style';

// const AddUser = () =>{
//     return (
//         <AdminDiv>
//             <RowDiv>
//                 <Spacer />
//                 <List>
//                     <Router>
//                         <Item exact={true} to='/'> List </Item>
//                         <Item exact activeClassName = 'isActive' to='/adduser'>Add User</Item>
//                         <Item exact activeClassName = 'isActive' to='/logout'> Logout</Item>
//                     </Router>
//                 </List>
//             </RowDiv>
            
//             <ColumnDiv>
//                 <AddUserForm>
//                     <AddUserInputDiv>
//                         <AddUserInput placeholder='First Name' />
//                         <AddUserInput placeholder='Last Name' />
//                     </AddUserInputDiv>
//                     <AddUserInputDiv>
//                         <AddUserInput type='email' placeholder='Email' />
//                         <AddUserInput type='password' placeholder='Password' />
//                     </AddUserInputDiv>
//                     <AddUserInputDiv>
//                         <AddUserInput placeholder='Gender' />
//                         <AddUserInput placeholder='Address' />
//                     </AddUserInputDiv>
//                     <AddUserInputDiv>
//                         <AddUserInput placeholder='Department' />
//                         <AddUserInput placeholder='Job Role' />
//                     </AddUserInputDiv>
//                     <Button>Submit</Button>
//                 </AddUserForm>
//             </ColumnDiv>
//         </AdminDiv>

//     );
// }

// export default AddUser;