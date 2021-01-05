export const Types = {
	FETCH_WEATHER: 'weather/FETCH_WEATHER',
	FETCH_WEATHER_START: 'weather/FETCH_WEATHER_START',
	FETCH_WEATHER_SUCCESS: 'weather/FETCH_WEATHER_SUCCESS',
	FETCH_WEATHER_FAIL: 'weather/FETCH_WEATHER_FAIL',
	CLEAR_ERROR: 'weather/CLEAR_ERROR',
	CLEAR_LOCATIONS: 'weather/CLEAR_LOCATIONS',
}

const INITIAL_STATE = {
	currentWeather: [],
	error: '',
	loading: false
};

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case Types.FETCH_WEATHER_START:
			return {
				...state,
				loading: true
			};
		case Types.FETCH_WEATHER_SUCCESS:
			return {
				currentWeather: state.currentWeather.concat(action.currentWeather),
				error: '',
				loading: false
			};
		case Types.FETCH_WEATHER_FAIL:
			return {
				...state,
				error: action.error,
				loading: false
			};
		case Types.CLEAR_ERROR:
			return {
				...state,
				error: ''
			};
		case Types.CLEAR_LOCATIONS:
			return {
				...state,
				currentWeather: []
			};
		default: return state;
	}
}

export default reducer;
