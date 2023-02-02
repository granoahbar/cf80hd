//IMPORTS

import { StyleSheet, Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { auth } from '../../firebase'

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

    //JSX

  return (
    <SafeAreaView 
        style={styles.container} 
        behavior="padding"
        >

      <StatusBar barStyle="dark-content" />

      <UserSettingsModal userSettingsModalVisible={userSettingsModalVisible} handleSignOut={handleSignOut} handleCloseUserSettingsModal={handleCloseUserSettingsModal}/>
      <AddModal addModalVisible={addModalVisible} handleCloseAddModal={handleCloseAddModal}/>
      <EditTaskModal editTaskModalVisible={EditTaskModalVisible} handleCloseEditTaskModal={handleCloseEditTaskModal}/>

      <View style={styles.brandContainer}>
        <View>
          <Text style={styles.brandText}>Your day</Text>
          <TouchableOpacity onPress={() => setUserSettingsModalVisible(true)} style={styles.displayEmail}>
            <Text style={styles.userEmail}>{auth.currentUser?.email}</Text>
          </TouchableOpacity>
        </View>
          <TouchableOpacity onPress={() => setAddModalVisible(true)}>
            <Icon style={styles.addIcon} name="add" size={90} color="black"/>
          </TouchableOpacity>
      </View>

      <ScrollView style={styles.tasksContainer}>
        <Task handleOpenEditTaskModal={handleOpenEditTaskModal}/>
        <Task handleOpenEditTaskModal={handleOpenEditTaskModal}/>
        <Task handleOpenEditTaskModal={handleOpenEditTaskModal}/>
        <Task handleOpenEditTaskModal={handleOpenEditTaskModal}/>
        <Task handleOpenEditTaskModal={handleOpenEditTaskModal}/>
        <Task handleOpenEditTaskModal={handleOpenEditTaskModal}/>
        <Task handleOpenEditTaskModal={handleOpenEditTaskModal}/>
        <Task handleOpenEditTaskModal={handleOpenEditTaskModal}/>
        <Task handleOpenEditTaskModal={handleOpenEditTaskModal}/>
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
    marginBottom: 40,
    height: '10%',
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