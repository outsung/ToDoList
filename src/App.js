import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    hello : "app js is not happy",
    count : 0
  };

  stateUp = () => {
    if(this.state.count > 10)
      this.setState({
        hello : "app js is happy",
        count : this.state.count + 1
      })
    else
      this.setState({
        hello : "app js is not happy",
        count : this.state.count + 1
      })
  };


  render () {
    return (
      <div className="App">
        <h3>--index props--</h3>
        <div className="props">
          {/*props*/}
          <span>{this.props.message}</span>
        </div>

        <h3>--State--</h3>
        <div className="state">
          {/*state*/}
          {this.state.count}
          <button onClick={this.stateUp}> Count Up </button>
        </div>

        <h3>--App Props--</h3>
        <div className="inside-app-props">
          <InsideApp
            count={this.state.count}
            stateUp={this.stateUp}
          />
        </div>

      </div>
    );
  }
}


class InsideApp extends Component {
  render(){
    return (
      <div className="gray-backgound">
        {this.props.count}
        <button onClick={this.props.stateUp}> Count Up </button>
      </div>
    );
  }
}


export default App;
