import { SearchBar } from "react-native-elements";
import React, { Component } from "react";

export default class SearchBarComponent extends React.Component {
  state = {
    search: ""
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder=""
        onChangeText={this.updateSearch}
        value={search}
        lightTheme={true}
        containerStyle={{backgroundColor: 'white', borderRadius: 10, shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowColor: "grey",
        shadowRadius: 2,
        shadowOffset: { height: 3, width: 0 },
        shadowRadius: 3}}
        inputContainerStyle={{backgroundColor: 'white'}}
        searchIcon={{color: "#25BDD8"}}
       
      />
    );
  }
}
