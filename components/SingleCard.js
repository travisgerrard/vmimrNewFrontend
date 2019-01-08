import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Error from './ErrorMessage';
import styled from 'styled-components';
import Head from 'next/head';

const SINGLE_PRESENTATION_QUERY = gql`
  query SINGLE_PRESENTATION_QUERY($id: ID!) {
    presentation(where: { id: $id }) {
      id
      whatWasLearned
      createdBy {
        id
        name
      }
      likes {
        id
      }
      createdAt
    }
  }
`;

class SingleCard extends Component {
  render() {
    return (
      <Query
        query={SINGLE_PRESENTATION_QUERY}
        variables={{
          id: this.props.id
        }}
      >
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          if (!data.item) return <p>No Card Found for {this.props.id}</p>;

          return (
            <div>
              <p>Card for id {this.props.id}</p>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default SingleCard;
