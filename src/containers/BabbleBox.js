import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBabble, toggleLike } from '../actions';
import { bindActionCreators } from 'redux';
import { generateID, generateSmall, timeStamp } from '../utils/tools.js';
import BabbleFeed from './BabbleFeed';


export const findByID = (id, list) => list.find(item => item.id === id)

class BabbleBox extends Component {

	constructor() {
		super();
		this.state = {
			babble: '',
			count: 0
		}

		this.onBabbleChange = this.onBabbleChange.bind(this);
		this.onBabbleSubmit = this.onBabbleSubmit.bind(this);
		this.onLikeToggle = this.onLikeToggle.bind(this);
		
	}

	random() {
		setInterval(()=>{
			const handle = 'randomuser';
			const username = 'random' + generateSmall();
			const timestamp = timeStamp();
			const imgNum = generateSmall();
			const babble = { 
				id: generateID(), 
				text: "What's up??", 
				date: timestamp,
				user: username,
				handle: '@' + handle,
				img: `https://randomuser.me/api/portraits/men/${imgNum}.jpg`

			}
			this.props.createBabble(babble)
		}, 13000);
	}

	componentDidMount() {
		let count = this.state.count++
		this.setState({ count });
		this.random();
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
		// const imgNum = generateSmall();
		const babble = { 
			id: generateID(), 
			text: "What's up??", 
			date: timestamp,
			user: username,
			handle: '@' + handle,
			img: 'https://randomuser.me/api/portraits/men/42.jpg'

		}

		this.props.createBabble(babble);
		this.setState({
			babble: ''
		});
		console.log(babble)

	}

	onLikeToggle(id) {
		const like = { user: 'coolinmc6', babbleID: id }
		// console.log(like);

	}

	renderBabbles() {
		return this.props.babbles.map((babble) => {
			return (
				<div key={babble.id} className='babble'>
					<div className="babble-user-row">
					  <img src={`${babble.img}`} alt="" className="user-pic"/>
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
					    <span className="glyphicon glyphicon-heart liked"></span>
					  </div>
					</div>
				</div>
			)
		})
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
				<BabbleFeed babbles={this.props.babbles}/>
				{/* this.renderBabbles() */	}
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
	return bindActionCreators({ createBabble, toggleLike }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BabbleBox);