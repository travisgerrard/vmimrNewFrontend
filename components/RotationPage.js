import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Error from './ErrorMessage';
import styled from 'styled-components';
import Head from 'next/head';
import Cards from './Cards';

const ALL_ROTATION_PRESENTATIONS_QUERY = gql`
  query ALL_ROTATION_PRESENTATIONS_QUERY(
    $skip: Int = 0
    $first: Int = 5
    $rotation: String!
  ) {
    presentations(
      where: { whatWasLearned_contains: $rotation }
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

export default class RotationPage extends Component {
  state = {
    itemsFetched: 15
  };

  render() {
    return (
      <Query
        query={ALL_ROTATION_PRESENTATIONS_QUERY}
        variables={{
          rotation: this.props.id
        }}
      >
        {({ error, loading, data, fetchMore }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;

          console.log(data);

          if (!data.presentations)
            return <p>No User Found for {this.props.id}</p>;

          const { presentations } = data;

          return (
            <>
              <h2>{this.props.id}</h2>
              <hr />
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
            </>
          );
        }}
      </Query>
    );
  }
}
