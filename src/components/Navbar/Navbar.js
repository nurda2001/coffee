import React from 'react';
import {Nav, Navbar, Button} from 'react-bootstrap';
import {BrowserRouter as Router,Link} from 'react-router-dom';

class navbar extends React.Component{
  constructor(props){
    super(props);
    
    }
    render(){
        return(
        <div>
            <Navbar bg="light" variant="light">
              <Navbar.Brand href="/">
                ШайShake
              </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Домой</Nav.Link>
                    <Nav.Link href="/about">О Нас</Nav.Link>
                    <Nav.Link href="/contact">Контакты</Nav.Link>
                </Nav>
                <Button style={{marginRight: 7}} variant="warning">Войти</Button>
                <Link to="/register">
                  <Button variant="warning">Зарегистрироваться</Button>   
                </Link> 
              </Navbar>
              </div>     
        )
    }
}

export default navbar