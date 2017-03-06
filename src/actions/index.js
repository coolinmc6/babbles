// import axios from 'axios';

export const CREATE_BABBLE = 'CREATE_BABBLE';
export const TOGGLE_LIKE = 'TOGGLE_LIKE';

export function createBabble(babble) {
	return {
		type: CREATE_BABBLE,
		payload: babble
	}
	
}

export function toggleLike(likeObj) {
	return {
		type: TOGGLE_LIKE,
		payload: likeObj
	}
}