import React, { Component } from 'react';
import { connect } from 'react-redux';

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
   color: '#4169E1'
 },
});

class ListView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
            <Text style={styles.title}> List View </Text>
      </View>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
  };
}
function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
