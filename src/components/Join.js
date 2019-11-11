import React from 'react';

class Join extends React.Component {
	render(){
		return(
			<div>
				<span>To Do List</span>
				<div>
					<span>{this.props.room}</span>
					<input></input>

					<span>{this.props.password}</span>
					<input type="password"></input>
				</div>
			</div>
		);
	}
}


export default Join;