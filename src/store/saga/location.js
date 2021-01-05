import { put } from 'redux-saga/effects';
import { Types as locationTypes } from '../ducks/location';
import { Types as weatherTypes } from '../ducks/weather';
import * as Location from 'expo-location';

export function* getLocationSaga(action) {
	console.log('getting user location', action);
	yield put({ type: weatherTypes.FETCH_WEATHER_START });

	const { status } = yield Location.requestPermissionsAsync();
	if (status !== 'granted') {
		yield put({ type: locationTypes.GET_LOCATION_FAIL, error: 'Permission to access location was denied!' });
		return;
	}
	let { coords : { latitude, longitude } } = yield Location.getCurrentPositionAsync({});
	yield put({ type: weatherTypes.FETCH_WEATHER, latitude, longitude, unit: action.unit });
}
