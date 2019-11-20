import React, { Component } from 'react';
import UserList from './UserList';
import TodoList from './TodoList';

/*
	props
		user
*/


class Room extends Component {

	state = {
		focus : -1
	}

	setfocus = (index) => {
		this.setState({
			focus : index
		})
	}

	render(){
		return(
			<>
			{	this.state.focus === -1
				? this.props.user
					? <UserList user={this.props.user} setfocus={this.setfocus}/>
					: <UserList user={this.props.user} setfocus={this.setfocus}/>
				: <TodoList />
			}
			</>
		)
	}
}



export default Room;