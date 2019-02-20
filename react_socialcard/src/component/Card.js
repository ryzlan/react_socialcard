import React, { Component } from 'react';
class Card extends Component {
    state = {  }
    render() { 
        //console.log(this.props.img);
        
        return ( <div className="card">
        <img src={this.props.img} alt="chow" />
        </div> );
    }
}
 
export default Card;