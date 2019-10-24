import React from 'react';
import CardHolder from '../Cards/CardHolder';
import Jumbo from '../Jumbo/Jumbotron';
class home extends React.Component{
    render(){
        return(
         <React.Fragment>
                <Jumbo />
                <br />
                {
                    this.props.menuItems ? this.props.menuItems.map((item, index) => {
                        return <CardHolder key = {index} item={item} />;
                    }) : "loader"
                }
                <br />
         </React.Fragment>   
        )
    }
}

export default home