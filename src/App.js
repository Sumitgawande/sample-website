import React from 'react'
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About/About.js';
import Contact from './pages/contact/Contact.js';
import Home from './pages/Home/Home.js';
import Political from './pages/categories/Political'
import Business from './pages/categories/Business.js';
import Sports from './pages/categories/Sports.js';
import Techbuzz from './pages/categories/Tech-Buzz.js';
import Sample2 from './pages/Sample1/Sample2.js';


function App() {


  return (

    <div className="App">

      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/political" exact component={Political}></Route>
          <Route path="/business" exact component={Business}></Route>
          <Route path="/sports" exact component={Sports}></Route>
          <Route path="/sample2" exact component={Sample2}></Route>
          <Route path="/techbuzz" exact component={Techbuzz}></Route>
          <Route path="/aboutus" exact component={About}></Route>
          <Route path="/contactus" exact component={Contact}></Route>
        </Switch>
      </Router>
   
  

     
    </div>
  );
}

export default App;
