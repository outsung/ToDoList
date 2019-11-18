import React, { Component } from 'react';
import './todoList.css';

/*
	props
		index : order
		name : profile color
		todoIndex : todoIndex
		list : todo list
		
		f
		(DB)
		hTodoIndex : todo Index change
		hListAdd : todo list Add
		hListDel : todo list Del
		hListCha : todo list change


		hFocus : focus change

*/

class todoList extends Component {

	static defaultProps = {
		index : -1,
		name : "error",
		todoIndex : -1,
		list : ["error"],

		hTodoIndex : () => {
			return -1
		},
		hListAdd :  () => {
			return -1
		},
		hListDel :  () => {
			return -1
		},
		hListCha :  () => {
			return -1
		},

		hFocus :  () => {
			return -1
		}

	}


	render(){
		return(
			<>
				<div className="profile"></div>
				<img src={this.props.index === 0 ? "../img/master.png" : "../img/user.png"} />
				<ul className="todolist">
					{this.props.list.map((l, i) => {
							return <todoListLi key={i} l={l} i={i} todoIndex={this.props.todoIndex} hTodoIndex={this.props.hTodoIndex}/>
					})}
				</ul>
			</>
		)
	}
}




/*
	props
		todoIndex : todoIndex
		i : ListIndex
		l : ListValue

		f
		(DB)
		hTodoIndex : todo Index change

*/
class todoListLi extends Component {
	
	static defaultProps = {
		todoIndex : -1,
		i : "error",
		l : -1,

		hTodoIndex : () => {
			return -1
		}
	}

	checkBoxClick = () => {
		if(this.props.todoIndex === this.props.i)
			this.props.hTodoIndex(this.props.todoIndex - 1);
		else
			this.props.hTodoIndex(this.props.todoIndex + 1);
	}


	render(){
		const checkboxStyle = (this.props.todoIndex === this.props.i) || (this.props.todoIndex - 1 === this.props.i)
			? {display : ""}
			: {display : "none"}
		return(
			<li>
				<span>{this.props.l}</span>
				<div className="checkbox" style={checkboxStyle} onClick={this.checkBoxClick}></div>
			</li>
		)
	}
}

export default todoList;