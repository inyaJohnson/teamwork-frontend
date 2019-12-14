import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserLogin from './components/UserLogin';
import AdminLogin from './components/AdminLogin';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact={true} path='/' component={UserLogin} /> 
          <Route exact path='/admin' component={AdminLogin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
