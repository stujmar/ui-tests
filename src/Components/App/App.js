import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Search from '../Search/Search';
import Calendar from '../Calendar/Calendar';
import NavBar from '../NavBar/NavBar';
import Radio from '../Radio/Radio';
import { main, flexBody } from './App.module.css';
import Header from '../Header/Header';
import Color from '../Color/Color';
import NoMatch from '../NoMatch/NoMatch';
import TextEdit from '../TextEdit/TextEdit';
import Time from '../Time/Time';
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
            <Route path="/radio" component={Radio} />
            <Route path="/text" component={TextEdit}/>
            <Route path="/time" component={Time}/>
            <Route component={NoMatch} exact/>
          </Switch>  
        </div>
        <Footer />
      </Router>
    </div>
  )
};

export default App;
