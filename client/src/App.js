import React, { Component } from 'react';
import Join from './components/Join';
import Room from './components/Room';
import User from './components/User';
import './App.css';


class App extends Component {
  state = {
    roomId : 0,
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
  }

  render () {
    this.componentDidMount();
    console.log("하이");
    return (
      <>
      <h1 className="title">To Do List</h1>
      <div className="view">
        
        <Room user={
          this.state.room ? this.state.room[this.state.roomId].user : '"'
        }/>
      </div>
      </>
    );
  }
}

export default App;
