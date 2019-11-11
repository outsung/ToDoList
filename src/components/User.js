import React, { Component } from 'react';

class User extends Component{
	render(){
		return(
			<li>
				<div>{this.props.name}</div>
				<span>{this.props.todolist}</span>
				<UserFocue todolist={this.props.todolist}/>
			</li>
		)
	}
}

class UserFocue extends Component{
	render(){
		return(
			<div>
				<ul>
					{this.props.todolist}
				</ul>
			</div>
		)
	}
}


export default User;