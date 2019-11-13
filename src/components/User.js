import React, { Component } from 'react';
import './User.css'
import { NONAME } from 'dns';

class User extends Component{

	dynamicStyle = {
		userBox : {
			backgroundColor: "white",
			display : "none"
		},
		userlistbox : {
			display : "none"
		}
	}

	handleUserBoxClick = () => {
		console.log(this.props.index + " click");
		if(this.props.index !== this.props.focus)
			this.props.setfocus(this.props.index);
	}

	handleDynamicStyleSet = (focus) => {
		if(this.props.focus === this.props.index){
			console.log("색바뀜");
			this.dynamicStyle.userBox = {backgroundColor: "red"};
			this.dynamicStyle.userBox = {display: ""};
			this.dynamicStyle.userlistbox = {display: ""};
		}
		else{
			this.dynamicStyle.userBox = {backgroundColor: "white"};
			this.dynamicStyle.userBox = {display: "none"};
			this.dynamicStyle.userlistbox = {display: "none"};
		}

		if(this.props.focus === -1){
			this.dynamicStyle.userBox = {backgroundColor: "white"};
			this.dynamicStyle.userBox = {display: ""};
			this.dynamicStyle.userlistbox = {display: "none"};
		}
	}

	render(){
		//console.log(this.props.focus);
		//console.log(this.props.index);
		//console.log("확인중");
		this.handleDynamicStyleSet(this.props.focus);
		
		const userNameStyle = {
			backgroundColor : this.props.name
		}
		
		const userTodoString = 
			this.props.list[this.props.todo].length <= 24
			? this.props.list[this.props.todo]
			: this.props.list[this.props.todo].substr(0,21) + "..."

		return(
			<li className="userbox" onClick={this.handleUserBoxClick} style={this.dynamicStyle.userBox}>
				<div className="userid">({this.props.id})</div>
				<div className="username" style={userNameStyle}></div>
				<div className="usertodo">{this.props.todo + 1}. "{userTodoString}"</div>
				<UserListBox list={this.props.list} dynamicStyle={this.dynamicStyle} setfocus={this.props.setfocus}/>
			</li>
		)
	}
}

class UserListBox extends Component{

	escKeyUp = (event) => {
		if(event.keyCode === 27){
			console.log("ESC Press!!!");
			this.props.setfocus(-1);
		}		
	}

	handleUserListBoxUnclick = (event) => {
		console.log("back click!!")
		this.props.setfocus(-1);
		event.stopPropagation();
	}


	render(){
		return(
			<>
			<ul className="userlistbox" style={this.props.dynamicStyle.userlistbox} onKeyUp={this.escKeyUp} tabIndex="0" >
				----List----
				{this.props.list.map((l, i) => {
					return <UserList key={i} l={l}/>
				})}
			</ul>
			<div className="userlistboxback" style={this.props.dynamicStyle.userlistbox} onClick={this.handleUserListBoxUnclick}>
			</div>
			</>
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