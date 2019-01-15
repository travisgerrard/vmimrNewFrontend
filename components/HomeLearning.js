import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';
import styled from 'styled-components';
import Cards from './Cards';
import User from './User';

const ALL_PRESENTATIONS_QUERY = gql`
  query ALL_PRESENTATIONS_QUERY($skip: Int = 0, $first: Int = 5) {
    presentations(skip: $skip, first: $first, orderBy: myCreatedAt_DESC) {
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

export default class HomeLearning extends Component {
  state = {
    itemsFetched: 15
  };

  render() {
    return (
      <User>
        {({ data: { me } }) => (
          <div>
            {me && (
              <Query query={ALL_PRESENTATIONS_QUERY}>
                {({ data, loading, error, fetchMore }) => {
                  if (loading) return <p>Loading...</p>;
                  if (error) return <p>Error : {error.message}</p>;
                  // console.log(data);
                  const { presentations } = data;
                  console.log(presentations);

                  return (
                    <Cards
                      presentations={presentations}
                      userId={me.id}
                      onLoadMore={() =>
                        fetchMore({
                          variables: {
                            skip: this.state.itemsFetched + 5
                          },
                          updateQuery: (prevResult, { fetchMoreResult }) => {
                            // console.log(fetchMoreResult);

                            const newPresentations =
                              fetchMoreResult.presentations;
                            // console.log(newPresentations);

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
            )}
            {!me && (
              <h2>
                Please{' '}
                <Link href="/signup">
                  <a style={{ textDecoration: 'underline', color: 'blue' }}>
                    Sign In
                  </a>
                </Link>
                !
              </h2>
            )}
          </div>
        )}
      </User>
    );
  }
}

export { ALL_PRESENTATIONS_QUERY };
