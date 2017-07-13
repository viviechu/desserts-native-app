import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Text } from 'native-base'
import Map from 'react-native-maps'
import {
  StyleSheet,
  View,
} from 'react-native'
import MapLabel from './MapLabel'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebeef0',
  },
  filterbar: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#4169E1',
  },
  map: {
    width: 100,
    height: 200,
  },
  labelView: {
    width: 140,
    height: 100,
  },
})

class MapView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      markers: [
        {
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
        }
      ],
      filters: [
        {
          name: 'Today',
          selected: false
        },
        {
          name: 'This Week',
          selected: false
        },
        {
          name: 'This Weekend',
          selected: false
        }
      ]
    }
  }

  onMapPress(e, index) {
    let markers = this.state.markers
    markers = this.state.markers.map((marker, i) => {
      if (i === index) marker.color = 'orange'
      else marker.color = 'red'
      return marker
    })
    this.setState({
      markers,
    })
  }

  onfilter(filter, index) {
    const filters = this.state.filters
    filters[index].selected = !filters[index].selected
    this.setState({
      filters,
    })
  }


  render() {
    const { markers, filters } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.filterbar}>
          {
            filters.map((filter, i) => (
              <Button bordered info small key={i} onPress={() => this.onfilter(filter, i)} style={{ borderColor: '#A9A9A9', backgroundColor: filter.selected ? '#00CED1' : 'white', marginRight: 5, padding: -8 }}>
                <Text style={{ color: '#A9A9A9' }}>{filter.name}</Text>
              </Button>
            ))
          }
        </View>
        <Map
          style={styles.container}
          showsUserLocation
          initialRegion={{
            latitude: 40.7554778,
            longitude: -73.981885,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {this.state.markers.map((marker, index) => (
            <Map.Marker
              coordinate={markers[index].latlng}
              key={index}
              onPress={(e, i) => this.onMapPress(e, index)}
              pinColor={marker.color}
            >
              <Map.Callout tooltip style={styles.labelView}>
                <MapLabel label={marker} />
              </Map.Callout>
            </Map.Marker>
          ))}
        </Map>
      </View>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
  }
}
function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapView)
