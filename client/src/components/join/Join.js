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
	


	handleFormSubmit = (e) => {
		console.log("handleFormSubmit!!");
		
		if(this.state.roomName === "" && this.state.password === ""){
			console.log("can't Join!!")
		}
		else{
			console.log("room Make!!")
			e.preventDefault();
			this.addJoin()
				.then((response) => {
	
					console.log(response.data);
	
				});
	
		}
		/*
		this.props.room.map((r, i) => {
			if(r.name === this.state.roomName){
				this.props.setRoomId(r.id);
				
			}

		})
		*/

	}

	handleValueChange = (e) => {
		let NewState = {};
		NewState[e.target.name] = e.target.value;
		
		this.setState(NewState);
	}
	
	addJoin(){
		console.log("addJoin!!");
		const url = "api/room";
		const formData = new FormData();

		formData.append("roomName", this.state.roomName);
		formData.append("password", this.state.password);

		const config = {
			headers : {
				"content-type" : "multipart/form-data"
			}
		}
		
		return post(url, formData, config);
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