import React, { Component } from "react";
import AuthLoading from "./AuthLoading";
import { getUserToken } from "../../config/models";

class AuthLoadingContainer extends Component {
  async componentDidMount() {
    const { navigation } = this.props;
    const userToken = await getUserToken();
    navigation.navigate(userToken ? "App" : "Auth");
  }

  render() {
    return <AuthLoading />;
  }
}

export default AuthLoadingContainer;
