import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from '../Home/Home';
import Calendar from '../Calendar/Calendar';
import NavBar from '../NavBar/NavBar';
import Radio from '../Radio/Radio';
import { main, flexBody } from './App.module.css';
import Header from '../Header/Header';

const App = () => {
  return (
    <div className={main}>
      <Header />
      <Router>
        <div className={flexBody}>
          <NavBar />
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/calendar" component={Calendar} exact/>
            <Route path="/radio" component={Radio} />
          </Switch>  
        </div>
      </Router>
    </div>
  )
};

export default App;
