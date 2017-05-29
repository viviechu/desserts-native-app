import React, {Component} from 'react';
import {StyleSheet, NavigatorIOS} from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from '../common/reducers';
import RootApp from '../components/RootApp';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigatorIOS
          initialRoute={{
          component: RootApp,
          title: 'Home',
       }}
       style={{flex: 1}}
      />
      </Provider>
    );
  }
}
