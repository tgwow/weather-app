import { takeEvery } from 'redux-saga/effects';

import { Types as locationTypes} from '../ducks/location';
import { getLocationSaga } from './location';
import { Types as weatherTypes } from '../ducks/weather';
import { fetchWeatherSaga } from './weather';

export function* watchWeather() {
	yield takeEvery(locationTypes.GET_LOCATION, getLocationSaga);
	yield takeEvery(weatherTypes.FETCH_WEATHER, fetchWeatherSaga);
}
