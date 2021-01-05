import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL, API_KEY } from '@env';
import WeatherInfo from '../../../src/components/WeatherInfo';
import UnitPicker from '../../../src/components/UnitPicker';
import RefreshIcon from '../../../src/components/RefreshIcon';
import WeatherDetails from '../../../src/components/WeatherDetails';
import Button from '../../components/Button';
import { colors } from '../../utils';
import { Types as weatherTypes } from '../../store/ducks/weather';

import { getUserLocation } from '../../utils/getUserLocation'

const Home = React.memo(({ navigation }) => {
	const [unit, setUnit] = useState('metric');
	const [coords, setCoords] = useState(null);

	const dispatch = useDispatch();
	const fetchWeather = useCallback((query) => dispatch({ type: weatherTypes.FETCH_WEATHER, query }) , [dispatch]);
	const clearLocations = useCallback(() => dispatch({ type: weatherTypes.CLEAR_LOCATIONS }) , [dispatch]);
	const { currentWeather, error, loading } = useSelector((state) => state.weather);

	useEffect(() => {
		async function loadLocationAndWeather () {
			const { latitude, longitude } = await getUserLocation();
			setCoords({ latitude, longitude });
			clearLocations();
			const query = `${API_URL}/?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${API_KEY}`
			await fetchWeather(query);
		}
		loadLocationAndWeather();
	}, [unit]);

	let content;
	if (error) { content =
		<>
			<Text style={{ textAlign: 'center'}} >{error}</Text>
		</>
	} else if (loading) { content =
		<ActivityIndicator size='large' color={colors.PRIMARY_COLOR}/>
	} else if (currentWeather.length > 0) {
		content = (
		<>
			<View style={styles.main}>
				<UnitPicker unitSystem={unit} setUnitSystem={setUnit} />
				<Button customStyle={ { marginBottom: 20 }} onPress={() => navigation.navigate('Search')}>Search</Button>
				<WeatherInfo currentWeather={currentWeather[0]} unitSystem={unit} />
			</View>
			<WeatherDetails currentWeather={currentWeather[0]} unitSystem={unit}/>
		</>
	)}

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			{ loading !== true && <RefreshIcon fetch={() => fetchWeather(`${API_URL}/?lat=${coords.latitude}&lon=${coords.longitude}&units=${unit}&appid=${API_KEY}`)}/> }
			{ content }
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	main: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
});

export default Home;
