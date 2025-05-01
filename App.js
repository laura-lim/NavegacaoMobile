import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator initialRouteName="Home"> 
        <Stack.Screen name = "Home" component={HomeScreen} />
        <Stack.Screen name = "Details" component={DetailScreen} />
        <Stack.Screen name = "Profile" component={ProfileScreen} />
        <Stack.Screen name = "Login" component={LoginScreen} />
      </StackNavigator>
    </NavigationContainer>
   
  );
}
