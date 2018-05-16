import React from 'react';
import ReactDOM from 'react-dom';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import './index.css'

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box} >
        </View>
        <View style={styles.box} >
        </View>
        <View style={[styles.box, { backgroundColor: 'blue' }]} >
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  }
});

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', { rootTag: document.getElementById('root') });
