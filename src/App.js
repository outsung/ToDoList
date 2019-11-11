import React, { Component } from 'react';
import Join from './components/Join';
import Room from './components/Room';
import User from './components/User';
import './App.css';

/*
const join = {
  room : "study",
  password : "234215"
}
*/

class App extends Component {
	
  render () {
    return (
      <div>
        <Room/>
      </div>
    );
  }
}

export default App;
