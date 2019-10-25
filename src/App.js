import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from  './components/Home/Home';
import About from  './components/About/About';
import RegistrationModal from './components/User/Registration';
import SignUp from './components/User/SignUP'
import Basket from './components/Basket/Basket';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import Wrapper from './components/wrapper/Wrapper';
import Order from './components/Order/Order';
import MyOrder from './components/Order/MyOrder';


class App extends React.Component {
  constructor(props){
    super(props);

    this.setAuth = this.setAuth.bind(this);
    this.addToBasket = this.addToBasket.bind(this);
    this.clearBasket = this.clearBasket.bind(this);

    let cook = new Cookies();

    this.state={
      menuItems: [],
      isAuth: cook.get('auth-token') ? true : false, 
      basketItems: cook.get('basket') ? cook.get('basket') : []
    }
  }
  clearBasket(){
    this.setState({
      basketItems: []
    }, () => {
      let cook = new Cookies();
      cook.remove('basket')
    })
  }
  addToBasket(item){
    let cook = new Cookies();
    let newBasket = [...this.state.basketItems];
    newBasket.push(item);
    cook.set('basket', newBasket);
    this.setState({
      basketItems: newBasket
    })
    console.log(item);
  }
  setAuth(auth){
    this.setState({
      isAuth: auth
    })
  }

  componentDidMount(){
    Axios.get('http://10.200.1.10:3000/product/all')
      .then((response) => {
        this.setState({
          menuItems: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }


  render (){
    return (
      <Router>
        {this.state.isAuth ? <Navbar setAuth={this.setAuth} isAuth={this.state.isAuth} /> : null }
        {this.state.isAuth ? <Basket clearBasket={this.clearBasket} basketItems={this.state.basketItems}/> : null}
        <Switch>
            <Route exact path="/signin" render={(props) => {
                return <SignUp {...props} setAuth={this.setAuth} isAuth={this.state.isAuth}/>
              }} />
            <Route exact path="/register" component={RegistrationModal}/>
            
            <Wrapper isAuth={this.state.isAuth}>
              <Route exact path="/about" component={About}/>
              <Route exact path="/myorders" component={MyOrder}/>
             {this.state.basketItems.length > 0 ? <Route exact path="/order" render={(props) => {
               return <Order {...props} basketItems={this.state.basketItems} /> 
             }} /> : null }
              <Route exact path="/" render={(props) => {
                return <Home {...props} addToBasket={this.addToBasket} menuItems={this.state.menuItems}  />
              }} /> 
            </Wrapper>
        </Switch>
      </Router>
      );
}
}

export default App;
