import React, { Component } from 'react';

import FilteredList from './FilteredList';

class InputQuery extends Component {
    state = { 
        query:"",
        filtered:[]
     }
     componentDidMount() {
        this.setState({
          filtered: this.props.breeds
        });
      }
      
      componentWillReceiveProps(nextProps) {
        this.setState({
          filtered: nextProps.breeds
        });
      }


handleSubmit=(e)=>{
e.preventDefault();
this.props.handleQuery(this.state.query);

this.setState({
    query:''
})
}

handleChange=(e)=>{
    let {name, value} = e.target;
    this.setState({
        [name]:value
    });

    let currentList = [];
    let newList = [];
    if (e.target.value !== "") {
      currentList = this.props.breeds;
      newList = currentList.filter(item => {
        const lc = item.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
            // If the search bar is empty, set newList to original task list
      newList = [];
    }
        
    this.setState({
      filtered: newList
    });
  }
  selectOption=(query)=>{
      this.setState({
          query:query
      });
      this.props.selectOption(query)
  }

    render() {
        return (<form onSubmit={this.handleSubmit}>
            <input className="search__input"
            type="text" 
            placeholder="Search for a Doggo breed ..."
            name="query"
            onChange={this.handleChange}
            value={this.state.query}
            />
            <FilteredList items={this.state.filtered}  
            selectOption ={this.selectOption}/>
        </form>);
    }
}
 
export default InputQuery;