import { StyleSheet, Text, View, Modal, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

const { height } = Dimensions.get('window');

const UserSettingsModal = (props) => {

  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={props.userSettingsModalVisible}
    style={styles.settingsModal}
  >

     <View style={styles.container}>
        <Text style={styles.userEmailSettingsPage}>Hey {props.firstName}!</Text>
        <TouchableOpacity
          onPress={props.handleSignOut}
          style={[styles.button, styles.buttonSignOut]}
        >
        <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={props.handleCloseUserSettingsModal}
          style={styles.button}
        >
        <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
    </View>

  </Modal>
  )
}

export default UserSettingsModal

const styles = StyleSheet.create({
    container: {
        height: height * 0.25,
        backgroundColor: 'teal',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      },
      buttonContainer: {
        marginTop: 0,
      },
      button: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        width: '80%',
        margin: 20,
        marginTop: 0,
      },
      buttonSignOut: {
        marginTop: 20,
      },
      buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
      },
      userEmailSettingsPage: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '700',
        fontSize: 25,
      },
})