import React from 'react';
import { View, StyleSheet, Platform } from 'react-native'
import { Picker } from '@react-native-picker/picker'

const UnitPicker = ({ unitSystem, setUnitSystem }) => {
  return (
    <View style={styles.picker}>
			<Picker
				selectedValue={unitSystem}
				onValueChange={(value) => setUnitSystem(value)}
				mode='dropdown'
			>
				<Picker.Item label='Cº' value='metric'/>
				<Picker.Item label='Fº' value='imperial'/>
			</Picker>
    </View>
  );
};

export default UnitPicker;

const styles = StyleSheet.create({
	picker: {
		position: 'absolute',
		...Platform.select({
			ios: { top: -30 },
			android: { top: 30 }
		}),
		left: 20,
		height: 50,
		width: 100
	}
})
