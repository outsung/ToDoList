import React, { Component } from 'react';
import User from './User';


/*
todoList : [
					"1. 오늘 리엑트 공부",
					"2. 리엑트 네이티브도 공부",
					"3. 리엑트로 ToDoList 틀 완성",
					"4. ToDoList 와 node.js 연결",
					"5. 리엑트 네이티브 설정 완료"
				],
todoIndex : 0
*/


class Room extends Component {
	id = 3
	state = {
		users : [
			{
				id : 0,
				name : "#ff6666"
			},
			{
				id : 1,
				name : "#cc6262"
			},
			{
				id : 2,
				name : "#111111"
			}
		]
	}

	handleAdd = (data) => {
		const { users } = this.state;
		this.setState({
			users : users.concat({ id : this.id++, ...data }) 
		})
	}

	render(){
		const { users } = this.state;
		return(
			<div>
				{JSON.stringify(users)}
			</div>
		)
	}
}

export default Room;