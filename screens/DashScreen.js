//IMPORTS

import { StyleSheet, Text, View, Button, KeyboardAvoidingView, TextInput, Image, TouchableOpacity, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { auth } from '../services/firebase'

const DashScreen = () => {

  //VARIABLES

    const navigation = useNavigation();

    //FUNCTIONS

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            navigation.navigate("Dash")
          } 
        });
        unsubscribe
      }, []);

      //JSX

  return (
    <SafeAreaView 
        style={styles.container} 
        behavior="padding"
        >

      <StatusBar barStyle="dark-content" />

      <View style={styles.brandContainer}>
        <Text style={styles.brandText}>Your day</Text>
      </View>

      <View style={styles.tasksContainer}>

        <TouchableOpacity style={styles.taskContainer}>
          <View style={styles.taskTimeNameContainer}>
            <Text style={styles.taskTime}>9:30am - 10:30am</Text>
            <Text style={styles.taskName}>Do the dishes</Text>
          </View>
          <TouchableOpacity title='Completed' style={styles.completedButton}>
            <Text style={styles.completedButtonText}>Completed</Text>
          </TouchableOpacity>
        </TouchableOpacity>

      </View>

      <View style={styles.recContainer}>
      </View>

    </SafeAreaView>
  )
}

//FILE EXPORT

export default DashScreen

//STYLE SHEET

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    marginTop: 20,
  },
  brandContainer: {
    width: '80%',
    height: '10%',
    margin: 20,
  },
  recContainer: {
    height: '20%',
    margin: 20,
  },
  brandText: {
    fontWeight: '700',
    fontSize: 55,
  }, 
  tasksContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '70%',
  },
  taskContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    backgroundColor: 'black',
    color: 'white',
    margin: 20,
    marginBottom: 0,
    borderRadius: 6,
  },
  taskName: {
    color: 'white',
    fontWeight: '500',
    fontSize: 25,
  },
  taskTime: {
    color: 'white',
    fontWeight: '400',
  },
  completedButton: {
    fontWeight: '700',
    width: 'auto',
    height: 'auto',
    alignItems: 'center',
  },
  taskTimeNameContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
  },
  completedButtonText: {
    fontWeight: '500',
    fontSize: 25,
    color: 'skyblue',
    padding: 10,
    alignSelf: 'center',
  },
})