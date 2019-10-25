import React from 'react';
import {Row, Col, Card, ListGroup, Spinner, InputGroup, FormControl, Button} from 'react-bootstrap';
import './Order.css'

export default class Order extends React.Component{

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
                            placeholder="Promo-Code"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                            <InputGroup.Text id="basic-addon2">Промо-Код</InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Prepend>
                            <InputGroup.Text>Описание<br />
                            </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl placeholder="(Местоположение, Кто учитель)" as="textarea" aria-label="With textarea" />
                        </InputGroup>
                        <br />
                        <Button className="BtnBig" variant="success">
                             Заказать
                        </Button>
                    
                        </Col>
                    <Col></Col>
                </Row>
            </React.Fragment>
        )
    }
}