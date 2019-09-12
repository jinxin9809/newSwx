import React from 'react'
import { Component } from 'react';
import AppContainer from './src/navigation/index'
//@ts-ignore
import { Provider } from 'react-redux';
import store from './src/redux/store'
type Props = {};
type State = {};
export default class App extends Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <AppContainer  />
      </Provider>
    );
  }
}
