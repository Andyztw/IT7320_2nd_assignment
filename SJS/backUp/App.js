import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, AppRegistry, Image, ImageBackground} from 'react-native';
import { Button } from 'react-native-elements';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.background}>
       <ImageBackground source={require('./assets/signInBackgound.png')} style={{width: '100%', height: '100%'}}>
          <Image style={{alignSelf: 'center', width: "60%", height: "27%", marginTop: 50}} source={require('./assets/brand.png')} resizeMode="stretch"/>
          <Text style={{padding: 30}}/>
          <TextInput
            style={styles.textInput}
            placeholder="Account"
            onChangeText={(text) => this.setState({text})}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            onChangeText={(text) => this.setState({text})}
          />
          <Text style={{padding: 20}}/>
          <Button
          raised with icon
          icon={{name: 'squirrel', type: 'octicon', color: 'red', buttonStyle: styles.someButtonStyle}}
          backgroundColor='rgba(254, 254, 254, 1)'
          color='red'
          rounded='true'
          title='SIGN IN' />
          <Button
          raised with icon
          icon={{name: 'squirrel', type: 'octicon', color: 'white', buttonStyle: styles.someButtonStyle}}
          backgroundColor='rgba(254, 254, 254, 0.1)'
          color='white'
          rounded='true'
          title='REGISTER' />
       </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#E4E5E5',
  },
  heading: {
    padding: 30,
    marginTop: 200,
    marginBottom: 10,
    textAlign: 'center',
  },
  textInput: {
    paddingLeft: 30,
    fontSize: 15,
    color: '#656565',
    marginTop: 10,
    marginBottom: 10
  },
  button_1: {
    backgroundColor: 'white',
    padding: 10,
    fontSize: 30,
    marginTop: 10,
    marginBottom: 40
  },
});

