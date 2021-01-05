import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../utils';

const RefreshIcon = ({ fetch, query }) => {
	const handleRefreshPressed = async () => {
		await fetch(query);
	}
  return (
    <View style={styles.refreshIcon} >
	    <Ionicons onPress={handleRefreshPressed} name="refresh" size={24} color={colors.PRIMARY_COLOR} />
    </View>
  );
}

export default RefreshIcon;

const styles = StyleSheet.create({
	refreshIcon: {
		position: 'absolute',
		top: 40,
		right: 30,
	}
})
