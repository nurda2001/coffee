import React from 'react';
import {Row, Col, Card, ListGroup, Spinner, InputGroup, FormControl, Button} from 'react-bootstrap';
import './Order.css'
import Axios from 'axios';
import Cookies from 'universal-cookie';

export default class Order extends React.Component{

    constructor(props){
        super(props);

        this.handleChangePromo = this.handleChangePromo.bind(this);
        this.handleChangeDesc = this.handleChangeDesc.bind(this);
        this.handleOrder = this.handleOrder.bind(this);

        this.state = {
            promo: "",
            description: ""
        }
    }

    handleChangePromo(el){
        this.setState({
            promo: el.target.value
        });
    }

    handleChangeDesc(el){
        this.setState({
            description: el.target.value
        });
    }

    handleOrder(){
        if (this.state.description.split(' ').length >= 3){

            let cook = new Cookies();

            Axios.post('http://172.20.10.12:3000/order', {
                description: this.state.description,
                basket: this.props.basketItems,
                promoCode: this.state.promo
            }, {
                headers: {
                    "auth-token": cook.get("auth-token")
                }
            }).then((response) => {
                this.props.setMyOrders(response.data.orders);
                this.props.history.push("/myorders")
            }).catch((err) => {
                console.log(err);
            });
        }
    }

    render(){
        return(
            <React.Fragment>
                <br />
                <Row>
                    <Col></Col>
                <Col xs={12} md={4}>
                    
                        <Card.Header>Ваш Заказ</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>{
                            this.props.basketItems.length >0 ? this.props.basketItems.map((item, index) => {
                                return <h6 key = {index} item={item}>{item.name}--- {item.price} Тенге <hr /></h6>
                            }) : <Spinner animation="border" variant="warning" />
                        }
                        </ListGroup.Item>
                        </ListGroup>
                        <InputGroup className="mb-3">
                            <FormControl 
                            onChange={this.handleChangePromo}
                            placeholder="Promo-Code"
                            value={this.state.promo}
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                            <InputGroup.Text  id="basic-addon2">Промо-Код</InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Prepend>
                            <InputGroup.Text>Описание<br />
                            </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl 
                                placeholder="(Местоположение, Кто учитель)"
                                onChange={this.handleChangeDesc}
                                value={this.state.description}
                                as="textarea"
                                aria-label="With textarea" />
                        </InputGroup>
                        <br />
                        <Button onClick={this.handleOrder} className="BtnBig" variant="success">
                             Заказать
                        </Button>
                    
                        </Col>
                    <Col></Col>
                </Row>
            </React.Fragment>
        )
    }
}