import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { main } from './App.module.css';

const App = () => {
  return (
    <div className={main}>
      <p>Hello World</p>
    </div>
  );
}

export default App;
