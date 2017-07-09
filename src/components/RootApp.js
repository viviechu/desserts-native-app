import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import Swiper from 'react-native-swiper'
import SignUp from './SignUp'

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 300,
  },
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'stretch',
  },
  heading: {
    fontSize: 20,
    fontWeight: '500',
    color: '#F5F5F5',
    padding: 10,
    margin: 20,
  },
})

export default class Home extends Component {

  _onForward() {
    this.props.navigator.push({
      component: SignUp,
      title: 'Sign Up',
    })
  }

  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons>
        <View style={styles.slide}>
          <Image source={require('../../static/images/jumbotron-with-opacity.png')} style={styles.backgroundImage}>
            <Text style={styles.heading}>Got a sweet tooth? We&#39;ve got the cure!</Text>
            <TouchableOpacity style={styles.button} onPress={this._onForward.bind(this)}>
              <Text style={{ fontWeight: '700' }}>Sign Up</Text>
            </TouchableOpacity>
          </Image>
        </View>
        <View style={styles.slide}>
          <Image source={require('../../static/images/v3_background.png')} style={styles.backgroundImage}>
            <Text style={styles.heading}>Receive 4 vouchers every month</Text>
          </Image>
        </View>
        <View style={styles.slide}>
          <Image source={require('../../static/images/v2_background.png')} style={styles.backgroundImage}>
            <Text style={styles.heading}>Venture out to all the sweet treats!</Text>
          </Image>
        </View>
      </Swiper>
    )
  }
}

Home.propTypes = {
    navigator: PropTypes.object.isRequired,
}
