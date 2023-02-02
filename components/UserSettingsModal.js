import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import { auth } from '../firebase'
import React from 'react'

const UserSettingsModal = (props) => {
    const { modalVisible } = props

  return (
    <Modal
    animationType="slide"
    transparent={false}
    visible={modalVisible}
    style={styles.settingsModal}
  >

     <View style={styles.container}>
        <Text style={styles.userEmailSettingsPage}>{auth.currentUser?.email}</Text>
        <TouchableOpacity
          onPress={props.handleSignOut}
          style={[styles.button, styles.buttonSignOut]}
        >
        <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={props.handleCloseModal}
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
        backgroundColor: 'teal',
        width: '100%',
        overflow: 'hidden',
        flex: 1,
        justifyContent: 'center',
      },
      buttonContainer: {
        marginTop: 0,
      },
      button: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        color: 'white',
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