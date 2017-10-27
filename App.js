/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TabBarIOS,
  Text,
  View
} from 'react-native';
import Canvas from './components/Canvas';
import WebComponent from './components/WebComponent';
import OpenButton from './components/OpenButton';
import CustomTabBar from './components/CustomTabBar';

const instructions = Platform.select({
  ios: 'You are using "ios"',
  android: 'You are using "android"'
});

export default class App extends Component {
  state={
    gameIsOpen: false,
    page: 'dev'
  }
  openGame=()=>{
    this.setState({gameIsOpen: !this.state.gameIsOpen});
    console.log('log from app');
  }

  onChangeToTest=()=>{
    this.setState({page: 'test'})
  }
  onChangeToDev=()=>{
    this.setState({page: 'dev'})
  }

  render() {
    const toggleView = this.state.gameIsOpen ? <WebComponent {...this.state}/> : null;
    return (
      <View style={styles.container}>
        <Canvas />
          <OpenButton onClick={this.openGame} {...this.state}/>
          { toggleView }
          <CustomTabBar onChange={this.onChangeToTest} onChangeToDev={this.onChangeToDev}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#272727',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  customInput: {
    backgroundColor: '#88d5d2',
    height: 30,
    width: 300,
    marginBottom: 1,
    paddingHorizontal: 5
  },
  
});
