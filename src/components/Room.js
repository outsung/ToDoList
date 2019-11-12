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

	}

	render(){

		return(
			<ul className="room">
				{this.props.user.map((u, i) => {
					return(
						<React.Fragment key={u.index}>
						{
							0 !== i && <div className="line"></div>
						}
						<User id={u.id} index={u.index}
									name={u.name} todo={u.todo} list={u.list}/>
						</React.Fragment >
					)
				})}
			</ul>
		)
	}
}


export default Room;