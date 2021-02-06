import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from '../Search/Search';
import Calendar from '../Calendar/Calendar';
import NavBar from '../NavBar/NavBar';
import Radio from '../Radio/Radio';
import { main, flexBody } from './App.module.css';
import Header from '../Header/Header';
import Color from '../Color/Color';
import TextEdit from '../TextEdit/TextEdit';
import Time from '../Time/Time';
import Date from '../Date/Date';
import Footer from '../Footer/Footer';

const App = () => {
  return (
    <div className={main}>
      <Header />
      <Router>
        <div className={flexBody}>
          <NavBar />
          <Switch>
            <Route path="/" component={Search} exact/>
            <Route path="/color" component={Color}/>
            <Route path="/calendar" component={Calendar}/>
            <Route path="/date" component={Date}/>
            <Route path="/radio" component={Radio} />
            <Route path="/text" component={TextEdit}/>
            <Route path="/time" component={Time}/>
          </Switch>  
        </div>
        <Footer />
      </Router>
    </div>
  )
};

export default App;
