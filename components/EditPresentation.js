import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Error from './ErrorMessage';
import EditCard from './EditCard';

const EDIT_PRESENTATION_QUERY = gql`
  query EDIT_PRESENTATION_QUERY($id: ID!) {
    presentation(where: { id: $id }) {
      id
      whatWasLearned
      createdBy {
        id
      }
      likes {
        id
      }
      createdAt
      myCreatedAt
      tags
      taggedUser {
        id
      }
      hpi
      physicalExam
      summAssessment
      ddx
      presentationType
    }
  }
`;

export default class Presentation extends Component {
  render() {
    return (
      <Query
        query={EDIT_PRESENTATION_QUERY}
        variables={{
          id: this.props.id
        }}
      >
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;

          if (!data.presentation)
            return <p>No Card Found for {this.props.id}</p>;

          const { presentation } = data;

          return <EditCard learning={presentation} />;
        }}
      </Query>
    );
  }
}
