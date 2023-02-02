import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import React from 'react'

const RecommendedTask = () => {
  return (
    <Modal style={styles.recContainer}>

    <Text style={styles.recTasksHeader}>Recommends</Text>

      <View style={[styles.taskContainer, styles.taskContainerQuickRec]}>
        <View style={styles.taskTimeNameContainer}>
          <Text style={styles.taskTime}>9:30am - 10:30am</Text>
          <Text style={styles.taskName}>Do the dishes</Text>
        </View>
        <View style={styles.recButtonsContainer}>
        <TouchableOpacity title='Nope' style={styles.completedButton}>
          <Text style={styles.completedButtonText}>Nope</Text>
        </TouchableOpacity>
        <TouchableOpacity title='Add' style={styles.completedButton}>
          <Text style={styles.completedButtonText}>Add</Text>
        </TouchableOpacity>
        </View>
      </View>

    </Modal>
  )
}

export default RecommendedTask

const styles = StyleSheet.create({
  recContainer: {
    height: '15%',
    margin: 20,
    marginLeft: 0,
    marginRight: 0,
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
  completedButtonText: {
    fontWeight: '600',
    fontSize: 17,
    color: 'white',
    padding: 10,
    paddingRight: 20,
    alignSelf: 'center',
  },
  completedButton: {
    fontWeight: '700',
    width: 'auto',
    height: 'auto',
    alignItems: 'center',
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
  taskTimeNameContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
  },
})