import React from 'react'
import {Container, Col, Row, Card, Button} from 'react-bootstrap'
import './about.css'
class About extends React.Component{
    render(){
        return(
         <React.Fragment>
             <Container>
                 <br />
                <Row>
                    <Col>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" 
                     src="https://www.sizzapp.com/themes/sizzapp/assets/images/sizzapp-just-logo-white2x-339x338.png" roundedCircle />
                        <Card.Body>
                            <Card.Title>Маралов Нурдаулет</Card.Title>
                            <Card.Text>
                            Тут Какой нибудь текст
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" 
                     src="https://www.sizzapp.com/themes/sizzapp/assets/images/sizzapp-just-logo-white2x-339x338.png" roundedCircle />
                        <Card.Body>
                            <Card.Title>Амангали Мирас</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" 
                     src="https://www.sizzapp.com/themes/sizzapp/assets/images/sizzapp-just-logo-white2x-339x338.png" roundedCircle />
                        <Card.Body>
                            <Card.Title>Амангали Куаныш</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" 
                     src="https://www.sizzapp.com/themes/sizzapp/assets/images/sizzapp-just-logo-white2x-339x338.png" roundedCircle />
                        <Card.Body>
                            <Card.Title>Капаров Сунгат</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
         </React.Fragment>   
        )
    }
}

export default About    