import React, { Component } from "react";
import Profile from "./Profile";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Loader from "../../components/Loader";
import { getUserId } from "../../config/models";

class ProfileContainer extends Component {
  static navigationOptions = {
    title: "PROFILE"
  };

  constructor(props) {
    super(props);
    this.state = {
      userId: ""
    };
  }

  async componentDidMount() {
    try {
      const userId = await getUserId();
      this.setState({ userId });
    } catch (e) {
      return e;
    }
  }

  render() {
    const { userId } = this.state;
    return userId ? (
      <Query query={GET_USER_INFO} variables={{ id: userId }}>
        {({ data, loading, error }) => {
          if (loading) return <Loader />;
          return (
            <Profile navigation={this.props.navigation} user={data.User} />
          );
        }}
      </Query>
    ) : (
      <Loader />
    );
  }
}

const GET_USER_INFO = gql`
  query getUserInfo($id: ID!) {
    User(id: $id) {
      email
      image
      name
      xp
    }
  }
`;

export default ProfileContainer;
