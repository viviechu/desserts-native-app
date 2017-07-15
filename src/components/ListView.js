import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7f9'
  },
  buttonText: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#4169E1'
  },
  rowContainer: {
    padding: 10
  },
  rowTitle: {
    color: 'orange',
    fontSize: 16
  },
  rowContent: {
    fontSize: 19
  }
})

export default class ListView extends Component {
  render() {
    const listItem = [  {
        title: 'Blue Note Jazz Festival',
        category: 'Concert',
        latlng: { latitude: 40.7070877, longitude: -74.0057347 },
        color: 'red',
        startDate: '',
        endDate: ''
      },
      {
        title: 'BRIC Celebrate Brooklyn Festival',
        category: 'Concert',
        latlng: { latitude: 40.6633672, longitude: -74.0466936 },
        color: 'red',
        startDate: '',
        endDate: ''
      },
      {
        title: 'Free Summer Concerts at MOMA',
        category: 'Concert',
        latlng: { latitude: 40.7614327, longitude: -74.0476619 },
        color: 'red',
        startDate: '',
        endDate: ''
      },
      {
        title: 'Shorty Tang',
        category: 'Food',
        latlng: { latitude: 40.7404701, longitude: -74.0727109 },
        color: 'red',
        startDate: '',
        endDate: ''
      }]
    return (
      <ScrollView style={styles.container}>
        {
          listItem.map((item, index) => {
            return (
              <View key={index}>
                <View style={styles.rowContainer}>
                  <Text style={styles.rowTitle}>{item.title}</Text>
                  <Text style={styles.rowContainer}>{item.category}</Text>
                </View>
              </View>
            )
          })
        }

      </ScrollView>
    )
  }
}
