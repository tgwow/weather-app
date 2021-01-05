import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../../utils';
const Button = ({ children, onPress, customStyle, Icon, name }) => {
  return (
    <TouchableOpacity onPress={ onPress } style={{ ...styles.container, ...customStyle }}>
	    { Icon ?
		    <Icon name={name} size={30} color='white' /> :
		    <Text style={ styles.text }>{ children }</Text>
	    }
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
	container: {
		borderWidth: 1,
		borderRadius: 10,
		backgroundColor: colors.PRIMARY_COLOR,
		borderColor: colors.PRIMARY_COLOR,
		paddingHorizontal: 20,
		paddingVertical: 10,
		elevation: 5,
		justifyContent: 'center'
	},
	text: {
		textTransform: 'capitalize',
		color: '#fff'
	}
})

export default Button;
