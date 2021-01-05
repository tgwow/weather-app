import { combineReducers } from 'redux'
import weatherReducer from './weather';
import locationReducer from './location';

export default combineReducers({
	weather: weatherReducer,
	location: locationReducer
});
