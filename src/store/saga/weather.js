import { put } from 'redux-saga/effects';
import { API_URL, API_KEY } from '@env';
import { Types } from '../ducks/weather';

export function* fetchWeatherSaga(action) {
	// yield put({ type: Types.FETCH_WEATHER_START });
	console.log('[fetchWeatherSaga] ', action);
	try {
		const response = yield fetch(`${API_URL}/?lat=${action.latitude}&lon=${action.longitude}&units=${action.unit}&appid=${API_KEY}`);
		const data = yield response.json();
		if (response.ok) yield put({ type: Types.FETCH_WEATHER_SUCCESS, currentWeather: data });
		else yield put({ type: Types.FETCH_WEATHER_FAIL, error: data.message });
	} catch (e) {
		yield put({ type: Types.FETCH_WEATHER_FAIL, error: e.message });
	}
}
