import React from 'react';
import './Join.css';


//import Axios from '';
//import {post} from 'axios';



/*
	props
		room
		
		f
		(db)
		roomJoin

		roomJoinSet
*/


class Join extends React.Component {

	state = {
		roomName : "",
		password : "",
		//userName : "",
	}
	
	setUserName = () => {
		let name = "#";
		const hex = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]
		for(let i = 0; i < 6; ++i)
			name = name + hex[Math.floor(Math.random() * (Math.floor(16) - Math.ceil(0))) + 0];
		//console.log(name);
		return name;
	}

	findRoom = (room, roomName) => {
		//console.log(this.props.room.lenght);
		for(let i = 0; i < room.length; ++i){
			//console.log(roomName ,room[i].name)
			if(roomName === room[i].name)
				return i;
		}

		return -1;
	}


	handleFormSubmit = (e) => {
		e.preventDefault();
		this.props.roomJoin(this.state.roomName, this.state.password, this.setUserName())
			.then((response) => {
				//console.log(response.data);
				let roomIndex = this.findRoom(response.data, this.state.roomName);
				//console.log(roomIndex);
				//let roomId = response.data[roomIndex].id;
				let roomName = response.data[roomIndex].name;
				let userId = response.data[roomIndex].userCount - 1;

				this.props.roomJoinSet(roomIndex, roomName, userId);
			});
	}

	handleValueChange = (e) => {
		let NewState = {};
		NewState[e.target.name] = e.target.value;
		
		this.setState(NewState);
	}
	
	/*
	roomJoin(roomName, password, userName){
		//console.log("post data!!");
		const url = "/api/room";
		const data = {
			roomName : roomName,
			password : password,
			userName : userName
		};
		//console.log(data);
		return post(url, data);
	}
	*/
	render(){
		//console.log(this.props);
		return(
			<form className="form" onSubmit={this.handleFormSubmit} autocomplete="off">
				<label>Room Name</label>
				<input type="text" name="roomName" value={this.state.roomName} onChange={this.handleValueChange} />

				<label>Password</label>
				<input type="text" name="password" value={this.state.password} onChange={this.handleValueChange} />

				<button type="submit"> Join </button>
			</form>
		);
	}
}


export default Join;