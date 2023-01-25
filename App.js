//IMPORTS

import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen'
import DashScreen from './src/screens/DashScreen';

//VARIABLES

const Stack = createNativeStackNavigator();

export default function App() {

  //JSX

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Signup" component={SignUpScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Dash" component={DashScreen} />
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