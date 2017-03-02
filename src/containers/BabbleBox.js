import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBabble } from '../actions';
import { bindActionCreators } from 'redux';
import { generateID, timeStamp, userCreator } from '../utils/tools.js';


setInterval(() => {userCreator()}, 1000);

class BabbleBox extends Component {

	constructor() {
		super();
		this.state = {
			babble: ''
		}

		this.onBabbleChange = this.onBabbleChange.bind(this);
		this.onBabbleSubmit = this.onBabbleSubmit.bind(this);
	}

	onBabbleChange(e) {
		this.setState({
			babble: e.target.value
		})
	}

	onBabbleSubmit(e) {
		e.preventDefault();
		const handle = 'coolinmc6';
		const username = 'Colin McNamara'
		const timestamp = timeStamp();
		const babble = { 
			id: generateID(), 
			text: this.state.babble, 
			date: timestamp,
			user: username,
			handle: '@' + handle
		}

		this.props.createBabble(babble);
		this.setState({
			babble: ''
		});

	}

	render() {
		return (
			<div className="col-xs-12 col-sm-4 babble-parent">
				<form onSubmit={this.onBabbleSubmit}>
					<textarea cols="40" rows="4" 
							type="text" 
							onChange={this.onBabbleChange}
							value={this.state.babble}/>
					<br />
					<button 
						type="submit" 
						className="btn btn-primary">
						babble
					</button>
				</form>

				{this.props.babbles.map((babble) => {
					return (
						<div key={babble.id} className='babble'>
							<div className="babble-user-row">
							  <img src="https://randomuser.me/api/portraits/men/48.jpg" alt="" className="user-pic"/>
							  <div className="user-name">
							    {babble.user} <br/>
							    <span className="user-handle">{babble.handle}</span>
							  </div>
							  
							  <div className="follow-user">
							    <span className="glyphicon glyphicon-share-alt"></span>
							  </div>
							</div>
							<div className="babble-text-row">
							  <div className="babble-text">{babble.text}</div>
							  <div className="babble-time">{babble.date}</div>
							</div>
							<div className="babble-action-row">
							  <div className="babble-like">
							    <span className="glyphicon glyphicon-heart"></span>
							  </div>
							</div>
						</div>
					)
				})}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		babbles: state.babbles
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ createBabble }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BabbleBox);