import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Error from './ErrorMessage';
import styled from 'styled-components';
import Head from 'next/head';
import Cards from './Cards';

// const ALL_USER_PRESENTATIONS_QUERY = gql`
//   query ALL_USER_PRESENTATIONS_QUERY(
//     $skip: Int = 0
//     $first: Int = 5
//     $id: ID!
//     $idString: String!
//   ) {
//     presentations(
//       where: {
//         OR: [{ createdBy: { id: $id } }, { whatWasLearned_contains: $idString }]
//       }
//       first: $first
//       skip: $skip
//       orderBy: createdAt_DESC
//     ) {
//       id
//       whatWasLearned
//       createdBy {
//         id
//         name
//       }
//       likes {
//         id
//       }
//       createdAt
//     }
//   }
// `;

const ALL_USER_PRESENTATIONS_QUERY = gql`
  query ALL_USER_PRESENTATIONS_QUERY($id: ID!) {
    user(where: { id: $id }) {
      id
      name
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
        updatedAt
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

          // console.log(data);

          if (!data.user) return <p>No User Found for {this.props.id}</p>;

          const { user } = data;
          const { presentations, taggedPresentation } = user;

          const combinedArray = [...presentations, ...taggedPresentation];

          const combinedArraySort = combinedArray.sort((a, b) =>
            b.updatedAt > a.updatedAt ? 1 : a.updatedAt > b.updatedAt ? -1 : 0
          );

          return (
            <>
              <h2>{user.name}</h2>
              <hr />
              <Cards
                presentations={combinedArraySort}
                onLoadMore={
                  () => null
                  // Need tp design a fetchmore for this...
                  // fetchMore({
                  //   variables: {
                  //     skip: this.state.itemsFetched + 5
                  //   },
                  //   updateQuery: (prevResult, { fetchMoreResult }) => {
                  //     console.log(fetchMoreResult);

                  //     const newPresentations = fetchMoreResult.presentations;
                  //     console.log(newPresentations);

                  //     this.setState({
                  //       itemsFetched: this.state.itemsFetched + 5
                  //     });
                  //     return newPresentations.length
                  //       ? {
                  //           presentations: [
                  //             ...prevResult.presentations,
                  //             ...newPresentations
                  //           ]
                  //         }
                  //       : prevResult;
                  //   }
                  // })
                }
              />
            </>
          );
        }}
      </Query>
    );
  }
}
