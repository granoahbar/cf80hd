//IMPORTS

import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen'
import SignUpScreen from './src/screens/SignUpScreen'
import DashScreen from './src/screens/DashScreen';

const Stack = createNativeStackNavigator();

//VARIABLES

export default function App() {

  //JSX

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen options={{ headerShown: false }} name="DashScreen" component={DashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//STYLE SHEET

const styles = StyleSheet.create({
});