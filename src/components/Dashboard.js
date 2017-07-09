import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TabViewAnimated, TabBar } from 'react-native-tab-view'
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native'
import ListView from './ListView'
import MapView from './MapView'


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: '#87CEFA',
  },
  tab: {
    width: Dimensions.get('window').width / 2,
  },
  indicator: {
    backgroundColor: '#4682B4',
  },
  label: {
    color: 'white',
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 16,
    margin: 10,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    backgroundColor: '#222',
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  }
})


class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      routes: [
          { key: '1', title: 'List View' },
          { key: '2', title: 'Map View' },
      ],
    }
  }

  _handleChangeTab(index) {
    this.setState({ index })
  }

  renderHeader(props) {
    return (
      <TabBar
        {...props}
        scrollEnabled
        indicatorStyle={styles.indicator}
        style={styles.tabbar}
        tabStyle={styles.tab}
        labelStyle={styles.label}
      />
    )
  }

  renderScene({ route }) {
    switch (route.key) {
    case '1':
      return (
        <ListView />
      )
    case '2':
      return (
        <MapView />
      )
    default:
      return null
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar} />
        <TabViewAnimated
          style={styles.container}
          navigationState={this.state}
          renderScene={this.renderScene}
          renderHeader={this.renderHeader}
          onRequestChangeTab={this._handleChangeTab.bind(this)}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
