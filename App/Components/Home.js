'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

var styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  button:{
    top: 100,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

var Other = require('./Other');

class Home extends React.Component{
  constructor(props) {
      super(props);
      this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.props.navigator.push({
      title: 'Other',
      component: Other
    });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <TouchableHighlight
          onPress={this.onPress}
          style={styles.button}
          underlayColor='#ffffcc'
          >
          <Text style={styles.text}>Welcome to the NavigatorIOS . Press here!</Text>
        </TouchableHighlight>
      </View>
    );
  }
};

module.exports = Home;
