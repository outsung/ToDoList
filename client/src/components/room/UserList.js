import React, { Component } from 'react';
import './UserList.css';

/*
	props
		index : order
		name : profile color 
		todo : todo
		
		f
		(DB)
		hTodoIndex : todo Index change
*/

class UserList extends Component {
	static defaultProps = {
		index : -1,
		name : "error",
		todo : "error",

		fTodoIndex : () => {
			return -1;
		} 
	}

	moveCheckBox = () => {
		//
		return 0;
	}

	checkBoxClick = () => {
		if(this.props.todo === "Nothing..")
			moveCheckBox();
		else
			this.props.hTodoIndex(this.props + 1);
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