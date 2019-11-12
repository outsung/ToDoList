import React, { Component } from 'react';
import './User.css'

class User extends Component{
	render(){
		const userNameStyle = {
			backgroundColor : this.props.name
		}
		
		const userTodoString = 
			this.props.list[this.props.todo].length <= 24
			? this.props.list[this.props.todo]
			: this.props.list[this.props.todo].substr(0,21) + "..."

		return(
			<li className="userbox">
				<div className="userid">({this.props.id})</div>
				<div className="username" style={userNameStyle}></div>
				<div className="usertodo">{this.props.todo + 1}. "{userTodoString}"</div>
				<UserListBox list={this.props.list}/>
			</li>
		)
	}
}

class UserListBox extends Component{
	static defaultProps = {
		list : ["...",]
	}
	
	render(){
		return(
			<ul className="userlistbox">
				----List----
				{this.props.list.map((l, i) => {
					return <UserList key={i} l={l}/>
				})}
			</ul>
		)
	}
}

class UserList extends Component{
	render(){
		return(
			<li>
				{this.props.l}
			</li>
		)
	}
}



export default User;