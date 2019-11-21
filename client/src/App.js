import React, { Component } from 'react';
import Join from './components/join/Join';
import Room from './components/room/Room';
//import User from './components/User';

import {post} from 'axios';
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
    roomIndex : -1,
    roomName : -1,
    userId : -1,

    room : "'",
    joinRoom : '"'
  }

  roomJoin = (roomIndex, roomName, userId) => {
    //console.log("roomJoin!! -{ " + roomIndex, roomName, userId);

    this.setState({
      roomName : roomName,
      roomIndex : roomIndex,
      userId : userId
    });
    
  }

  /*
  stateRefresh(){

    this.setState({ room : "" });
    
    this.callApi()
      .then(res => this.setState({room : res}))
      .catch(err => console.log(err));
    
  }
  */
  //이거 이상함
  /*
  setRoomName = (name) => {
    console.log("setRoomName!!");
    let newRoomId = this.state.room.length;
    for(let i = 0; i < this.state.room.length; ++i){
      if(this.state.room.name === this.state.roomName) newRoomId = i;
    }
    this.setState({
      roomName : name,
      roomId : newRoomId
    });

  }
  */

  componentDidMount() {
    window.addEventListener('beforeunload', (event) => {

      if(this.state.roomName !== -1)
      this.roomExit()
        .then((response) => {
          console.log(response.data);
        });
      event.returnValue = "There is pending work. Sure you want to leave?";
    });

    this.callApi()
      .then(res => this.setState({room: res}))
      .catch(err => console.log(err));
    
  }

  callApi = async () => {
    const response = await fetch('/api/room');
    const body = await response.json();
    return body;
  };
  
  //이거 안댐
  /*
  componentWillUnmount() {
    console.log("componentWillUnmount!!");
    if(this.state.roomName !== -1)
      this.roomExit()
        .then((response) => {

          //this,
          console.log(response.data);

        });
    
  }
  */

  roomExit(){
		//console.log("post data!!");
		const url = "http://192.168.0.16:5000/api/room" + this.state.roomName;
		const data = {
			userId : this.state.userId
		};
		//console.log(data);
		return post(url, data);
	}
    
  

  render () {
    
    this.callApi()
      .then(res => this.setState({room: res}))
      .catch(err => console.log(err));
    //console.log("App render");
    //console.log("roomId " + this.state.roomIndex);
    return (
      <>
      <h1 className="title">To Do List</h1>
      <div className="mainView">
        { this.state.roomIndex === -1
          ? <Join room={this.state.room} roomJoin={this.roomJoin}/>
          : <Room user={ (this.state.roomIndex) in (this.state.room) ? this.state.room[this.state.roomIndex].user : ""}/>
        }
      </div>
      </>
    );
  }
}

export default App;