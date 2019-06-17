import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import SignIn from "./SignIn";
import AuthLoader from "../../components/AuthLoader";

class SignInContainer extends Component {
  static navigationOptions = {
    title: "Sign In"
  };
  render() {
    return (
      <Mutation mutation={AUTHENTICATE_USER}>
        {(signIn, { loading, error }) => {
          if (loading) return <AuthLoader message="Loading" />;
          return <SignIn signIn={signIn} navigation={this.props.navigation} />;
        }}
      </Mutation>
    );
  }
}

const AUTHENTICATE_USER = gql`
  mutation signIn($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      id
      token
    }
  }
`;

export default SignInContainer;
