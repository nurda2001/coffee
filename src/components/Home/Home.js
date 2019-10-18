import React from 'react';
import CardHolder from '../Cards/CardHolder'
class home extends React.Component{
    render(){
        return(
         <React.Fragment style={{display: 'flex', flexDirection: 'row'}}>
                <CardHolder />
         </React.Fragment>   
        )
    }
}

export default home