import { combineReducers } from 'redux';
import BabbleReducer from './reducer_babble'

const rootReducer = combineReducers({
	babbles: BabbleReducer
});

export default rootReducer;