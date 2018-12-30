import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const ALL_LEARNING_QUERY = gql`
  query ALL_LEARNING_QUERY {
    learnings(orderBy: createdAt_DESC) {
      id
      whatWasLearned
    }
  }
`;

const CardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  max-width: ${props => props.theme.maxWidth}
  margin: 0 auto;
`;

const Card = styled.div`
  background: white;
  box-shadow: ${props => props.theme.bs};
  position: relative;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  p {
    font-size: 12px;
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
`;

const CardBody = styled(ReactMarkdown)`
  & > img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  & > p {
    padding-left: 1rem;
    font-size: 2rem;

    margin: 0;
    a {
      color: ${props => props.theme.darkerBlue};
    }
    a:hover {
      color: hotpink;
    }
  }
`;

export default class HomeLearning extends Component {
  render() {
    return (
      <Query query={ALL_LEARNING_QUERY}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error : {error.message}</p>;
          console.log(data);
          const { learnings } = data;
          return (
            <CardLayout>
              {learnings.map(learning => {
                return (
                  <Card key={learning.id}>
                    <CardBody source={learning.whatWasLearned} />
                  </Card>
                );
              })}
            </CardLayout>
          );
        }}
      </Query>
    );
  }
}

export { ALL_LEARNING_QUERY };
