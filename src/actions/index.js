// import axios from 'axios';

export const CREATE_BABBLE = 'CREATE_BABBLE';

export function createBabble(babble) {
	return {
		type: CREATE_BABBLE,
		payload: babble
	}
	
}