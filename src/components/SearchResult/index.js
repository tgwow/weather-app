import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../utils';

const SearchResult = ({ city, temp }) => {
  return (
    <>
	    <View style={styles.container}>
		    <Text style={styles.secondaryText}>Weather for {city}:</Text>
		    <Text style={styles.primaryText}>{temp}º</Text>
	    </View>
    </>
  );
};

const styles = StyleSheet.create({
	container: {
		marginTop: 5,
		paddingHorizontal: 15,
		paddingVertical: 10,
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#eee'
	},
	primaryText: {
		fontSize: 16,
		color: colors.PRIMARY_COLOR,
		marginTop: 5
	},
	secondaryText: {
		fontWeight: 'bold'
	}
});

export default SearchResult;
