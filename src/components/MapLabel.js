import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';


class MapLabel extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {label} = this.props
    return (
      <View style={[styles.container, this.props.style]}>
         <View style={styles.bubble}>
           <View style={styles.amount}>
             <Text style={styles.title}>{label.title}</Text>
              <Text style={styles.description}>{label.description}</Text>
             <TouchableHighlight
                style={styles.button}
                underlayColor="white">
                    <Text style={styles.buttonText}> Yelp </Text>
              </TouchableHighlight>
           </View>
         </View>
         <View style={styles.arrowBorder} />
         <View style={styles.arrow} />
       </View>
    );
  }
}

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
  }
});

module.exports = MapLabel;
