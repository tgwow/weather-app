import * as Location from 'expo-location';

export async function getUserLocation () {
	const { status } = await Location.requestPermissionsAsync();
	if (status !== 'granted') {
		alert('Permission to access location was denied!');
		return;
	}
	try {
		let { coords : { latitude, longitude } } = await Location.getCurrentPositionAsync({});
		return { latitude, longitude };
	} catch (e) {
		alert('We could not find your position. Please make sure your location service provider is on');
	}
}
