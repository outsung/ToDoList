import React, { Component } from 'react';
import Join from './components/Join';
import Room from './components/Room';
import User from './components/User';
import './App.css';

const room = [
  {
    id : 0,
    name : "test",
    password : "123",
    user : [
      {
      id : 0,
      index : 0,
      name : "#ff6666",
      todo : 0,
      list : [
        "id : 0",
        "index : 0",
        "name : '#ff666'",
        "todo : 0",
        "list : []"
      ]
      },
      {
        id : 3,
        index : 3,
        name : "#321332",
        todo : 1,
        list : [
          "id : 3",
          "index : 3",
          "name : '#321332'",
          "todo : 1",
          "list : []"
        ]
      },
      {
        id : 5,
        index : 2,
        name : "#c2c2c2",
        todo : 2,
        list : [
          "id : 5",
          "index : 2",
          "abcdefgfijklmnopqrstuvwxyz",
          "todo : 2",
          "list : []"
        ]
      },
      {
        id : 3,
        index : 4,
        name : "#321332",
        todo : 1,
        list : [
          "id : 3",
          "index : 3",
          "name : '#321332'",
          "todo : 1",
          "list : []"
        ]
      },
      {
        id : 3,
        index : 5,
        name : "#321332",
        todo : 1,
        list : [
          "id : 3",
          "index : 3",
          "name : '#321332'",
          "todo : 1",
          "list : []"
        ]
      },
      {
        id : 3,
        index : 6,
        name : "#321332",
        todo : 1,
        list : [
          "id : 3",
          "index : 3",
          "name : '#321332'",
          "todo : 1",
          "list : []"
        ]
      },
      {
        id : 3,
        index : 7,
        name : "#321332",
        todo : 1,
        list : [
          "id : 3",
          "index : 3",
          "name : '#3213321313121'",
          "todo : 1",
          "list : []"
        ]
      }
    ]
  }
]


class App extends Component {
  state = {
    roomId : 0
  }

  render () {
    return (
      <>
      <h1 className="title">To Do List</h1>
      <div className="view">
        
        <Room user={room[this.state.roomId].user}/>
      </div>
      </>
    );
  }
}

export default App;
