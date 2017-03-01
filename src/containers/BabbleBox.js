import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBabble } from '../actions';
import { bindActionCreators } from 'redux';
import { generateID } from '../utils/tools.js';

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
		const babble = { id: generateID(), user: 1, text: this.state.babble }
		this.props.createBabble(babble);
		this.setState({
			babble: ''
		});

	}

	render() {
		return (
			<div className="col-xs-12 col-sm-8">
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
							{babble.text}<br />
							<span className="glyphicon glyphicon-heart" aria-hidden="true"></span>
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