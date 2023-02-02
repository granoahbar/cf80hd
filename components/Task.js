import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Task = () => {
  return (
    <TouchableOpacity style={styles.taskContainer}>
        <View style={styles.taskTimeNameContainer}>
            <Text style={styles.taskTime}>3:30pm - 5:00pm</Text>
            <Text style={styles.taskName}>Do biology homework</Text>
        </View>
        <TouchableOpacity title='Completed' style={styles.completedButton}>
            <Text style={styles.completedButtonText}>Done</Text>
        </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default Task

const styles = StyleSheet.create({
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
      taskTimeNameContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
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
      completedButtonText: {
        fontWeight: '600',
        fontSize: 17,
        color: 'white',
        padding: 10,
        paddingRight: 20,
        alignSelf: 'center',
      },
})