import React, { Component } from "react";
import RootStackNavigator from "./js/navigation/RootStackNavigator";
import { ApolloProvider } from "react-apollo";
import client from "./js/config/api";
import SplashScreen from "react-native-splash-screen";
import { LessonsProvider } from "./js/context";

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <LessonsProvider>
          <RootStackNavigator />
        </LessonsProvider>
      </ApolloProvider>
    );
  }
}
