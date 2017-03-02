import React, { Component } from 'react';

export default class UserInfo extends Component {
	render() {
		return (
			<div className="col-sm-4 user-info">
				<img src="https://randomuser.me/api/portraits/men/6.jpg" alt="" className="user-pic"/>
				<div className="user-info-username">Colin McNamara</div>
				<div className="user-info-handle">coolinmc6</div>



			</div>
		)
	}
}