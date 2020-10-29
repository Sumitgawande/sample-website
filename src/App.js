import React from 'react'
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sample from './pages/Sample/Sample.js';


function App() {
  return (

    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Sample}></Route>
          {/* <Route path="/" exact component={Home}></Route> */}
        </Switch>
      </Router>
   
    </div>
  );
}

export default App;
