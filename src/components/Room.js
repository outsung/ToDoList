import React, { Component } from 'react';
import './Room.css'
import User from './User';

class Room extends Component {
	

	static defaultProps = {
		user : [
			{
				id : 0,
				index : 0,
				name : "#ffffff",
				todo : 0,
				list : []
			}
		]
	}

	state = {
		focus : -1
	}

	setfocus = (index) => {
		console.log("focus change : "+ index)
		this.setState({
			focus : index
		})
	}

	render(){
		return(
			<ul className="room" style={this.state.focus === -1 ? {overflowY : "scroll"} : {overflowY : "hidden"}} >
				{this.props.user.map((u, i) => {
					return(
						<React.Fragment key={u.index}>
						{
							0 !== i && <div className="line"></div>
						}
						<User id={u.id} index={u.index} focus={this.state.focus} setfocus={this.setfocus}
									name={u.name} todo={u.todo} list={u.list}/>
						</React.Fragment >
					)
				})}
			</ul>
		)
	}
}


export default Room;