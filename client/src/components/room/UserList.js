import React, { Component } from 'react';
import './UserList.css';

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
		return(
			<ul>
				{this.props.user.map((u) => {
					const todoValue = u.list[u.todo]

					return <UserListLi key={u.index} index={u.index} name={this.props.name} todo={todoValue} hTodoIndex={this.props.hTodoIndex}/>
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
		todo : "error",

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
		const liStyle = this.props.index !== 1
			? {borderTop : "black 2px solid"}
			: {borderTop : "none"}
		
		const profileStyle = {
			backgoundColor : this.props.name
		}

		return(
			<li style={liStyle}>
				<div className="profile" style={profileStyle}></div>
				<img src={this.props.index === 0 ? "../img/master.png" : "../img/user.png"} />
				<span className="todo">{this.props.todo}</span>
				<div className="checkbox" onClick={this.checkBoxClick}></div>
			</li>
		)
	}
}

export default UserList;