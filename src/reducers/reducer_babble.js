export default function(state = [], action) {
	switch(action.type) {
		case 'CREATE_BABBLE':
			return [...state, action.payload];
		default:
			return state;
	}
}