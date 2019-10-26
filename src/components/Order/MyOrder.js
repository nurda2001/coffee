import React from 'react';
import {Card, Row, Col, ListGroup} from 'react-bootstrap'
import Axios from 'axios';
import Cookies from 'universal-cookie'

export default class MyOrder extends React.Component{
    constructor(props){
        super(props);
        this.state={
            myOrders:[
                {id: 1, description: 'C1-243L Teacher Someone as you can see', promo: 'ShaiShakea', name: 'Cappuchino', price: '500' }
            ]
        }
    }
    componentDidMount(){
        if (this.props.myOrders.length === 0) {
        let cook = new Cookies();
         Axios.get('http://172.20.10.12:3000/order/my',  {
            headers: {
                "auth-token": cook.get("auth-token")
            }
         }).then((response) =>{
             this.props.setMyOrders(response.data.orders)
         })
        }
    }
    render(){
        return(
            <React.Fragment>
                <Row>
                    <Col xs={12} md={6}>
                    {this.props.myOrders.map((item, index) =>{
                        let dt = new Date(parseInt(item.orderTime));
                        dt = dt.getDate() + ':' + (dt.getMonth() + 1) + ":" + dt.getFullYear() + ' ' + dt.getHours() + ":" + dt.getMinutes();
                        
                        return <Card key={item.id}> 
                                <Card.Header>
                                    Номер Заказа: {item.id} - Время Заказа : {dt}
                                </Card.Header>
                                <ListGroup variant="flush">
                                    {item.items.map((i, ind) => {
                                         return <ListGroup.Item key={i.id + i.name}>
                                             {i.name}                       
                                         </ListGroup.Item>
                                    })} 
                                </ListGroup>
                                </Card>
                    })}
                    </Col>
                    <Col xs={12} md={6}></Col>
                </Row>
            </React.Fragment>
        )
    }
}