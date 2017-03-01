export default function(state = [], action) {
	switch(action.type) {
		case 'CREATE_BABBLE':
			console.log('Reducer value: ', action.payload);
			return [...state, action.payload]
	}
	// console.log('Reducer value: ', action.payload);
	return state;
}