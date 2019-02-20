import React, { Component } from 'react';


import InputQuery from './component/InputQuery';
import CardWrapper from './component/CardWrapper';

class App extends Component {
  state={
    isloaded:false,
    items:[],
    breeds:[],
    error:false,
    error_obj:null,
    query:'husky'
  }
componentDidMount(){
 this.performSearch() ;

}

performSearch=(query = this.state.query)=>{
  this.setState({
    query:query,
    isloaded:true
  })
  
  fetch(`https://dog.ceo/api/breed/${query}/images/random/9`)
  .then(res=> res.json())
  .then((result)=>{
   

    if(result.status === 'error'){
      this.setState({
        isloaded:true,
        error:true,
        error_obj:result
      })
    }
    if(result.status === 'success'){
      this.setState({
        isloaded:true,
        items:result.message,
        error:false
      })
    }
    
  })
  fetch(`https://dog.ceo/api/breeds/list/all`)
  .then(res=> res.json())
  .then((result)=>{
    if(result.status === 'error'){
      
      this.setState({
        isloaded:true,
        error:true,
        error_obj:result
      })
    }
    if(result.status === 'success'){
      this.setState({
        isloaded:true,
        breeds:Object.keys(result.message),
        error:false
      })
    }
    
  })
}

selectOption=(query)=>{
  this.setState({
      query:query
  });
  this.performSearch(query)

}


renderContent=(error, isloaded ,items)=>{
  if(error){
    return <h1>AN Error Occured :{this.state.error_obj.message} <span>{this.state.error_obj.code}</span> </h1>
  }else if(!isloaded){
   return <h1>Loading... </h1>
  }
  else{
       return  <CardWrapper items={this.state.items} />    
  }
}

render() {
    const {error, isloaded , items }= this.state;
        return (
            <div className="container">
            <h2>A React App to search dog breeds</h2>
            <div className="search__container">
            <InputQuery 
              handleQuery={this.performSearch}
              breeds={this.state.breeds}
              selectOption ={this.selectOption}
              />
            </div>
            <h1>Searched for:  {this.state.query}</h1>
            {this.renderContent(error,isloaded,items)}
      </div>
    );
  }
}


export default App;
