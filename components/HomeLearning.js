import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Cards from './Cards';

const ALL_PRESENTATIONS_QUERY = gql`
  query ALL_PRESENTATIONS_QUERY($skip: Int = 0, $first: Int = 5) {
    presentations(skip: $skip, first: $first, orderBy: createdAt_DESC) {
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

const LIKE_BUTTON_CLICKED_MUTATION = gql`
  mutation LIKE_BUTTON_CLICKED($presentation: ID!) {
    likePresentation(presentation: $presentation) {
      id
    }
  }
`;

export default class HomeLearning extends Component {
  state = {
    itemsFetched: 15
  };

  render() {
    return (
      <Query query={ALL_PRESENTATIONS_QUERY}>
        {({ data, loading, error, fetchMore }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error : {error.message}</p>;
          // console.log(data);s
          const { presentations } = data;
          console.log(presentations);

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

export { ALL_PRESENTATIONS_QUERY };
