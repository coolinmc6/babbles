import { timeStamp } from '../utils/tools';
import { TOGGLE_LIKE } from '../actions';
import { removeLike } from '../utils/helpers';



export default function(state = [], action) {
	switch(action.type) {
		case TOGGLE_LIKE: 
			
			const exists = state.filter((like) => { 
				console.log(like.likeID)
				return like.likeID === action.payload.likeID
			})
			
			
			if (exists == ''){
				console.log('NEW LIKE')
				console.log('Reducer Like State: ', state)
				console.log('Reducer action.payload.likeID: ', action.payload.likeID)
				return [...state, action.payload]	
			} else {
				console.log('OLD LIKE')
				console.log('Reducer Like State: ', state)
				console.log('Reducer action.payload.likeID: ', action.payload.likeID)
				return removeLike(state, action.payload.likeID)

				
			}
			
			
			
		default:
			
			return state;
	}
}

