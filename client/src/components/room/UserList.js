import React, { Component } from 'react';
import './UserList.css';

import userImg from '../img/user.png';
import masterImg from '../img/master.png';

/*
	props
		user
			index : order
			name : profile color
			todo : todoIndex
			list : []

			f
			(DB)
			hTodoIndex : todo Index change

*/

class UserList extends Component {

	
	render(){
		console.log(this.props.user);
		return(
			<ul>
				{this.props.user.map((u,i) => {
					const todoValue = u.list[u.todo]

					return <UserListLi key={i} index={i} name={u.name} todo={todoValue} hTodoIndex={this.props.hTodoIndex}/>
				})}
			</ul>
		)
	}
}



/*
	props
		index : order
		name : profile color 
		todo : todo
		
		f
		(DB)
		hTodoIndex : todo Index change
*/



class UserListLi extends Component {
	static defaultProps = {
		index : -1,
		name : "error",
		todo : "Nothing...",

		hTodoIndex : () => {
			return -1;
		} 
	}

	moveCheckBox = () => {
		//
		return 0;
	}

	checkBoxClick = () => {
		if(this.props.todo === "Nothing...")
			this.moveCheckBox();
		else
			this.props.hTodoIndex(this.props.todoIndex + 1);
	}


  render(){
		const liStyle = this.props.index !== 0
			? {borderTop : "black 2px solid"}
			: {borderTop : "none"}
		
		const profileStyle = {
			backgroundColor : this.props.name
		}

		return(
			<li style={liStyle}>
				<div className="profile" style={profileStyle}>{this.props.name}</div>
				<img src={this.props.index === 0 ? masterImg : userImg} />
				<span className="todo">{this.props.todo}</span>
				<div className="checkbox" onClick={this.checkBoxClick}> Check Box </div>
			</li>
		)
	}
}

export default UserList;