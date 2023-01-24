import { StyleSheet, Text, View, Button, KeyboardAvoidingView, TextInput, Image, TouchableOpacity, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation();

  return (
    <KeyboardAvoidingView 
        style={styles.container} 
        behavior="padding"
        >

      <StatusBar barStyle="dark-content" />

      <View style={styles.brandContainer}>
        <Text style={styles.brandText}>WELCOME TO CLEAR FOCUS!</Text>
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
            // onPress= {signUp}
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
            onPress={() => navigation.navigate('Login')}
            >
            </Button>
      </View>

    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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
        fontWeight: '700',
        fontSize: 50,
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
})