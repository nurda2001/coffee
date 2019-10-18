import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from  './components/Home/Home';
import About from  './components/About/About';
import Contact from  './components/Contact/Contact';
import Jumbo from './components/Jumbo/Jumbotron';


class App extends React.Component {
  render (){
  return (
    <React.Fragment>
      <Navbar />
      <Jumbo />
          <Router>
              <Switch>
                  <Route exact path="/"   component={Home}/> 
                  <Route path="/about"    component={About}/> 
                  <Route path="/contact"  component={Contact}/> 
              </Switch>
          </Router>  
      </React.Fragment>
  );
}
}

export default App;
