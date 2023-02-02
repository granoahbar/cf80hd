//IMPORTS

import { StyleSheet, Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { auth } from '../firebase'

//IMPORTING COMPONENTS

import UserSettingsModal from '../components/UserSettingsModal'
import Task from '../components/Task'

const DashScreen = () => {

  // SETTING VARIABLES

    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    //FUNCTIONS

    const handleSignOut = () => {
      auth
        .signOut()
        .then(() => {
          setModalVisible(false)
          navigation.replace("LoginScreen")
        })
        .catch(error => alert(error.message))
    }

    const handleCloseModal = () => {
      setModalVisible(false)
    }

    //JSX

  return (
    <SafeAreaView 
        style={styles.container} 
        behavior="padding"
        >

      <StatusBar barStyle="dark-content" />

      <UserSettingsModal modalVisible={modalVisible} handleSignOut={handleSignOut} handleCloseModal={handleCloseModal}/>

      <View style={styles.brandContainer}>
        <View>
          <Text style={styles.brandText}>Your day</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.displayEmail}>
            <Text style={styles.userEmail}>{auth.currentUser?.email}</Text>
          </TouchableOpacity>
        </View>
        <Icon style={styles.addIcon} name="add" size={90} color="black" />
      </View>

      <ScrollView style={styles.tasksContainer}>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </ScrollView>

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
    height: '15%',
    margin: 20,
    marginLeft: 0,
    marginRight: 0,
  },
  brandText: {
    fontWeight: '600',
    fontSize: 62,
  }, 
  tasksContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '90%',
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
  },
  buttonContainer: {
    margin: 20,
    marginTop: 0,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    color: 'white',
    margin: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
  },
  userEmailSettingsPage: {
    textAlign: 'center',
  },
  settingsModal: {
    width: '100%',
    height: 500,
  },
  userEmail: {
    fontSize: 16,
  },
})