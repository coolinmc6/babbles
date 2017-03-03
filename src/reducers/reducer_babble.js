import { timeStamp } from '../utils/tools';

const INITIAL_STATE = [
	{ id: 1, text: "Welcome to babble", date: timeStamp(), user: 'Colin McNamara', 
		handle: '@coolinmc6', img: 'https://randomuser.me/api/portraits/men/42.jpg'},
	{ id: 2, text: "Here is another babble", date: timeStamp(), user: 'Colin McNamara', 
		handle: '@coolinmc6', img: 'https://randomuser.me/api/portraits/men/42.jpg'}
]

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case 'CREATE_BABBLE':
			return [action.payload, ...state];
		default:
			return state;
	}
}