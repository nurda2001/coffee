import React from 'react';
import {Form, Button, Container, Nav, Col, Row, ButtonGroup, Card, Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './modalReg.css';
const axios = require('axios');

class RegistrationModal extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.state = {
            phone: "",
            name: "",
            password: "",
            repassword: ""
        }
    }

    handleChange(event){
        let a = {};
        a[event.target.name] = event.target.value;
        this.setState(a, () => {console.log(this.state)});
    }

    handleRegister(){
        if (this.state.phone.length > 1 && this.state.name.length > 0 && this.state.password.length > 0) {
            axios({
                url: 'http://172.20.10.12:3000/auth/register',
                data: {
                    phone: this.state.phone,
                    name: this.state.name,
                    password: this.state.password
                },
                method: 'post'
            })
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.error(err);
            });
        } else {
            console.info(1);
        }
    }

    render(){
        return(
           <Container >
               <br />
                <Row>
                    <Col></Col>
                    
                        <Col xs={12} md={6}>
                            <Nav className="justify-content-center">
                        <Image width={180} src="https://firebasestorage.googleapis.com/v0/b/test-36f3c.appspot.com/o/LogoTr.png?alt=media&token=7085a6ce-8981-4913-b163-393f94f5d492"></Image>
                        </Nav>
                            <Form>
                        <Card.Header>Форма Регистрации</Card.Header>
                        <br />
                        <Form.Group controlId="formBasicPhone">
                            <Form.Label>Номер Телефона</Form.Label>
                            <Form.Control size="sm" name="phone" onChange={this.handleChange.bind(this)} value={this.state.phone} type="phone" placeholder="+77071687428" />
                            <Form.Text className="text-muted">
                                We'll never share your phone Num with anyone else ^_^.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Ваше Имя</Form.Label>
                            <Form.Control size="sm" name="name" onChange={this.handleChange.bind(this)} value={this.state.name} type="text" placeholder="Nurda" />
                            <Form.Text className="text-muted">                        
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Пароль</Form.Label>
                                <Form.Control size="sm" name="password" onChange={this.handleChange.bind(this)} value={this.state.password} type="password" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="formBasicConfirmPassword">
                                <Form.Label>Подтвердите ваш пароль</Form.Label> 
                                <Form.Control size="sm" name="repassword" onChange={this.handleChange.bind(this)} value={this.state.repassword} type="password" placeholder="" />
                        </Form.Group>
                        <ButtonGroup>
                            <span onClick={this.handleRegister}>
                                <Button size="sm" variant="outline-warning">
                                Зарегистрироваться
                                </Button>
                            </span>
                            <Link to="/signin">
                                <Button size="sm" variant="outline-warning">Войти</Button>
                            </Link>
                            </ButtonGroup>
                        </Form>
                        </Col>
                    <Col></Col>
  </Row>
               {/* <input type="text" ref="phone" onChange={this.handleChange} value={this.state.phone} /> */}        
            </Container> 
        )
    }
}

export default RegistrationModal