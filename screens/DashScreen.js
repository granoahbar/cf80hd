//IMPORTS

import { StyleSheet, Text, View, Button, Modal, KeyboardAvoidingView, TextInput, Image, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { auth } from '../firebase'

const DashScreen = () => {

  //VARIABLES

    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    //FUNCTIONS

      const handleSignOut = () => {
        auth
          .signOut()
          .then(() => {
            navigation.replace("Login")
          })
          .catch(error => alert(error.message))
      }

      //JSX

  return (
    <SafeAreaView 
        style={styles.container} 
        behavior="padding"
        >

      <StatusBar barStyle="dark-content" />

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
         <View style={styles.container}>
    <Text>{auth.currentUser?.email}</Text>
    <TouchableOpacity
      onPress={handleSignOut}
      style={styles.button}
    >
      <Text style={styles.buttonText}>Sign out</Text>
    </TouchableOpacity>
    </View>
      </Modal>

      <View style={styles.brandContainer}>
        <View>
          <Text style={styles.brandText}>Your day</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.displayEmail}>
            <Text>{auth.currentUser?.email}</Text>
          </TouchableOpacity>
        </View>
        <Icon style={styles.addIcon} name="add" size={95} color="black" />
      </View>

      <ScrollView style={styles.tasksContainer}>

        <TouchableOpacity style={styles.taskContainer}>
          <View style={styles.taskTimeNameContainer}>
            <Text style={styles.taskTime}>9:30am - 10:30am</Text>
            <Text style={styles.taskName}>Do the dishes</Text>
          </View>
          <TouchableOpacity title='Completed' style={styles.completedButton}>
            <Text style={styles.completedButtonText}>Done</Text>
          </TouchableOpacity>
        </TouchableOpacity>

      </ScrollView>

      <View style={styles.recContainer}>

      <Text style={styles.recTasksHeader}>Quick Suggestions</Text>

        <View style={[styles.taskContainer, styles.taskContainerQuickRec]}>
          <View style={styles.taskTimeNameContainer}>
            <Text style={styles.taskTime}>9:30am - 10:30am</Text>
            <Text style={styles.taskName}>Do the dishes</Text>
          </View>
          <View style={styles.recButtonsContainer}>
            <Text style={styles.completedButtonText}>Nope</Text>
            <Text style={styles.completedButtonText}>Add</Text>
          </View>
        </View>

      </View>

    </SafeAreaView>
  )
}

//FILE EXPORT

export default DashScreen

//STYLE SHEET

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    marginTop: 20,
  },
  displayEmail: {
    fontSize: 15,
    marginLeft: 10,
    color: 'black',
  },
  brandContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginBottom: 20,
    height: '10%',
  },
  recContainer: {
    height: '10%',
    margin: 20,
    marginLeft: 0,
    marginRight: 0,
  },
  brandText: {
    fontWeight: '500',
    fontSize: 60,
  }, 
  tasksContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '80%',
  },
  taskContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    backgroundColor: 'teal',
    color: 'white',
    margin: 20,
    marginBottom: 0,
    borderRadius: 7,
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
    fontWeight: '600',
    fontSize: 17,
    color: 'white',
    padding: 10,
    paddingRight: 20,
    alignSelf: 'center',
  },
  recTasksHeader: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 25,
    color: 'black',
  },
  taskContainerQuickRec: {
    backgroundColor: 'cadetblue',
  },
  recButtonsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  addIcon: {
    alignSelf: 'center',
  }
})