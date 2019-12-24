import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserLogin from './components/UserLogin';
import AdminLogin from './components/AdminLogin';
import Users from './components/Admin/Users';
import Feed from './components/Admin/Feed';
import Statistics from './components/Admin/Statistics';
import Logout from './components/Admin/Logout';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact={true} path='/' component={UserLogin} /> 
          <Route exact path='/admin' component={AdminLogin} />
          <Route path='/admin/users' component ={Users} />
          <Route path='/admin/feed' component ={Feed} />
          <Route path='/admin/statistics' component ={Statistics} />
          <Route path='/admin/logout' component ={Logout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
