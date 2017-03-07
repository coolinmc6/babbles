import { timeStamp } from '../utils/tools';
import {TOGGLE_LIKE} from '../actions';

export default function(state = [], action) {
	switch(action.type) {
		case TOGGLE_LIKE: 
			console.log('State:', state)
			console.log('Action.payload', action.payload)
			const exists = state.filter((like) => { 
				return like.babbleID === action.payload.babbleID
			})
			console.log(exists);
			if (exists == ''){
				console.log('NEW LIKE')
			} else {
				console.log('OLD LIKE')
			}
			return [...state, action.payload]	
			
			
		default:
			
			return state;
	}
}

