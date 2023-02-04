import { StyleSheet, Text, View, Modal, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

const AddModal = (props) => {
  return (
      <Modal
      animationType="fade"
      transparent={false}
      visible={props.addModalVisible}
    >
      <View style={styles.container}>
          <View style={styles.inputContainer}>
            <TextInput 
                placeholder="Email"
                // value= {email}
                // onChangeText={text => setEmail(text)}
                style={styles.input}
            />
            <TextInput 
                placeholder="Password"
                // value= {password}
                // onChangeText={text => setPassword(text)}
                style={styles.inputPassword}
                secureTextEntry
            />
          </View>
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
    backgroundColor: 'whitesmoke',
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
  inputContainer: {
    width: '100%',
    margin: 20,
    alignSelf: 'center',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    margin: 20,
    fontSize: 20,
  },
  inputPassword: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    margin: 20,
    marginBottom: 0,
    marginTop: 0,
    fontSize: 20,
  },
})