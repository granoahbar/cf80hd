//IMPORTS

import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen'
import DashScreen from './screens/DashScreen';

//VARIABLES

const Stack = createNativeStackNavigator();

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
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'left',
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
  }
});