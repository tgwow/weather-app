import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { colors } from '../../utils'

const WeatherInfo = ({currentWeather, unitSystem }) => {
	const unit = unitSystem === 'metric' ? 'Cº' : unitSystem === 'imperial' ? 'Fº' : null;
	const {
		main: { temp },
		name,
		weather: [details]
	} = currentWeather;
	const {
		icon,
		description,
		main
	} = details;

		// const newTemp = unitSystem === 'metric' ? temp * 9 / 5 + 32 : unitSystem === 'imperial' ?  (temp - 32) * 5 / 9 : 0;
	const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
	return (
		<View style={styles.weatherInfo}>
			<Text>Current Weather for {name}</Text>
			<Image style={styles.weatherIcon} source={{uri: iconUrl}}/>
			<Text style={styles.textPrimary}>{Math.trunc(temp)} {unit}</Text>
			<Text style={styles.weatherDesc}>{description}</Text>
			<Text style={styles.secondaryText}>{main}</Text>
		</View>
  );
};

export default WeatherInfo;

const styles = StyleSheet.create({
	weatherInfo: {
		alignItems: 'center'
	},
	weatherIcon: {
		width: 100,
		height: 100
	},
	textPrimary: {
		fontSize: 44,
		color: colors.PRIMARY_COLOR,
		lineHeight: 44
	},
	weatherDesc: {
		textTransform: 'capitalize'
	},
	secondaryText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: colors.SECONDARY_COLOR,
		marginTop: 8
	}
})
