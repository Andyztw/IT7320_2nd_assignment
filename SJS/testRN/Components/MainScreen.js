import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, AppRegistry, Image, ImageBackground} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import { StackNavigator, } from 'react-navigation';

library.add(faStroopwafel)


// class MainScreen extends Component {
//     render() {
//         return ();
//     }
// }

export default MainScreen;

const AppStackNavigator = StackNavigator({
  Main: {
    screen: MainScreen
  }
})
const styles = StyleSheet.create({
    
});

