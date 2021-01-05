import React, { useState, useRef, useCallback } from 'react';
import { TextInput, Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { API_URL, API_KEY } from '@env';
import { Types as weatherTypes } from '../../store/ducks/weather';
import { colors } from '../../utils';
import { getUserLocation } from '../../utils/getUserLocation'
import Button from '../../components/Button';
import SearchResult from '../../components/SearchResult';

const Search = React.memo(() => {
	const [city, onChangeText] = useState('');
	const unit = 'metric'

	const dispatch = useDispatch();
	const fetchWeather = useCallback((query) => dispatch({ type: weatherTypes.FETCH_WEATHER, query }) , [dispatch]);
	const clearError = useCallback(() => dispatch({ type: weatherTypes.CLEAR_ERROR }) , [dispatch]);
	const { currentWeather, loading, error } = useSelector((state) => state.weather);
	const inputRef = useRef(null);

	const handleClearText = () => {
		onChangeText('');
		clearError()
	}

	const handleSearchByCityName = async () => {
		const query = `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`;
		fetchWeather(query);
		inputRef.current.blur();
	}

	const handleSearchByGeolocation = async () => {
		const { latitude, longitude } = await getUserLocation();
		const query = `${API_URL}/?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${API_KEY}`
		fetchWeather(query)
	}

	let result;
	if (error) result = <Text style={ styles.error }>{ error }</Text>
	else if (loading) result = <ActivityIndicator size='large' color={colors.PRIMARY_COLOR}/>
	else if (currentWeather.length > 0) result = (
		currentWeather.map((item, index) =>
			<SearchResult key={item.coord.lat + index } city={item.name} temp={item.main.temp} />
		)
	)
	return (
    <View style={ styles.container }>
      <Text>Type your location here:</Text>
      <TextInput
        ref={inputRef}
        onChangeText={ value => onChangeText(value)}
        value={city}
        style={styles.locationInput}
        placeholder='City, state or country'
        textContentType='addressCity'
        onFocus={handleClearText}
      />
      <View style={styles.row}>
	      <Button onPress={handleSearchByCityName}>Submit</Button>
	      <Button onPress={handleSearchByGeolocation} Icon={Icon} name='crosshairs-gps'/>
      </View>
      <Text style={ styles.bold }>Previous Searches</Text>
	    <View style={styles.previousSearches}>
		    { result }
	    </View>
    </View>
  );
});

export default Search;

const styles = StyleSheet.create({
	container: {
		padding: 20,
		marginTop: 20
	},
	locationInput: {
		marginTop: 7,
		borderWidth: 1,
		borderColor: colors.BORDER_COLOR,
		borderRadius: 10,
		padding: 10
	},
	row: {
		marginTop: 10,
		marginBottom: 20,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	bold: {
		fontWeight: 'bold',
		fontSize: 18
	},
	previousSearches: {
		marginTop: 20
	},

	error: {
		fontSize: 16,
		color: 'red',
		textTransform: 'capitalize'
	}
})
