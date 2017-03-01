// import axios from 'axios';

export const CREATE_BABBLE = 'CREATE_BABBLE';

export function createBabble(babble) {

	console.log('Action value: ', babble);
	return {
		type: CREATE_BABBLE,
		payload: babble
	}
	
}