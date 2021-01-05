export const Types = {
	FETCH_WEATHER: 'weather/FETCH_WEATHER',
	FETCH_WEATHER_START: 'weather/FETCH_WEATHER_START',
	FETCH_WEATHER_SUCCESS: 'weather/FETCH_WEATHER_SUCCESS',
	FETCH_WEATHER_FAIL: 'weather/FETCH_WEATHER_FAIL',
}

const INITIAL_STATE = {
	currentWeather: null,
	error: null,
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
				currentWeather: action.currentWeather,
				error: null,
				loading: false
			};
		case Types.FETCH_WEATHER_FAIL:
			return {
				...state,
				error: action.error,
				loading: false
			};
		default: return state;
	}
}

export default reducer;
