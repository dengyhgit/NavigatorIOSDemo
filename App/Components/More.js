'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
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
    top: 100,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

class More extends React.Component{

  

  onPress() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <TouchableHighlight onPress={this.onPress} style={styles.button} underlayColor='#ffffcc' >
          <Text style={styles.text}>{this.props.myProp}</Text>
        </TouchableHighlight>
      </View>
    );
  }
};

module.exports = More;
