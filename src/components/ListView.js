import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f4f7f9'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#4169E1'
  },
})

export default class ListView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> List View </Text>
      </View>
    )
  }
}
