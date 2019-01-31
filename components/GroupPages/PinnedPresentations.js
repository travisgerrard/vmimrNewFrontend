import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Error from '../ErrorMessage';

import Cards from '../Cards';

const PINNED_PRESENTATIONS_QUERY = gql`
  query PINNED_PRESENTATIONS_QUERY {
    presentations(where: { isPinned: true }) {
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

export default class PinnedPresentations extends Component {
  static defaultProps = {
    me: { id: 999999 }
  };

  render() {
    return (
      <Query query={PINNED_PRESENTATIONS_QUERY}>
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;

          if (!data.presentations)
            return <p>No Pesentations Found for {this.props.id}</p>;

          const { presentations } = data;

          if (presentations.length > 0) {
            return (
              <div style={{ marginBottom: '20px' }}>
                <h2>Pinned Card</h2>
                <Cards
                  presentations={presentations}
                  userId={this.props.me.id}
                  onLoadMore={() => console.log('this was called')}
                />
              </div>
            );
          }
          return <div />;
        }}
      </Query>
    );
  }
}

export { PINNED_PRESENTATIONS_QUERY };
