import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from  './components/Home/Home';
import About from  './components/About/About';
import Contact from  './components/Contact/Contact';
import Jumbo from './components/Jumbo/Jumbotron';
import RegistrationModal from './components/User/Registration'


class App extends React.Component {
  constructor(props){
    super(props);
    
    }


  render (){
  return (
      <Router>
        <div className="main">
        <Navbar />
        <Jumbo /> 
        <Switch>
            <Route exact path="/"   component={Home}/> 
            <Route path="/about"    component={About}/> 
            <Route path="/contact"  component={Contact}/> 
            <Route path="/register" component={RegistrationModal}/>
        </Switch>
        </div>
      </Router>  
      );
}
}

export default App;
