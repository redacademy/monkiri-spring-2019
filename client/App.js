import React, { Component } from "react";
import { View } from "react-native";
import RootStackNavigator from "./js/navigation/RootStackNavigator";
import { ApolloProvider } from "react-apollo";
import client from "./js/config/api";

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootStackNavigator />
      </ApolloProvider>
    );
  }
}
