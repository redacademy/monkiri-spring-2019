import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import SignUp from "./SignUp";
import Loader from "../../components/Loader";

class SignUpContainer extends Component {
  static navigationOptions = {
    title: "SignUp"
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: null
    };
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading, error: null });
  };

  setError = error => {
    this.setState({ error });
  };

  render() {
    return (
      <Mutation mutation={SIGNUP_USER}>
        {(signUp, { loading, error }) => {
          if (loading || this.state.loading) return <Loader />;
          return (
            <SignUp
              signUp={signUp}
              navigation={this.props.navigation}
              setError={this.setError}
              toggleLoading={this.toggleLoading}
            />
          );
        }}
      </Mutation>
    );
  }
}

const SIGNUP_USER = gql`
  mutation signUp($name: String!, $email: String!, $password: String!) {
    signupUser(name: $name, email: $email, password: $password) {
      id
      token
    }
  }
`;

export default SignUpContainer;
