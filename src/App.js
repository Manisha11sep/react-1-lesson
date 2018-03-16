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
addFriend(){
  const newFriend = {
    pictureUrl : this.state.pictureUrl,
    name: this.state.name,
  };
  const newFriendsList = this.state.friends.slice();
  newFriendsList.push(newFriend);
  this.setState(() =>{
return {
  friends: newFriendsList,
  pictureUrl :'',
  name :''
}
} );
}



  render() {
    return (
      <div >
        Picture:
      <input onChange = {event =>this.changePicture(event.target.value)}
      value = {this.state.pictureUrl}
      />
        {/* <input onChange = {event =>
  {
    const newValue = event.target.value;
    this.changeState(newValue);
  }}
    */}
        Name:
        <input onChange = {event =>this.changeName(event.target.value)}
        value ={this.state.name}
        />

        <button onClick ={event=>this.addFriend()} >
          Add Friend </button>
        <div>{
          this.state.friends.map(friends => <div><img className ="thumnail" src={friends.pictureUrl} />
          {friends.name}
           </div> )
        }</div>



        <div> Current State: {JSON.stringify(this.state)}</div> 
      </div>
    );
  }
}

export default App;
