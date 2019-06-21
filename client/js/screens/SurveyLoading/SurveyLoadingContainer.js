import React, { Component } from "react";
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";
import { getUserId } from "../../config/models";
import SurveyLoading from "./SurveyLoading";

class SurveyLoadingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { userId: "" };
  }
  async componentDidMount() {
    const userId = await getUserId();
    this.setState({ userId });
  }

  render() {
    const { userId } = this.state;
    const { navigation } = this.props;
    if (userId) {
      return (
        <Query query={GET_SURVEY_STATUS} variables={{ id: userId }}>
          {({ data, error }) => {
            if (error) navigation.navigate("App");
            if (data && data.User) {
              const { surveyTaken } = data.User;
              if (surveyTaken === false) {
                return (
                  <Mutation
                    mutation={UPDATE_SURVEY_TAKEN}
                    variables={{ id: userId, surveyTaken: true }}
                  >
                    {(updateSurveyTaken, { data, loading, error }) => {
                      if (!loading && !data && !error) updateSurveyTaken();
                      if (error) navigation.navigate("App");
                      if (data) navigation.navigate("SurveyDifficulty");
                      return <SurveyLoading />;
                    }}
                  </Mutation>
                );
              } else {
                navigation.navigate("App");
              }
            }
            return <SurveyLoading />;
          }}
        </Query>
      );
    } else {
      return <SurveyLoading />;
    }
  }
}

const GET_SURVEY_STATUS = gql`
  query getSurveyStatus($id: ID!) {
    User(id: $id) {
      surveyTaken
    }
  }
`;

const UPDATE_SURVEY_TAKEN = gql`
  mutation updateSurveyTaken($id: ID!, $surveyTaken: Boolean!) {
    updateUser(id: $id, surveyTaken: $surveyTaken) {
      id
      surveyTaken
    }
  }
`;

export default SurveyLoadingContainer;
