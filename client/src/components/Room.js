import React, { Component } from 'react';
import './Room.css'
import User from './User';

/*
import UserList from './room/UserList';
import TodoList from './room/TodoList';
*/


/*
Loding -> userList -> userToDoList
<RoomLoding/>


<userList>
	..scroll : static scroll value
	index : order value
	<li>
		name : profile color
		todo : todo

		----function----
		hTodoIndex : todoIndex++

	----function----
	hIndex : 
	hTodoIndex : todoIndex value change



<userToDoList>
	focus : -1 ~ index
	list : todolist
	todo : todoIndex

	----function----
	hTodo : todoIndex value change
	hAdd : list.add
	hDel : list.del


*/

/*
class Room extends Component {
	
	static defaultProps = {
		user = ["error"]
	}


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
				? <UserList />
				: <TodoList />
			}
			</>
		)
	}
}
*/


class Room extends Component {
	state = {
		focus : -1
	}

	setfocus = (index) => {
		console.log("focus change : "+ index)
		this.setState({
			focus : index
		})
	}

	render(){
		return(
			<div className="roomview">
			{ this.props.user
				?<ul className="room" style={this.state.focus === -1 ? {overflowY : "scroll"} : {overflowY : "hidden"}} >
					{this.props.user.map((u, i) => {
						return(
							<React.Fragment key={u.index}>
							{
								0 !== i && <div className="line"></div>
							}
							<User id={u.id} index={u.index} focus={this.state.focus} setfocus={this.setfocus}
										name={u.name} todo={u.todo} list={u.list}/>
							</React.Fragment >
						)
					})}
				</ul>
				:<RoomLoding/>
			}
			</div>
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