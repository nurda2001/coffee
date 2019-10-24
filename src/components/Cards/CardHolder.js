import React from 'react';
import {Container, Button, Card } from 'react-bootstrap';

class CardHolder extends React.Component{
    addToBasket(){
        alert("help")
    }
    render(){
        return(
            <Container >
                    <Card style={{ width: '18rem'}}>
                        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG" />
                            <Card.Body>
                                <Card.Title>{this.props.item.name} - {this.props.item.price} Тенге</Card.Title>
                                    <Button variant="outline-warning" onClick="addToBasket">Добавить Корзину</Button>
                            </Card.Body>
                    </Card>                   
            </Container> 
        )
    }
}
export default CardHolder