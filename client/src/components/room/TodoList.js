import React, { Component } from 'react';
import './TodoList.css';

import userImg from '../img/user.png';
import masterImg from '../img/master.png';

/*
	props
		roomName : roomName
		id : id


		index : order
		name : profile color
		todoIndex : todoIndex
		list : todo list
		
		f
		(DB)
		setTodoIndex : todo Index change 
		addTodoList : todo list Add
		...
		hListDel : todo list Del
		hListCha : todo list change


		setfocus : focus change

*/

class TodoList extends Component {

	static defaultProps = {
		index : -1,
		name : "error",
		todoIndex : -1,
		list : [],

		setTodoIndex : () => {
			return -1
		},
		addTodoList :  () => {
			return -1
		},
		hListDel :  () => {
			return -1
		},
		hListCha :  () => {
			return -1
		},

		setfocus :  () => {
			return -1
		}

	}

	state = {
		newTodoList : "add...",
		backClickCount : 1
	}


	componentDidMount(){
		window.onclick = this.backClick;
	}
	todoListClick = () => {
		this.setState({backClickCount : this.state.backClickCount + 1});
		console.log("todoList onclick call!! " + this.state.backClickCount);
	}
	backClick = () => {
		this.setState({backClickCount : this.state.backClickCount - 1});
		console.log("window onclick call!! " + this.state.backClickCount);
		if(this.state.backClickCount < 0){
			console.log("focus -1 change!!!")
			this.props.setfocus(-1);
		}
	}
	componentWillUnmount(){
		window.onclick = () => {};
	}



	handleFormSubmit = (e) => {
		e.preventDefault();
		this.props.addTodoList(this.props.roomName, this.props.id, this.state.newTodoList)
			.then((response) => {
				console.log("todo ADD {" + response);
			});
		this.setState({newTodoList : "add..."});
	}
	handleValueChange = (e) => {
		let NewState = {};
		NewState[e.target.name] = e.target.value;
		
		this.setState(NewState);
	}



	render(){
		const profileStyle = {
			backgroundColor : this.props.name
		}

		return(
			<div className="todolist" onClick={this.todoListClick}> 
				<div className="profile" style={profileStyle}></div>
				<img src={this.props.index === 0 ? masterImg : userImg} alt={this.props.index === 0 ? "master" : "user"}/>
				<ul className="todolistul">
					{this.props.list.map((l, i) => {
							return <TodoListLi key={i} l={l} i={i} todoIndex={this.props.todoIndex}
												id={this.props.id} roomName={this.props.roomName} setTodoIndex={this.props.setTodoIndex}/>
					})}
					<li className="todolistliform" style={this.props.list.length === 0 ? {borderTop : "none"} : {borderTop : "black 2px solid"}}>
						<form onSubmit={this.handleFormSubmit}>
							<input type="text" name="newTodoList" value={this.state.newTodoList} onChange={this.handleValueChange} />
							<button type="submit"></button>
						</form>
					</li>
				</ul>
			</div>
		)
	}
}




/*
	props
		id
		roomName

		todoIndex : todoIndex
		i : ListIndex
		l : ListValue

		f
		(DB)
		setTodoIndex : todo Index change

*/
class TodoListLi extends Component {
	
	static defaultProps = {
		todoIndex : -1,
		i : -1,
		l : "error",

		setTodoIndex : () => {
			return -1
		}
	}

	checkBoxClick = () => {
		console.log(this.props.todoIndex);
		if(this.props.todoIndex === this.props.i)
			this.props.setTodoIndex(this.props.roomName, this.props.id, this.props.todoIndex + 1);
		else
			this.props.setTodoIndex(this.props.roomName, this.props.id, this.props.todoIndex - 1);
	}


	render(){
		const liStyle = this.props.i !== 0
			? {borderTop : "black 2px solid"}
			: {borderTop : "none"}
		const checkboxStyle = (this.props.todoIndex === this.props.i) || (this.props.todoIndex - 1 === this.props.i)
			? {display : ""}
			: {display : "none"}
		const lStyle = this.props.todoIndex > this.props.i
			? {textDecoration : "line-through", textDecorationColor : "red"}
			: {textDecoration : "none"}
		return(
			<li className="todolistli" style={liStyle}>
				<span style={lStyle}>{this.props.l}</span>
				<div className="checkbox" style={checkboxStyle} onClick={this.checkBoxClick}></div>
			</li>
		)
	}
}

export default TodoList;