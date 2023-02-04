//IMPORTS

import { StyleSheet, Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import RNDateTimePicker from '@react-native-community/datetimepicker';
import React, { useState, useEffect } from 'react'
import { auth } from '../../firebase'
import { firebase } from '../../firebase';

//IMPORTING COMPONENTS

import UserSettingsModal from '../components/UserSettingsModal'
import Task from '../components/Task'
import AddModal from '../components/AddModal'
import EditTaskModal from '../components/EditTaskModal'

const DashScreen = () => {

  // SETTING VARIABLES

    const navigation = useNavigation();
    const [userSettingsModalVisible, setUserSettingsModalVisible] = useState(false);
    const [addModalVisible, setAddModalVisible] = useState(false);
    const [EditTaskModalVisible, setEditTaskModalVisible] = useState(false);
    const [chosenDate, setChosenDate] = useState(new Date())
    const [firstName, setFirstName] = useState('')

    // RETRIEVING DATA

    const userUid = auth.currentUser.uid
    const userDocRef = firebase.firestore().collection('users').doc(userUid)

      userDocRef.get().then(doc => {
        if (doc.exists) {
          setFirstName(doc.get('firstName'))
        } else {
          console.log('could not retrieve name')
        }
      })

    //FUNCTIONS

    const handleSignOut = () => {
      auth
        .signOut()
        .then(() => {
          setUserSettingsModalVisible(false)
          navigation.replace("LoginScreen")
        })
        .catch(error => alert(error.message))
    }

    const handleCloseUserSettingsModal = () => {
      setUserSettingsModalVisible(false)
    }

    const handleCloseAddModal = () => {
      setAddModalVisible(false)
    }

    const handleCloseEditTaskModal = () => {
      setEditTaskModalVisible(false)
    }

    const handleOpenEditTaskModal = () => {
      setEditTaskModalVisible(true)
    }

    const handleOpenUserSettingsModal = () => {
      setUserSettingsModalVisible(true)
    }

    //JSX

  return (
    <SafeAreaView 
        style={styles.container} 
        behavior="padding"
        >

      <StatusBar barStyle="dark-content" />

      <UserSettingsModal 
        userSettingsModalVisible={userSettingsModalVisible} 
        handleSignOut={handleSignOut} 
        handleCloseUserSettingsModal={handleCloseUserSettingsModal}
        firstName={firstName}
      />
      <AddModal addModalVisible={addModalVisible} handleCloseAddModal={handleCloseAddModal}/>
      <EditTaskModal editTaskModalVisible={EditTaskModalVisible} handleCloseEditTaskModal={handleCloseEditTaskModal}/>

      <View style={styles.brandContainer}>
        <RNDateTimePicker value={chosenDate} mode="date" display="calendar" themeVariant="light" accentColor="teal"/>
        <View style={styles.settingsAddContainer}>
          <TouchableOpacity onPress={handleOpenUserSettingsModal}>
            <Icon style={styles.addIcon} name="settings" size={40} color="black"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setAddModalVisible(true)}>
            <Icon style={styles.addIcon} name="add" size={55} color="black"/>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.tasksContainer}>
        <Task handleOpenEditTaskModal={handleOpenEditTaskModal}/>
      </ScrollView> 

    </SafeAreaView>
  )
}

//FILE EXPORT

export default DashScreen

//STYLE SHEET

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
    height: '100%',
  },
  brandContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    height: '10%',
  },
  tasksContainer: {
    display: 'flex',
    flexDirection: 'column',
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
  settingsAddContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
})