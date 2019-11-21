import React from 'react';
import {post} from 'axios';



/*
	props
		room
		f
		setRoomId
		setUserId
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
		//console.log("handleFormSubmit!!");
		//this.setState({userName : });
		/*
		let type = "None";

		if(this.state.roomName === "" && this.state.password === ""){
			console.log("can't Join!!");
			type = "None";
		}
		else {
			//roomIndex = this.props.room.map((r, i) => { if(r.name === this.state.roomName) return i; })
			
			roomIndex = this.props.room.forEach(element, index => {
				if(element.name === this.state.roomName) return index;
			});
			
			//console.log(this.findRoom(this.state.roomName));
			if(this.findRoom(this.state.roomName)){
				this.props.setRoomName(this.state.roomName);
				console.log("room Make!!");
				type = "Make";
			}
			else {
				this.props.setRoomName(this.state.roomName);
				console.log("room Join!!");
				type = "Join";
			}
		}
		*/
		e.preventDefault();
		this.addJoin()
			.then((response) => {
				//console.log(response.data);
				let roomIndex = this.findRoom(response.data, this.state.roomName);
				//console.log(roomIndex);
				//let roomId = response.data[roomIndex].id;
				let roomName = response.data[roomIndex].name;
				let userId = response.data[roomIndex].userCount - 1;

				this.props.roomJoin(roomIndex, roomName, userId);
			

			});



	}

	handleValueChange = (e) => {
		let NewState = {};
		NewState[e.target.name] = e.target.value;
		
		this.setState(NewState);
	}
	
	addJoin(){
		//console.log("post data!!");
		const url = "http://192.168.0.16:5000/api/room";
		const data = {
			roomName : this.state.roomName,
			password : this.state.password,
			userName : this.setUserName()
		};
		//console.log(data);
		return post(url, data);
	}

	render(){
		//console.log("Join render");
		return(
			<form onSubmit={this.handleFormSubmit}>
				<span>Room Name</span>
				<input type="text" name="roomName" value={this.state.roomName} onChange={this.handleValueChange} />

				<span>Password</span>
				<input type="text" name="password" value={this.state.password} onChange={this.handleValueChange} />

				<button type="submit"> Join </button>
			</form>
		);
	}
}


export default Join;