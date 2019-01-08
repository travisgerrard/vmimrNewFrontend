import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Error from './ErrorMessage';
import styled from 'styled-components';
import Head from 'next/head';
import Cards from './Cards';

const ALL_USER_PRESENTATIONS_QUERY = gql`
  query ALL_USER_PRESENTATIONS_QUERY(
    $skip: Int = 0
    $first: Int = 5
    $id: ID!
    $idString: String!
  ) {
    presentations(
      where: {
        OR: [{ createdBy: { id: $id } }, { whatWasLearned_contains: $idString }]
      }
      first: $first
      skip: $skip
      orderBy: createdAt_DESC
    ) {
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

export default class ProfilePage extends Component {
  state = {
    itemsFetched: 15
  };

  render() {
    return (
      <Query
        query={ALL_USER_PRESENTATIONS_QUERY}
        variables={{
          id: this.props.id,
          idString: this.props.id
        }}
      >
        {({ error, loading, data, fetchMore }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;

          if (!data.presentations)
            return <p>No Cards Found for {this.props.id}</p>;

          const { presentations } = data;

          return (
            <Cards
              presentations={presentations}
              onLoadMore={() =>
                fetchMore({
                  variables: {
                    skip: this.state.itemsFetched + 5
                  },
                  updateQuery: (prevResult, { fetchMoreResult }) => {
                    console.log(fetchMoreResult);

                    const newPresentations = fetchMoreResult.presentations;
                    console.log(newPresentations);

                    this.setState({
                      itemsFetched: this.state.itemsFetched + 5
                    });
                    return newPresentations.length
                      ? {
                          presentations: [
                            ...prevResult.presentations,
                            ...newPresentations
                          ]
                        }
                      : prevResult;
                  }
                })
              }
            />
          );
        }}
      </Query>
    );
  }
}
