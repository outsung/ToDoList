import React, { Component } from 'react';
import './User.css'

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
			//console.log("색바뀜");
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
				{/*<div className="userid">({this.props.id})</div>
				*/}
				<div className="username" style={userNameStyle}></div>
				<div className="usertodo">{this.props.todo + 1}. "{userTodoString}"</div>
				<UserListBox todo={this.props.todo} name={this.props.name} list={this.props.list} dynamicStyle={this.dynamicStyle} setfocus={this.props.setfocus}/>
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
		const userNameStyle = {
			backgroundColor : this.props.name
		}
		const userListLength = this.props.list.length;
		return(
			<>
			<ul className="userlistbox" style={this.props.dynamicStyle.userlistbox} onKeyUp={this.escKeyUp} tabIndex="0" >
				<div className="userlistname" style={userNameStyle}></div>
				<ul className="userlistscroll">
					{this.props.list.map((l, i) => {
						return <UserList key={i} l={l} length={userListLength} i={i} todo={this.props.todo}/>
					})}
				</ul>
			</ul>
			<div className="userlistboxback" style={this.props.dynamicStyle.userlistbox} onClick={this.handleUserListBoxUnclick}>
			</div>
			</>
		)
	}
}

class UserList extends Component{
	render(){
		const liStyle = {
			width : "100%",
			marginTop: "10px",
			borderTop: "black 2px solid"
		}

		if(this.props.i !== 0)
			liStyle.borderTop = "black 2px solid";
		else
			liStyle.borderTop = "none";

		const sapnStyle = {
			befor : {
				fontSize : "30px",
				textDecoration : "line-through",
				textDecorationColor : "red"
			},
			after : {
				fontSize : "30px",
				textDecoration : "none"
			}
		}

		return(
			<li style={liStyle}>
				{this.props.todo > this.props.i
					?<span style={sapnStyle.befor}>{this.props.l}</span>
					:<span style={sapnStyle.after}>{this.props.l}</span>
				}
			</li>
		)
	}
}



export default User;