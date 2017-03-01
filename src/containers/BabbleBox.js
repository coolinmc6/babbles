import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBabble } from '../actions';
import { bindActionCreators } from 'redux';

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
		console.log(e.target.value)
		this.setState({
			babble: e.target.value
		})
	}

	onBabbleSubmit(e) {
		e.preventDefault();
		this.props.createBabble(this.state.babble);

	}

	render() {
		return (
			<div>
				<form onSubmit={this.onBabbleSubmit}>
					<div>What's up?</div>
					<input type="text" 
							onChange={this.onBabbleChange}/>
					<br />
					<button 
						type="submit" 
						className="btn btn-primary">
						babble
					</button>
				</form>
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