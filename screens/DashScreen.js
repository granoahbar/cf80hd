//IMPORTS

import { StyleSheet, Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { auth } from '../firebase'

import UserSettingsModal from '../components/UserSettingsModal'

const DashScreen = () => {

    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

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
            <Text>{auth.currentUser?.email}</Text>
          </TouchableOpacity>
        </View>
        <Icon style={styles.addIcon} name="add" size={95} color="black" />
      </View>

      <ScrollView style={styles.tasksContainer}>

        <TouchableOpacity style={styles.taskContainer}>
          <View style={styles.taskTimeNameContainer}>
            <Text style={styles.taskTime}>9:30am - 10:30am</Text>
            <Text style={styles.taskName}>Take dogs for walk</Text>
          </View>
          <TouchableOpacity title='Completed' style={styles.completedButton}>
            <Text style={styles.completedButtonText}>Done</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskContainer}>
          <View style={styles.taskTimeNameContainer}>
            <Text style={styles.taskTime}>10:30am - 11:30am</Text>
            <Text style={styles.taskName}>Do the dishes</Text>
          </View>
          <TouchableOpacity title='Completed' style={styles.completedButton}>
            <Text style={styles.completedButtonText}>Done</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskContainer}>
          <View style={styles.taskTimeNameContainer}>
            <Text style={styles.taskTime}>11:30am - 11:45am</Text>
            <Text style={styles.taskName}>Feed the dogs</Text>
          </View>
          <TouchableOpacity title='Completed' style={styles.completedButton}>
            <Text style={styles.completedButtonText}>Done</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskContainer}>
          <View style={styles.taskTimeNameContainer}>
            <Text style={styles.taskTime}>1:30pm - 3:00pm</Text>
            <Text style={styles.taskName}>Biology class</Text>
          </View>
          <TouchableOpacity title='Completed' style={styles.completedButton}>
            <Text style={styles.completedButtonText}>Done</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskContainer}>
          <View style={styles.taskTimeNameContainer}>
            <Text style={styles.taskTime}>3:30pm - 5:00pm</Text>
            <Text style={styles.taskName}>Do biology homework</Text>
          </View>
          <TouchableOpacity title='Completed' style={styles.completedButton}>
            <Text style={styles.completedButtonText}>Done</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskContainer}>
          <View style={styles.taskTimeNameContainer}>
            <Text style={styles.taskTime}>6:00pm - 7:00pm</Text>
            <Text style={styles.taskName}>Dinner</Text>
          </View>
          <TouchableOpacity title='Completed' style={styles.completedButton}>
            <Text style={styles.completedButtonText}>Done</Text>
          </TouchableOpacity>
        </TouchableOpacity>
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
    fontSize: 60,
  }, 
  tasksContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '90%',
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
    height: 55,
  },
  taskName: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
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
  }
})