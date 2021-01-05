import React from 'react';
import { View, StyleSheet } from  'react-native';
import { FontAwesome5, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { colors } from '../../utils';
import WeatherDetailsItem from './WeatherDetailsItem';

const WeatherDetails = ({ currentWeather, unitSystem }) => {
	const {
		main: {
			feels_like, humidity, pressure
		},
		wind: { speed }
	} = currentWeather;

	const windSpeed = unitSystem === 'metric' ? `${Math.round(speed)} m/s` : `${Math.round(speed)} miles/h`;
	return (
    <View style={styles.weatherDetails}>
	    <View style={styles.weatherDetailsRow}>
	      <WeatherDetailsItem value={`${feels_like}º`} Icon={FontAwesome5} iconName='temperature-low' border>
	        Feels like
	      </WeatherDetailsItem>
	      <WeatherDetailsItem value={`${humidity}%`} Icon={Ionicons} iconName='water' border>
	        Humidity
	      </WeatherDetailsItem>
	    </View>
	    <View style={{ ...styles.weatherDetailsRow, borderTopWidth: 1, borderColor: colors.BORDER_COLOR }} >
		    <WeatherDetailsItem value={`${windSpeed}`} Icon={FontAwesome5} iconName='wind' border>
			    Wind Speed
		    </WeatherDetailsItem>
		    <WeatherDetailsItem value={`${pressure} hPa`} Icon={MaterialCommunityIcons} iconName='speedometer' border>
			    Pressure
		    </WeatherDetailsItem>
	    </View>
    </View>
  );
};

export default WeatherDetails;

const styles = StyleSheet.create({
	weatherDetails: {
		marginTop: 'auto',
		margin: 15,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: colors.BORDER_COLOR
	},
	weatherDetailsRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	weatherDetailsCard: {
		flex: 1,
		padding: 10,
	},
	weatherDetailsItem: {
		alignItems: 'flex-end',
		justifyContent: 'flex-end'
	},
	textSecondary: {
		fontSize: 14,
		fontWeight: 'bold',
		color: colors.SECONDARY_COLOR
	}
})
