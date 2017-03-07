import { combineReducers } from 'redux';
import BabbleReducer from './reducer_babble'
import LikesReducer from './reducer_likes';

const rootReducer = combineReducers({
	babbles: BabbleReducer,
	likes: LikesReducer
});

export default rootReducer;