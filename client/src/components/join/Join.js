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
		password : ""
	}
	
	setUserName = () => {
		
		let name = "";

		const hex = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]
		
		for(let i = 0; i < 6; ++i)
			name = name + hex[Math.floor(Math.random() * (Math.floor(16) - Math.ceil(0))) + 0];
		
		console.log(name);
		return name;
	}

	handleFormSubmit = (e) => {
		console.log("handleFormSubmit!!");
		
		let type = "None";

		if(this.state.roomName === "" && this.state.password === ""){
			console.log("can't Join!!");
			type = "None";
		}
		else{
			let roomIndex = -1;
			//roomIndex = this.props.room.map((r, i) => { if(r.name === this.state.roomName) return i; })
			/*
			roomIndex = this.props.room.forEach(element, index => {
				if(element.name === this.state.roomName) return index;
			});
			*/
			//console.log(roomIndex);
			if(roomIndex === -1){
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

		e.preventDefault();
		this.addJoin(type)
			.then((response) => {

				console.log(response.data);

			});



	}

	handleValueChange = (e) => {
		let NewState = {};
		NewState[e.target.name] = e.target.value;
		
		this.setState(NewState);
	}
	
	addJoin(type){
		console.log("post data!!");
		const url = "http://localhost:5000/api/room";
		const data = {
			type : type,
			roomName : this.state.roomName,
			password : this.state.password,
			userName : this.setUserName()
		};
		console.log(data);
		return post(url, data);
	}

	render(){
		console.log("Join render");
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