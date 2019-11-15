import React, { Component } from 'react';
import './UserList.css';

/*
	props
		name : profile color
		todoIndex : todoIndex
		list : todo list
		
		f
		(DB)
		hTodoIndex : todo Index change
		hListAdd : todo list Add
		hListDel : todo list Del

		hFocus : focus change

*/

class UserList extends Component {

	render(){
		return(
			<>
				<div className="profile">		
				</div>
				<ul className="todolist">
					<li></li>
				</ul>
			</>
		)
	}
}

export default UserList;