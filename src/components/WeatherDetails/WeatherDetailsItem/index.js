import React from 'react';
import { colors } from '../../../utils';
import { StyleSheet, Text, View } from 'react-native';

const WeatherDetailsItem = ({ Icon, iconName, value, border, children}) => {
	const borderRight = border ? { borderRightWidth: 1, borderRightColor: colors.BORDER_COLOR } : {};
  return (
	    <View style={{...styles.weatherDetailsCard, ...borderRight }}>
		    <View style={styles.weatherDetailsRow}>
			    <Icon name={iconName} size={25} color={ colors.PRIMARY_COLOR }/>
			    <View style={styles.weatherDetailsItem}>
				    <Text>{ children }:</Text>
				    <Text style={styles.textSecondary}>{ value }</Text>
			    </View>
		    </View>
	    </View>
  );
};

export default WeatherDetailsItem;

const styles = StyleSheet.create({
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
