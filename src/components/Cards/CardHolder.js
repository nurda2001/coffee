import React from 'react';
import {Button, Card, CardDeck } from 'react-bootstrap';
import './CardsHolder.css'
class CardHolder extends React.Component{
    render(){
        return(
                <CardDeck> 
                    <Card xs={6}style={{ width: '16rem'}}>
                        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG" />
                            <Card.Body>
                                <Card.Title>{this.props.item.name} - {this.props.item.price} Тенге</Card.Title>
                                <br />
                                    <Button className="StaticButton" variant="outline-warning" onClick={() => this.props.addToBasket(this.props.item)}>Добавить В Корзину</Button>
                                   
                            </Card.Body>
                    </Card>
                </CardDeck>                  
        )
    }
}
export default CardHolder