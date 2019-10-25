import React from 'react';
import {Link} from 'react-router-dom'
import {Button, Modal, Nav, Image} from 'react-bootstrap';
import './Basket.css';

export default class Basket extends React.Component{
    constructor(props){
        super(props);

        this.openClose = this.openClose.bind(this);

        this.state = {
            show: false
        }
    }

    openClose(){
        this.setState({
            show: !this.state.show
        });
    }
    render(){
        let sum = 0;
        for(let i = 0; i< this.props.basketItems.length; i++){
            sum = this.props.basketItems[i].price + sum;
        }
        return(
            <div className="FixingIt">
                <br />
                <Button variant="warning" onClick={this.openClose} fixed="top">
                     <Image src="https://firebasestorage.googleapis.com/v0/b/test-36f3c.appspot.com/o/add-to-basket.png?alt=media&token=302423f0-ad4c-4cd9-a540-88609b437b9e"></Image>
                </Button>

                <Modal show={this.state.show} onHide={this.openClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Ваши Заказы</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{
                            this.props.basketItems ? this.props.basketItems.map((item, index) => {
                                return <h6 key = {index} item={item}>{item.name}--- {item.price} Тенге <hr /></h6>
                            }) : "loader"
                        }
                        <h5>Общее Количество : {Object.keys(this.props.basketItems).length}</h5>
                        <h5>Общая Сумма : {sum} Тенге </h5></Modal.Body>
                    <Modal.Footer>
                        <Nav className="mr-auto">
                        <Button variant="danger" onClick={() => {this.props.clearBasket(); this.openClose()}} >
                            Очистить
                        </Button>
                        </Nav>
                        {this.props.basketItems.length > 0 ? 
                        <Link to="/order">
                        <Button  variant="success" onClick={() =>{this.openClose()}}>
                             Заказать
                        </Button>
                        </Link> : null}
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}