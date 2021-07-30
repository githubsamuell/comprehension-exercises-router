import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import About from './components/About'
import Users from './components/Users'

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div><Link to='/'>Home</Link></div>
      <div><Link to='/about'>About</Link></div>
      <div><Link to='/users'>Users</Link></div>
      <div><Link to='/strict-access'>Strict Access</Link></div>
      <Switch>     
        <Route exact path='/' component={ Home } />
        <Route exact path='/about' component={ About } />
        <Route 
          exact
          path='/users/:id'
          render={ (propsRoute) => <Users {...propsRoute} greetingMessage='Good Morning' /> }
        />
      </Switch>     
    </BrowserRouter>  
    );
  }
}

export default App;
