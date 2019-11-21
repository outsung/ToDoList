import React, { Component } from 'react';
import './UserList.css';

import userImg from '../img/user.png';
import masterImg from '../img/master.png';

/*
	props
		roomName
		user
			id : id
			name : profile color
			todo : todoIndex
			list : []

		f
		(DB)
		setTodoIndex : todo Index change

		setfocus

*/

class UserList extends Component {

	
	render(){
		//console.log(this.props.user);
		return(
			<ul className="userlist">
				{this.props.user.map((u,i) => {
					const todoValue = u.list[u.todo]

					return <UserListLi key={i} index={i} id={u.id} name={u.name} todoIndex={u.todo} todo={todoValue} roomName={this.props.roomName} setfocus={this.props.setfocus}
										setTodoIndex={this.props.setTodoIndex}/>
				})}
			</ul>
		)
	}
}



/*
	props
		roomName
		id : id
		index : order
		name : profile color 
		todo : todo
		todoIndex : todoIndex
		
		f
		(DB)
		setTodoIndex : todo Index change
		
		setfocus : set focus
*/



class UserListLi extends Component {
	static defaultProps = {
		index : -1,
		name : "error",
		todo : "Nothing...",

		setTodoIndex : () => {
			return -1;
		} 
	}


	moveCheckBox = () => {
		//
		//console.log("우웅우웅");
		return 0;
	}

	checkBoxClick = (event) => {
		event.stopPropagation();
		if(this.props.todo === "Nothing...")
			this.moveCheckBox();
		else
			this.props.setTodoIndex(this.props.roomName, this.props.id, this.props.todoIndex + 1);
	}


	liOnClick = () => {
		this.props.setfocus(this.props.index);
	}



  render(){
		const liStyle = this.props.index !== 0
			? {borderTop : "black 2px solid"}
			: {borderTop : "none"}
		
		const profileStyle = {
			backgroundColor : this.props.name
		}

		return(
			<li className="userlistli" style={liStyle} onClick={this.liOnClick}>
				<div className="profile" style={profileStyle}></div>
				<img src={this.props.index === 0 ? masterImg : userImg} alt={this.props.index === 0 ? "user" : "master"}/>
				<span className="todo">{this.props.todoIndex + 1}.{this.props.todo}</span>
				<div className="checkbox" onClick={this.checkBoxClick}></div>
			</li>
		)
	}
}

export default UserList;