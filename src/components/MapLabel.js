import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  bubble: {
    width: 140,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#f4f7f9',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 6,
    borderColor: '#007a87',
    borderWidth: 0.5,
  },
  amount: {
    flex: 1,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderWidth: 16,
    borderColor: 'transparent',
    borderTopColor: '#f4f7f9',
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderWidth: 16,
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    alignSelf: 'center',
    marginTop: -0.5,
  },
  title: {
    marginTop: -0.5,
    marginBottom: 2,
    fontSize: 15,
    textAlign: 'center',
    color: '#23cfb9'
  },
  description: {
    marginTop: 1,
    fontSize: 10,
    textAlign: 'center',
    color: '#23cfb9'
  },
  button: {
    height: 20,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 5,
    marginTop: 5,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  yelpButton: {
    fontFamily: 'Arial',
    fontSize: 10,
    color: 'white',
  }
})
class MapLabel extends Component {
  linkToYelp() {
    console.log('herere')

  }
  render() {
    const { label } = this.props
    const yelpButton = (
      <Icon.Button name="yelp" backgroundColor="#d32323" onPress={this.linkToYelp} size={13}>
        <Text style={styles.yelpButton}>Yelp Review</Text>
      </Icon.Button>
    )
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.bubble}>
          <View style={styles.amount}>
            <Text style={styles.title}>{label.title}</Text>
            {label.category === 'Food' ? yelpButton : null}
          </View>
        </View>
        <View style={styles.arrowBorder} />
        <View style={styles.arrow} />
      </View>
    )
  }
}


MapLabel.propTypes = {
  label: PropTypes.object.isRequired,
}

module.exports = MapLabel
