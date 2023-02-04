//IMPORTS

import { StyleSheet, Text, View, Button, KeyboardAvoidingView, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Dimensions } from 'react-native';
import React, { useState } from 'react'
import { auth } from '../../firebase';
import { firebase } from '../../firebase'

const LoginScreen = () => {

    //VARIABLES

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const navigation = useNavigation();

    //FUNCTIONS

      const handleSignUp = () => {
        auth
          .createUserWithEmailAndPassword(email, password)
          .then(userCredentials => {
              const user = userCredentials.user
              // Add the code to set the uid and first and last name field in the Firestore table
              const uid = user.uid;
              const userRef = firebase.firestore().collection('users').doc(uid);
              userRef.set({
                uid: uid,
                firstName: firstName,
                lastName: lastName,
                tasksCompleted: 0
              }, { merge: true });
              if (user) {
                navigation.navigate("DashScreen")
              } 
          })
          .catch(error => alert(error.message))
      }

        //JSX

  return (
    <KeyboardAvoidingView 
        style={styles.container} 
        behavior="padding"
        >

      <StatusBar barStyle="dark-content" />

      <View style={styles.brandContainer}>
        <Text style={styles.brandText}>CLEAR FOCUS</Text>
        <Text style={[styles.brandTextColor, styles.brandText]}>80HD</Text>
      </View>

      <View style={styles.headingContainer}>
        <View style={styles.listItem}>
            <Text style={styles.emoji}>{'\u{1F9D8}'}</Text>
            <Text style={styles.listText}>Simple visuals to assist those with an easily overstimulated mind.</Text>
        </View>
        <View style={styles.listItem}>
            <Text style={styles.emoji}>{'\u{1F91D}'}</Text>
            <Text style={styles.listText}>Suggestions to assist in prioritization.</Text>
        </View>
        <View style={styles.listItem}>
            <Text style={styles.emoji}>{'\u{1F929}'}</Text>
            <Text style={styles.listText}>Earn badges and see your progress.</Text>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.nameInputContainer}>
            <TextInput 
                placeholder="First Name"
                value= {firstName}
                onChangeText={text => setFirstName(text)}
                style={[styles.input, styles.nameInputs, styles.firstNameInput]}
            />
            <TextInput 
                placeholder="Last Name"
                value= {lastName}
                onChangeText={text => setLastName(text)}
                style={[styles.input, styles.nameInputs]}
            />
        </View>

        <TextInput 
            placeholder="Email"
            value= {email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
        />
        <TextInput 
            placeholder="Password"
            value= {password}
            onChangeText={text => setPassword(text)}
            style={styles.inputPassword}
            secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
            onPress= {handleSignUp}
            style={styles.button}
        >
            <Text style={styles.loginButtonText}>Sign up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.switchButtonContainer}>
            <Text style={styles.switchButtonText}>Already have an account?</Text>
            <Button 
            style={[styles.switchButtonText, styles.switchButtonTextSec]}
            title= "Login"
            onPress={() => navigation.navigate('LoginScreen')}
            >
            </Button>
      </View>

    </KeyboardAvoidingView>
  )
}

//FILE EXPORT

export default LoginScreen

//STYLE SHEET

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'whitesmoke',
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
        marginTop: 0,
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
    buttonContainer: {
        margin: 20,
        marginTop: 0,
    },
    button: {
        backgroundColor: 'black',
        width: '100%',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        color: 'white',
    },
    loginButtonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
    },
    bottomButton: {
        marginTop: 5,
    },
    headingContainer: {
        width: '80%',
        margin: 20,
    },
    headingText: {
        fontWeight: '500',
        fontSize: 20,
    },
    listText: {
        fontWeight: '400',
        fontSize: 18,
    },
    brandContainer: {
        width: '80%',
        margin: 20,
    },
    brandText: {
        fontWeight: '800',
        fontSize: 45,
    }, 
    switchButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
    },
    switchButtonText: {
        color: 'black',
        fontWeight: '400',
        fontSize: 17,
    },
    switchButtonTextSec : {
        color: 'dodgerblue',
        paddingLeft: 8,
    },
    emoji : {
        fontSize: 35,
        marginRight: 20,
    },
    listItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        marginRight: 20,
    },
    nameInputContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    nameInputs: {
        width: (screenWidth - 60) / 2,
    },
    firstNameInput: {
        marginRight: 0,
    },
})