import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Error from '../ErrorMessage';
import styled from 'styled-components';
import Head from 'next/head';
import Cards from '../Cards';
import User from '../User';

const ALL_USER_PRESENTATIONS_QUERY = gql`
  query ALL_USER_PRESENTATIONS_QUERY($id: ID!) {
    user(where: { id: $id }) {
      id
      name
      likedPresentations {
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
        updatedAt
        myCreatedAt
        presentationType
        hpi
        physicalExam
        summAssessment
        ddx
        isPinned
      }
      presentations {
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
        updatedAt
        myCreatedAt
        presentationType
        hpi
        physicalExam
        summAssessment
        ddx
        isPinned
      }
      taggedPresentation {
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
        updatedAt
        presentationType
        hpi
        physicalExam
        summAssessment
        ddx
        isPinned
      }
    }
  }
`;

export default class ProfilePage extends Component {
  state = {
    itemsFetched: 15
  };

  render() {
    return (
      <User>
        {({ data: { me } }) => (
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

              if (!data.user) return <p>No User Found for {this.props.id}</p>;

              const { user } = data;
              const {
                presentations,
                taggedPresentation,
                likedPresentations
              } = user;

              // console.log(likedPresentations);

              const combinedArray = [...presentations, ...taggedPresentation];

              const combinedArraySort = combinedArray.sort((a, b) =>
                b.myCreatedAt > a.myCreatedAt
                  ? 1
                  : a.myCreatedAt > b.myCreatedAt
                  ? -1
                  : 0
              );

              return (
                <>
                  <Head>
                    <title>VM:IMR - {user.name}</title>
                  </Head>
                  <h2>{user.name}</h2>
                  <hr />
                  {likedPresentations.length > 0 && (
                    <>
                      <Cards
                        presentations={likedPresentations}
                        userId={me.id}
                        onLoadMore={() => null}
                      />
                      <br />

                      <hr />
                    </>
                  )}
                  <Cards
                    presentations={combinedArraySort}
                    userId={me.id}
                    onLoadMore={() => null}
                  />
                </>
              );
            }}
          </Query>
        )}
      </User>
    );
  }
}
