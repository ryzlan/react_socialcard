import React, { Component } from 'react';
class FilteredList extends Component {
    state = {  }
    render() { 
        return (
            <ul>
            {this.props.items.slice(0, 5).map((d,index)=>{
                return(<li key={index} onClick={()=>{this.props.selectOption(d)}} >{d}</li>)
            })}
            <li>and many more...</li>
            </ul>
          );
    }
}
 
export default FilteredList;