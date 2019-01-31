import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Error from '../ErrorMessage';
import styled from 'styled-components';
import Head from 'next/head';
import Cards from '../Cards';
import User from '../User';
import { perPage } from '../../config';

const ALL_ROTATION_PRESENTATIONS_QUERY = gql`
  query ALL_ROTATION_PRESENTATIONS_QUERY(
    $skip: Int = 0
    $first: Int = ${perPage}
    $rotation: PresentationTypes!
  ) {
    presentations(
      where: { presentationType: $rotation }
      first: $first
      skip: $skip
      orderBy: myCreatedAt_DESC
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

export default class PresentationTypePage extends Component {
  state = {
    itemsFetched: perPage
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

          if (!data.presentations)
            return <p>No User Found for {this.props.id}</p>;

          const { presentations } = data;

          return (
            <User>
              {({ data: { me } }) => (
                <>
                  <Head>
                    <title>VM:IMR - {this.props.id}</title>
                  </Head>
                  <h2>{this.props.id}</h2>
                  <hr />
                  <Cards
                    presentations={presentations}
                    userId={me.id}
                    onLoadMore={() =>
                      fetchMore({
                        variables: {
                          skip: this.state.itemsFetched
                        },
                        updateQuery: (prevResult, { fetchMoreResult }) => {
                          console.log(fetchMoreResult);

                          const newPresentations =
                            fetchMoreResult.presentations;
                          console.log(newPresentations);

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
              )}
            </User>
          );
        }}
      </Query>
    );
  }
}
