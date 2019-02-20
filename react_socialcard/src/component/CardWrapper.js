import React, { Component } from 'react';

import Card from './Card';

class CardWrapper extends Component {
    state = {  }
   
    render() { 
        return (<div className="card-wrapper">
        
            {this.props.items.map((img, index)=>(
                <Card key={index} img={img} />
            ))}
        </div> );
    }
}
 
export default CardWrapper;