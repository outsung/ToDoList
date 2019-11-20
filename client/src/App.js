import React, { Component } from 'react';
import Join from './components/join/Join';
import Room from './components/Room';
import User from './components/User';
import './App.css';

/*
---json---

room
  id
  name
  password
  userCount
  user
    id
    index
    name
    todo
    list


title
join & room

*/


/*
---state---
room : room value

roomId : joied room Id

roomName : input Id
roomPassword : input Password


<Join/>
  room : room valus

  roomName : room 
  roomPassword

  ----function----
  compare : room
  
    dbAdd : DB Add


  hRoomName : roomName value change
  hRoomPassword : roomPassword value change

  hRoomId : roomId value change (it's mean room join)

<Room/>
  user : room.user



*/


class App extends Component {
  state = {
    roomId : -1,
    roomName : -1,
    userId : -1,

    room : [],
    joinRoom : '"'
  }

  setRoomName = (name) => {
    let newRoomId = this.state.room.length;
    for(let i = 0; i < this.state.room.length; ++i){
      if(this.state.room.name === this.state.roomName) newRoomId = i;
    }
    this.setState({
      roomName : name,
      roomId : newRoomId
    });
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({room: res}))
      .catch(err => console.log(err));
  }
    
  callApi = async () => {
    const response = await fetch('/api/room');
    const body = await response.json();
    return body;
  };
    

  render () {
    console.log("App render");
    console.log(this.state.room);
    console.log(this.state.roomId);
    return (
      <>
      <h1 className="title">To Do List</h1>
      <div className="mainView">
        { this.state.roomId === -1
          ? <Join setRoomName={this.setRoomName}/>
          : <Room user={ this.state.room === [] ? this.state.room[this.state.roomId].user : [] }/>
        }
      </div>
      </>
    );
  }
}

export default App;
