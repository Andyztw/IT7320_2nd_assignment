'use strict'

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, AppRegistry, Image, ImageBackground } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import { StackNavigator } from 'react-navigation';
// import MainScreen from './Components/MainScreen'
library.add(faStroopwafel)


export default class SJS extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  
  render() {
    // const { navigate } = this.props.navigation;
    return (
      <View>
       <ImageBackground source={require('./assets/signInBackgound.png')} style={{width: '100%', height: '100%'}}>
          <Image style={{alignSelf: 'center', width: "50%", height: "23%", marginTop: 50, bottom: 0}} source={require('./assets/brand.png')} resizeMode="stretch"/>
          <View style={styles.textInputContainer}>
              <View styles={styles.tittleContainer}>
                <Text style={styles.access}>Email</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({text})}
                  />
              </View>
          <Text style={styles.fillInLine}>
                ______________________________________________________
          </Text>
          <View style={styles.tittleContainer}>
            <Text style={styles.access}>Password</Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={(text) => this.setState({text})}
                />
          </View>    
          <Text style={styles.fillInLine}>
                ______________________________________________________
          </Text>      
          </View>
          <View style={styles.buttonContainer}>
              <Button 
              // onPress={() => navigate('MainScreen') }
              raised with icon
              icon={{name: 'arrow-right', type: 'octicon', color: 'red', buttonStyle: styles.someButtonStyle}}
              backgroundColor='rgba(254, 254, 254, 1)'
              color='red'
              rounded
              title='SIGN IN' />
              <Button
              raised with icon
              icon={{name: 'mail' ,type: 'octicon', color: 'white', buttonStyle: styles.someButtonStyle}}
              backgroundColor='rgba(254, 254, 254, 0.1)'
              color='white'
              rounded
              title='REGISTER' />
          </View>
       </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInputContainer: {
    marginTop: 0,
    paddingTop: 0,
    justifyContent: 'center',
    flex:1,
    paddingLeft: 20,
    fontSize: 15
  },
  tittleContainer: {
    justifyContent: 'center'
  },
  access: {
     fontSize: 15,
     color: 'white'
  },
  textInput: {
    fontSize: 20,
    marginBottom: 0,
    color: 'black',

  },
  fillInLine: {
    color: 'white',
    paddingTop: 0,
    marginTop: 0,
    marginBottom: 10
  },
  buttonContainer: {
    bottom: 75,
    padding: 20
  }
});

