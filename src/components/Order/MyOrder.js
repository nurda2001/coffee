import React from 'react';
import {Card, Row, Col, CardDeck} from 'react-bootstrap'

export default class MyOrder extends React.Component{
    constructor(props){
        super(props);
        this.state={
            myOrders:[
                {id: 1, description: 'C1-243L Teacher Someone as you can see', promo: 'ShaiShakea', name: 'Cappuchino', price: '500' }
            ]
        }
    }
    render(){
        return(
            <React.Fragment>
                <Row>
                    <Col xs={12} md={6}>
                    <CardDeck> 
                    <Card>
                            <Card.Body>
                                <Card.Title></Card.Title>
                            </Card.Body>
                    </Card>
                </CardDeck>       
                    </Col>
                    <Col xs={12} md={6}></Col>
                </Row>
            </React.Fragment>
        )
    }
}