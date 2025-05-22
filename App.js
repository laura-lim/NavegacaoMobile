import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen.js';
import DetailScreen from './src/screens/DetailScreen.js';
import ProfileScreen from './src/screens/ProfileScreen.js';
import LoginScreen from './src/screens/LoginScreen.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"> 
        <Stack.Screen name = "Home" component={HomeScreen} />
        <Stack.Screen name = "Details" component={DetailScreen} />
        <Stack.Screen name = "Profile" component={ProfileScreen} />
        <Stack.Screen name = "Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}
