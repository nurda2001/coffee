import React from 'react';
import {Form, Button, Container, Col, Row, Card, ButtonGroup, Nav, Image} from 'react-bootstrap'
import Axios from 'axios';
import Cookies from 'universal-cookie';
import {Redirect, Link} from 'react-router-dom'; 
class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state={
            login: "",
            password: "",
                isEmpty: (v) => !!v || 'Емайл быстроо',
                validate: (v) => /^\w+([\.-]?\w+)*@\w+(\.\w{2,3})+$/.test(v) || 'Неправильная Почта',
                 isRequired: (v) => !!v || 'Пароль нужен',
                 isLength: (v) => (v && v.length >= 6) || 'Пароль Слишком короткий - минимум 6 символов'
        }
    }

    validateEmail(){

    }

    handleChange(event){
        let a = {};
        a[event.target.name] = event.target.value;
        this.setState(a, () => {console.log(this.state)});
    }

    handleLogin(){
        if (this.state.login.length > 10 && this.state.password.length > 4) {
            Axios
                .post('http://10.200.1.10:3000/auth/login', {
                    phone: this.state.login,
                    password: this.state.password
                })
                .then((response) => {
                    let cook = new Cookies();
                    cook.set('auth-token', response.data.token);
                    this.props.setAuth(true);

                })
                .catch((err) => {
                    console.error(err);
                })
        }
    }

    render(){
        return(
            this.props.isAuth ? <Redirect to="/" /> :
           <React.Fragment>
              <Container >  
              <br />
                <Row>
                    <Col></Col  >
                        <Col xs={12} md={6}>
                        <Nav className="justify-content-center">
                        <Image width={180} src="https://firebasestorage.googleapis.com/v0/b/test-36f3c.appspot.com/o/LogoTr.png?alt=media&token=7085a6ce-8981-4913-b163-393f94f5d492"></Image>
                        </Nav>
                                 <Card.Header>Форма Входа</Card.Header> <Form>
                        <Form.Group controlId="formBasicPhone">
                            <br />
                            <Form.Label>Номер Телефона</Form.Label>
                            <Form.Control size="sm" name="login" onChange={this.handleChange} value={this.state.login} type="phone" placeholder=""/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Пароль</Form.Label>
                                <Form.Control size="sm" name="password"  onChange={this.handleChange} value={this.state.password} type="password" placeholder="" />
                        </Form.Group>
                        <ButtonGroup>
                        <Link to="/register"><Button size="sm" variant="outline-warning" >Зарегистрироваться</Button></Link>
                        <Button size="sm" variant="outline-warning">
                                    Войти
                        </Button>
                        </ButtonGroup>
                        </Form>
                      
                        </Col>
                        <Col></Col>
  </Row>
               {/* <input type="text" ref="phone" onChange={this.handleChange} value={this.state.phone} /> */}        
            </Container> 
           </React.Fragment>
              )
          }
          
    }

    export default SignUp 