import React from 'react';
import Downshift, { resetIdCounter } from 'downshift';
import Router from 'next/router';
import gql from 'graphql-tag';
import { ApolloConsumer } from 'react-apollo';
import debounce from 'lodash.debounce';
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown';
import User from './User';

import CardSearch from './CardSearch';

const SEARCH_PRESENTATIONS_QUERY = gql`
  query SEARCH_PRESENTATIONS_QUERY(
    $searchTerm: [PresentationWhereInput!]
    $first: Int = 10
  ) {
    presentations(
      where: { AND: $searchTerm }
      first: $first
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
    }
  }
`;

function routeToItem(presentation) {
  Router.push({
    pathname: '/card',
    query: {
      id: presentation.id
    }
  });
}

class AutoComplete extends React.Component {
  state = {
    cards: [],
    loading: false
  };

  onChange = debounce(async (e, client) => {
    // turn loading on
    this.setState({ loading: true });
    // Manually query apollo client
    if (e.target.value !== '') {
      const res = await client.query({
        query: SEARCH_PRESENTATIONS_QUERY,
        variables: {
          searchTerm: e.target.value.split(' ').map(value => {
            return {
              whatWasLearnedLowerCase_contains: value.toLowerCase()
            };
          })
        }
      });

      this.setState({
        cards: res.data.presentations,
        loading: false
      });
    } else {
      this.setState({
        cards: [],
        loading: false
      });
    }
  }, 350);

  render() {
    resetIdCounter();
    return (
      <User>
        {({ data: { me } }) => (
          <SearchStyles>
            <Downshift
              onChange={routeToItem}
              itemToString={item => (item === null ? '' : '')}
            >
              {({
                getInputProps,
                getItemProps,
                isOpen,
                inputValue,
                highlightedIndex
              }) => (
                <div>
                  <ApolloConsumer>
                    {client => (
                      <input
                        {...getInputProps({
                          type: 'search',
                          placeholder: 'Search',
                          id: 'search',
                          className: this.state.loading ? 'loading' : '',
                          onChange: e => {
                            e.persist();
                            this.onChange(e, client);
                          }
                        })}
                      />
                    )}
                  </ApolloConsumer>
                  {isOpen && (
                    <DropDown>
                      {this.state.cards.map((item, index) => (
                        <DropDownItem
                          {...getItemProps({ item })}
                          key={item.id}
                          highlighted={index === highlightedIndex}
                        >
                          <CardSearch
                            key={item.id}
                            learning={item}
                            userId={me.id}
                          />
                        </DropDownItem>
                      ))}
                      {!this.state.cards.length && !this.state.loading && (
                        <DropDownItem>Nothing Found {inputValue}</DropDownItem>
                      )}
                    </DropDown>
                  )}
                </div>
              )}
            </Downshift>
          </SearchStyles>
        )}
      </User>
    );
  }
}

export default AutoComplete;
