import React from 'react'
import {Carousel} from 'react-bootstrap';
import './jumbo.css';

class about extends React.Component{
    render(){
        return(
         <React.Fragment>
             <Carousel>
  <Carousel.Item className="jumbo">
    <div className="overlay">
    <Carousel.Caption>
      <h2>ШайShake Family</h2>
      <p>Just Drink and Relax</p>
    </Carousel.Caption>
    </div>
  </Carousel.Item>
  <Carousel.Item className="jumbo">
  <div className="overlay">
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
    </div>
  </Carousel.Item>
  <Carousel.Item className="jumbo">
  <div className="overlay">
    <Carousel.Caption>
      <h2>ШайShake Family</h2>
    </Carousel.Caption>
    </div>
  </Carousel.Item>
</Carousel>
         </React.Fragment>   
        )
    }
}

export default about