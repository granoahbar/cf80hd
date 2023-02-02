import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import React from 'react'

const AddModal = (props) => {
  return (
      <Modal
      animationType="fade"
      transparent={false}
      visible={props.addModalVisible}
    >
      <View style={styles.container}>
          <TouchableOpacity
            onPress={props.handleCloseAddModal}
            style={styles.button}
          >
          <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
  )
}

export default AddModal

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    overflow: 'hidden',
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 0,
  },
  button: {
    backgroundColor: 'teal',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
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
    color: 'black',
    fontWeight: '700',
    fontSize: 17,
  },
})