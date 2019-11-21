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
			{ this.props.user
				? this.state.focus === -1
					? <UserList user={this.props.user} setfocus={this.setfocus}/>
					: <TodoList index={this.state.focus} name={this.props.user[this.state.focus].name} todoIndex={this.props.user[this.state.focus].todo} list={this.props.user[this.state.focus].list}/>
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