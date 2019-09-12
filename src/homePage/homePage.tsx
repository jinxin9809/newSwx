import React, {Component} from 'react';
import {View,Text} from 'react-native';
interface State {}
interface Props {}

class HomePage extends Component<Props, State> {
  render() {
    return (
      <View>
        <Text>TypeScript</Text>
      </View>
    );
  }
}

export default HomePage;
