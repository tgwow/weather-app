import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import WeatherInfo from '../../../src/components/WeatherInfo';
import UnitPicker from '../../../src/components/UnitPicker';
import RefreshIcon from '../../../src/components/RefreshIcon';
import WeatherDetails from '../../../src/components/WeatherDetails';
import { colors } from '../../utils';
import { Types as locationTypes } from '../../store/ducks/location';

const Home = React.memo(() => {
	const [unit, setUnit] = useState('metric');

	const dispatch = useDispatch();
	const getLocation = useCallback((unit) => dispatch({ type: locationTypes.GET_LOCATION, unit }), [dispatch]);
	const { currentWeather, error, loading } = useSelector((state) => state.weather);

	useEffect(() => {
		getLocation(unit);
	}, [unit]);

	let content;
	if (error) {
		content =
		<>
			<RefreshIcon fetch={() => getLocation(unit)}/>
			<Text style={{ textAlign: 'center'}} >{error}</Text>
		</>
	} else if (loading) {
		content = <ActivityIndicator size='large' color={colors.PRIMARY_COLOR}/>
	} else if (currentWeather) {
		content = (
		<>
			<View style={styles.main}>
				<UnitPicker unitSystem={unit} setUnitSystem={setUnit} />
				<RefreshIcon fetch={() => getLocation(unit)}/>
				<WeatherInfo currentWeather={currentWeather} unitSystem={unit} />
			</View>
			<WeatherDetails currentWeather={currentWeather} unitSystem={unit}/>
		</>
		)
	}

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			{content}
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
		flex: 1,
	},
});

export default Home;
