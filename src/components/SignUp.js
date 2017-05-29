import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'flex-start',
   alignItems: 'center',
   backgroundColor: '#FBB352'
 },
});


export default class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Bla</Text>
      </View>
    )
  }
}
