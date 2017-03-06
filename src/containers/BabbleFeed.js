import React, { Component } from 'react';

export default class BabbleFeed extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		

		return (
			<div>
				{this.props.babbles.map((babble) => { return (
					<div key={babble.id}>{babble.text}</div>
				) })}
			</div>
		)
	}
}