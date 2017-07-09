import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS
} from 'react-native'
import { setFormField } from '../common/actions/signup'
import Dashboard from './Dashboard'


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
    color: '#a3a7b2',
    fontSize: 10,
  },
  input: {
    height: 50,
    padding: 4,
    marginRight: 5,
    marginBottom: 10,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  }
})

class SignUp extends Component {

  _onChange(field, event) {
    const value = event.nativeEvent.text
    this.props.dispatchSetFormField(field, value)
  }

  _onSubmit() {
    this.props.navigator.push({
      title: 'Dashboard',
      component: Dashboard
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}> Sign Up with Email </Text>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor="white"
            value={this.props.userEmail}
            onChange={this._onChange.bind(this, 'Email') }
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="white"
            value={this.props.userPassword}
            onChange={this._onChange.bind(this, 'Password') }
          />
          <TouchableHighlight
            style={styles.button}
            onPress={this._onSubmit.bind(this)}
            underlayColor="white"
          >
            <Text style={styles.buttonText}> GET STARTED </Text>
          </TouchableHighlight>
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

SignUp.propTypes = {
  dispatchSetFormField: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
  userEmail: PropTypes.string.isRequired,
  userPassword: PropTypes.string.isRequired,
}

function mapStateToProps(state, ownProps) {
  return {
    isLoading: state.signup.isLoading,
    userEmail: state.signup.userEmail,
    userPassword: state.signup.userPassword,
    showError: state.signup.showError,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    dispatchSetFormField(field, value) {
      dispatch(setFormField(field, value));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
