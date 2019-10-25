import React from 'react';
import CardHolder from '../Cards/CardHolder';
import Jumbo from '../Jumbo/Jumbotron';
import {CardDeck} from 'react-bootstrap';
import './home.css';
class Home extends React.Component{
    render(){
        return(
         <React.Fragment>
                <Jumbo />
                <CardDeck>
                    <div className="cards-list">
                        {
                            this.props.menuItems ? this.props.menuItems.map((item, index) => {
                                return <CardHolder addToBasket={this.props.addToBasket} key = {index} item={item} /> ;
                            }) : "loader"
                        }
                    </div>
                </CardDeck>
                <br />
         </React.Fragment>   
        )
    }
}

export default Home