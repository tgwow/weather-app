export const Types = {
	GET_LOCATION: 'location/GET_LOCATION',
	GET_LOCATION_START: 'location/GET_LOCATION_START',
	GET_LOCATION_SUCCESS: 'location/GET_LOCATION_SUCCESS',
	GET_LOCATION_FAIL: 'location/GET_LOCATION_FAIL',
}

const INITIAL_STATE = {
	currentLocation: null,
	error: null,
};

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case Types.GET_LOCATION_START:
			return {
				...state,
				loading: true
			};
		case Types.GET_LOCATION_SUCCESS:
			return {
				currentLocation: { ...action.latitude, ...action.longitude },
				error: null,
				loading: false
			};
		case Types.GET_LOCATION_FAIL:
			return {
				...state,
				error: action.error,
				loading: false
			};
		default: return state;
	}
}

export default reducer;
