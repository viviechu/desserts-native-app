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
   marginTop:65,
 },
 image: {
   height: 300
 },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  }
});


class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.buttonText}>yaya</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
