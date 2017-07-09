import React, { Component } from 'react'
import { connect } from 'react-redux'
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
          description: 'Concert',
          latlng: { latitude: 40.7070877, longitude: -74.0057347 }
        },
        {
          title: 'BRIC Celebrate Brooklyn Festival',
          description: 'Concert',
          latlng: { latitude: 40.6633672, longitude: -74.0466936 }
        },
        {
          title: 'Free Summer Concerts at MOMA',
          description: 'Concert',
          latlng: { latitude: 40.7614327, longitude: -74.0476619 }
        },
        {
          title: 'Shorty Tang',
          description: 'Food',
          latlng: { latitude: 40.7404701, longitude: -74.0727109 }
        }
      ]
    }
  }

  render() {
    const { markers } = this.state
    return (
      <View style={styles.container}>
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
          >
            <Map.Callout tooltip style={styles.labelView}>
              <MapLabel label={marker}/>
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
