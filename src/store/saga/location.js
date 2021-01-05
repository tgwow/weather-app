import { put } from 'redux-saga/effects';
import { Types as locationTypes } from '../ducks/location';
import * as Location from 'expo-location';

export function* getLocationSaga(action) {
	console.log('getting user location', action);
	yield put({ type: locationTypes.GET_LOCATION_START });

	const { status } = yield Location.requestPermissionsAsync();
	if (status !== 'granted') {
		yield put({ type: locationTypes.GET_LOCATION_FAIL, error: 'Permission to access location was denied!' });
		return;
	}
	try {
		let { coords : { latitude, longitude } } = yield Location.getCurrentPositionAsync({});
		yield put({ type: locationTypes.GET_LOCATION_SUCCESS, latitude, longitude });
	} catch (e) {
		yield put({ type: locationTypes.GET_LOCATION_FAIL, error: 'We could not find your position. Please make sure your location service provider is on' });
	}
}
