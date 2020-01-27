import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserLogin from './components/user/UserLogin';
import AdminLogin from './components/admin/AdminLogin';
import Users from './components/admin/Users';
import Feed from './components/admin/Feed';
import Statistics from './components/admin/Statistics';
import Logout from './components/admin/Logout';
import Home from './components/user/Home';
import AddUser from './components/admin/AddUser';
import { PathError } from './components/admin_user/Error';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact={true} path='/' render={(props) => <UserLogin  {...props} title = 'USER LOGIN' placeholder = 'Email' />} /> 
          <Route exact path='/admin' render={(props) => <AdminLogin {...props} title = 'ADMIN LOGIN' placeholder = 'Username' />} />
          <Route path='/admin/users' component ={Users} />
          <Route path='/admin/feed' component ={Feed} />
          <Route path='/admin/adduser' component ={AddUser} />
          <Route path='/admin/statistics' component ={Statistics} />
          <Route path='/admin/logout' component ={Logout} />
          <Route exact path='/user' component={Home} />
          <Route component={PathError} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
