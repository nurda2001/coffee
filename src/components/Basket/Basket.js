import React from 'react';
import {Button, Modal, Nav} from 'react-bootstrap';

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
        return(
            <div>
                <Button variant="primary" onClick={this.openClose} fixed="top">
                     Баскет
                </Button>

                <Modal show={this.state.show} onHide={this.openClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Ваши Заказы</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Кофе Эспрессо</Modal.Body>
                    <Modal.Footer>
                        <Nav className="mr-auto">
                        <Button variant="danger" onClick={this.openClose}>
                            Очистить
                        </Button>
                        </Nav>
                        <Button variant="success" onClick={this.openClose}>
                             Заказать
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}