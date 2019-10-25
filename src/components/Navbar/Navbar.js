
import React from 'react';
import {Nav, Navbar, Button} from 'react-bootstrap';
import {BrowserRouter as Link} from 'react-router-dom';
import Cookies from 'universal-cookie';
class navbar extends React.Component{
    render(){
        return(
        <div>
            
            <Navbar bg="warning" variant="light" >
              <Navbar.Brand href="/">
                ШайShake
              </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/about">О Нас</Nav.Link>
                    <Nav.Link href="/myorders">Мои Заказы</Nav.Link>
                </Nav>
                { this.props.isAuth ? null :
                  <Link to="/signin">
                    <Button style={{marginRight: 7}} variant="warning">Войти</Button>
                  </Link>
                }
                { this.props.isAuth ? null :
                  <Link to="/register">
                    <Button variant="warning">Зарегистрироваться</Button>   
                  </Link> 
                }
                { this.props.isAuth ?
                  <Button onClick={() => {
                      let cook = new Cookies();
                      cook.remove('auth-token');
                      this.props.setAuth(false);
                    }} variant="success">Выйти</Button> : null }
              </Navbar>
              </div>     
        )
    }
}

export default navbar