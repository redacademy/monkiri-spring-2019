import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import SignIn from "./SignIn";
import Loader from "../../components/Loader";

class SignInContainer extends Component {
  static navigationOptions = {
    title: "SignIn"
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
      <Mutation mutation={AUTHENTICATE_USER}>
        {(signIn, { loading, error }) => {
          if (loading || this.state.loading) return <Loader />;
          return (
            <SignIn
              signIn={signIn}
              navigation={this.props.navigation}
              setError={this.setError}
              error={error || this.state.error}
              toggleLoading={this.toggleLoading}
            />
          );
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
