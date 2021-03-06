import React, { Component } from 'react';


// babble.id !== like.babbleID ? `glyphicon glyphicon-heart liked` : `glyphicon glyphicon-heart`

export default class BabbleFeed extends Component {
	constructor(props) {
		super(props);
	}

	likeStatus(babbleID) {
			
		
		return babbleID + 'yes';	
	}

	isBabbleLiked(babbleID) {
		const liked = this.props.likes.map((like) => {
			return like.babbleID === babbleID;
		})
		console.log(liked)
	}

	isTrue(babbleID) {
		const like = this.props.likes.filter((like) => {
	    	return babbleID === like.babbleID
	    })
	    if (like != '') {
	    	return false;	
	    } else {
	    	return true
	    }

		
	}

	

	render() {
		

		return (
			<div>
				{this.props.babbles.map((babble) => {
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
							    <span className={`glyphicon glyphicon-heart`}
							    		onClick={() => this.props.likeToggleBabble(babble.id)}></span>
							  </div>
							</div>
						</div>
					)
				})}
			</div>
		)
	}
}