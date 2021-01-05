import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';
import store from './src/store';

import Home from './src/screens/Home';
import Search from './src/screens/Search';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
	    <NavigationContainer>
		    <Stack.Navigator initialRouteName='Home'>
					<Stack.Screen name='Home' component={Home} options={{ headerShown: false }}/>
			    <Stack.Screen name='Search' component={Search}/>
		    </Stack.Navigator>
	    </NavigationContainer>
    </Provider>
  );
}
