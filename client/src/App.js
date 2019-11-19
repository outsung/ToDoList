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
    userId : -1,

    room : '"'
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
    return (
      <>
      <h1 className="title">To Do List</h1>
      <div className="mainView">
        { this.state.roomId === -1
          ? <Join/>
          : <Room user={ this.state.room ? this.state.room[this.state.roomId].user : '"' }/>
        }
      </div>
      </>
    );
  }
}

export default App;
