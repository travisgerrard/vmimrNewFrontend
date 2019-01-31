import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';
import styled from 'styled-components';
import Cards from './Cards';
import User from './User';

import { perPage } from '../config';
import CreateLearningCard from './CreateLearningCard';

import PinnedPresentations from './GroupPages/PinnedPresentations';

// Places where cards querys take place
// This file, HomeLearning
// SingleCard
// GroupPages => PresentationTypePage, ProfilePage & RotationPage
const ALL_PRESENTATIONS_QUERY = gql`
  query ALL_PRESENTATIONS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
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
      isPinned
    }
  }
`;

const Button = styled.button`
  width: auto;
  background: ${props => props.theme.darkBlue};
  color: white;
  border: 0;
  font-size: 2rem;
  font-weight: 600;
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.darkBlue};
    background: white;
  }
  &:focus {
    outline: 0px;
  }
`;

export default class HomeLearning extends Component {
  state = {
    itemsFetched: perPage,
    showCreatePearl: false
  };

  render() {
    const { showCreatePearl } = this.state;
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
                  // console.log(presentations);

                  return (
                    <>
                      <PinnedPresentations me={me} />

                      <div
                        style={
                          showCreatePearl
                            ? { marginBottom: '20px' }
                            : {
                                textAlign: 'center',
                                marginBottom: '20px'
                              }
                        }
                      >
                        {showCreatePearl ? (
                          <CreateLearningCard
                            ownWindow={false}
                            toggleCreatePearl={() => {
                              console.log('home page ran');

                              this.setState({
                                showCreatePearl: !this.state.showCreatePearl
                              });
                            }}
                          />
                        ) : (
                          <Button
                            type="button"
                            onClick={() =>
                              this.setState({
                                showCreatePearl: !this.state.showCreatePearl
                              })
                            }
                          >
                            New Pearl
                          </Button>
                        )}
                      </div>

                      <Cards
                        presentations={presentations}
                        userId={me.id}
                        onLoadMore={() =>
                          fetchMore({
                            variables: {
                              skip: this.state.itemsFetched
                            },
                            updateQuery: (prevResult, { fetchMoreResult }) => {
                              // console.log(fetchMoreResult);

                              const newPresentations =
                                fetchMoreResult.presentations;
                              // console.log(newPresentations);

                              this.setState({
                                itemsFetched: this.state.itemsFetched + perPage
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
            )}
            {!me && (
              <>
                <h2>
                  Welcome to VM:IMR, your one stop shop for Virginia Mason
                  Residency Learning.{' '}
                </h2>
                Please{' '}
                <Link href="/signin">
                  <a style={{ textDecoration: 'underline', color: 'blue' }}>
                    Sign In
                  </a>
                </Link>{' '}
                or{' '}
                <Link href="/signup">
                  <a style={{ textDecoration: 'underline', color: 'blue' }}>
                    Sign Up
                  </a>
                </Link>
                !
                <PinnedPresentations />
              </>
            )}
          </div>
        )}
      </User>
    );
  }
}

export { ALL_PRESENTATIONS_QUERY };
