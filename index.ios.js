'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} from 'react-native';

var Home = require('./App/Components/Home');
var More = require('./App/Components/More');

var styles = StyleSheet.create({
  container:{
    flex: 1,
  }
});

class ExamBank_iOS extends Component {

  constructor(props) {
      super(props);
      this.handleNavigationRequest = this.handleNavigationRequest.bind(this);
  }

  handleNavigationRequest() {
    this.refs.nav.push({
      component: More,
      title: 'More',
      passProps: { myProp: '快来碗里' },
    });
  }

  render() {
    return (
      <NavigatorIOS
        ref='nav'
        style={styles.container}
        barTintColor='#ffffcc'
        initialRoute={{
          title: 'NavigatorIOS',
          component: Home,
          rightButtonTitle: 'More',
          onRightButtonPress: () => this.handleNavigationRequest(),
        }} />
    );
  }
};

AppRegistry.registerComponent('ExamBank_iOS', () => ExamBank_iOS);
