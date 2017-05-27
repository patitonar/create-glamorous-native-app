import React from 'react';
import {View, Text} from 'glamorous-native';

export default class App extends React.Component {
  render() {
    return (
      <View flex={1} backgroundColor="#fff" justifyContent="center" alignItems="center">
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}
