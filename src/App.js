import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
    pictureUrl : '',
    name: '',
    friends:[]

    };
  }

changePicture(value)
{
  this.setState( () =>
  {
    return{
      pictureUrl:value,
    }
  })
}
changeName(value){
  this.setState (() =>
  {
    return{
 name:value,
  }
})
}




  render() {
    return (
      <div >
        Picture:
      <input onChange = {event =>this.changePicture(event.target.value)}
      />
        {/* <input onChange = {event =>
  {
    const newValue = event.target.value;
    this.changeState(newValue);
  }}
    */}
        Name:
        <input onChange = {event =>this.changeName(event.target.value)}/>
        <button>
          Add Friend </button>
        <div> Current State: {JSON.stringify(this.state)}</div> 
      </div>
    );
  }
}

export default App;
