import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from '../Home/Home';
import Calendar from '../Calendar/Calendar';
import NavBar from '../NavBar/NavBar';
import Radio from '../Radio/Radio';
import { main } from './App.module.css';

const App = () => {
  return (
    <div className={main}>
      <p>Hello World</p>
      <button>within react but outside of Router</button>
      <Router>
          <NavBar />


        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/calendar" component={Calendar} exact/>
          <Route path="/radio" component={Radio} />
        </Switch>  
      </Router>
    </div>
  )
};

export default App;
