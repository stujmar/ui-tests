import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from '../Home/Home';
import { main } from './App.module.css';

const App = () => {
  return (
    <div className={main}>
      <p>Hello World</p>
      <Router>
          <Link />
          <Link />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/radio"/>
        </Switch>  
      </Router>
    </div>
  )
};

export default App;
