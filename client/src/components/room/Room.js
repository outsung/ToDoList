import React, { Component } from 'react';
import UserList from './UserList';
import TodoList from './TodoList';

import './Room.css';


/*
	props
		roomName
		user

		f
		(DB)
		setTodoIndex : todo Index change
		addTodoList : todo list add
*/


class Room extends Component {

	state = {
		focus : -1
	}

	setfocus = (index) => {
		console.log("set Focus { " + index);
		this.setState({
			focus : index
		});
	}

	render(){
		const user = this.props.user;
		const focus = this.state.focus;
		return(
			<>
			{ user
				? focus === -1
					? <UserList user={user} roomName={this.props.roomName} setfocus={this.setfocus} setTodoIndex={this.props.setTodoIndex}/>
					: user[focus] 
						? <TodoList index={focus} name={user[focus].name} roomName={this.props.roomName} id={user[focus].id} setfocus={this.setfocus}
									todoIndex={user[focus].todo} list={user[focus].list}
									setTodoIndex={this.props.setTodoIndex} addTodoList={this.props.addTodoList}/>
						: <UserList user={user} roomName={this.props.roomName} setfocus={this.setfocus} setTodoIndex={this.props.setTodoIndex}/>
				: <RoomLoding />
			}
			</>
		)
	}
}

class RoomLoding extends Component {
	render(){
		return(
			<div className="roomloding">
				<div className="loding"></div>
			</div>
		)
	}
}


export default Room;