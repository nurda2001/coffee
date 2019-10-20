import React from 'react'
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import './jumbo.css';

class about extends React.Component{
    render(){
        return(
         <React.Fragment>
             <Jumbo fluid className="jumbo">
                 <div className="overlay"></div>
                 <Container>
                     <h1>Добро Пожаловать в ШайShake</h1>
                     <p>Just Drink it and relax </p>
                 </Container>
             </Jumbo>
         </React.Fragment>   
        )
    }
}

export default about