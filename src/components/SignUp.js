import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS
} from 'react-native';

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
   color: '#F5F5F5'
 },
 main: {
   flex: 10,
   marginTop: 65,
   padding: 30,
   backgroundColor: '#23cfb9'
 },
 footer: {
   flex: 1,
   alignItems: 'center',
 },
 footerText: {
  color: "#a3a7b2",
  fontSize: 10,
},
input: {
  height: 50,
  padding: 4,
  marginRight: 5,
  fontSize: 23,
  borderWidth: 1,
  borderColor: 'white',
  borderRadius: 8,
  color: 'white'
}
});

export default class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
            <Text style={styles.title}> Sign Up with Email </Text>
            <TextInput
              style={styles.input}
               />
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            By signing up, you agree to our Terms & Conditions and Privacy Policy
          </Text>
        </View>
      </View>
    )
  }
}
