import React from 'react';
import Axios from 'axios';
import {Form, Button, Container} from 'react-bootstrap'
import './modalReg.css';

class RegistrationModal extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            phone: ""
        }
    }

    handleChange(){
        this.setState({ phone: this.refs.phone.value});
    }

    // register(){
    //     Axios.post('/register', {}).then((data) => {}).catch((err) => {});
    // }

    render(){
        return(
           <Container>
                
               {/* <input type="text" ref="phone" onChange={this.handleChange} value={this.state.phone} /> */}
                    <Form>
                        <Form.Group controlId="formBasicPhone">
                            <Form.Label>Номер Телефона</Form.Label>
                            <Form.Control type="phone" placeholder="+77071687428" />
                            <Form.Text className="text-muted">
                                We'll never share your phone Num with anyone else ^_^.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Ваше Имя</Form.Label>
                            <Form.Control type="text" placeholder="Nurda" />
                            <Form.Text className="text-muted">
                        
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Пароль</Form.Label>
                                <Form.Control type="password" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="formBasicConfirmPassword">
                                <Form.Label>Подтвердите ваш пароль</Form.Label> 
                                <Form.Control type="password" placeholder="" />
                        </Form.Group>
                        <Button variant="outline-warning" type="submit">
                                    Зарегаться
                        </Button>
                    </Form>
                    
            </Container> 
        )
    }
}

export default RegistrationModal