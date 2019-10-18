import React from 'react';
import {Nav, Navbar, Button} from 'react-bootstrap';



class navbar extends React.Component{
    render(){
        return(
         <React.Fragment>
            <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">
      <img
        alt="s"
        src="./logo.jpg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      ShayShake
    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">ДОМОЙ</Nav.Link>
                        <Nav.Link href="/about">О НАС</Nav.Link>
                        <Nav.Link href="/contact">КОНТАКТЫ</Nav.Link>
                    </Nav>
                    <Button variant="warning">Войти</Button>
            </Navbar>
         </React.Fragment>   
        )
    }
}

export default navbar