import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';

import _ from 'lodash';
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from 'react-sortable-hoc';
import styled from 'styled-components';

import User from './User';

import { CardBody, StyledCard } from './styles/CardStyle';
import CardTitle from './CardTitle';

const LIKE_BUTTON_CLICKED_MUTATION = gql`
  mutation LIKE_BUTTON_CLICKED($id: ID!, $addLike: Boolean!) {
    likePresentation(id: $id, addLike: $addLike) {
      id
      likes {
        id
      }
    }
  }
`;

const DdxList = styled.div`
  margin-top: 1rem;
  border: 1px solid #efefef;
  background: white;
`;

const DDxListItem = styled.div`
  border-bottom: 1px solid #efefef;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgb(239, 239, 239);
  padding-left: 1rem;
  font-size: 2rem;
`;

const SortableItem = SortableElement(({ value }) => (
  <DDxListItem>{value}</DDxListItem>
));

const SortableList = SortableContainer(({ items }) => {
  return (
    <DdxList>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </DdxList>
  );
});

export default class Card extends Component {
  static defaultProps = {
    singleCard: false,
    showSlide: false
  };

  state = {
    like: this.props.learning.likes
      ? this.props.learning.likes.some(e => e.id === this.props.userId)
      : false,
    showSlide: this.props.showSlide
  };

  likedClicked = async likePresentation => {
    console.log(this.props.learning.likes);

    let addLike;
    if (this.state.like) {
      addLike = false;
    } else {
      addLike = true;
    }

    const res = await likePresentation({
      variables: {
        id: this.props.learning.id,
        // likes: filterLikes,
        addLike
      }
    }).catch(err => {
      alert(err.message);
    });
    this.setState({ like: !this.state.like });
  };

  editPresentation = ({ id }) => {
    Router.push({
      pathname: '/editPresentation',
      query: { id }
    });
  };

  toggleShowSlide = () => {
    console.log('this ran');

    this.setState({ showSlide: !this.state.showSlide });
  };

  cardTitle = (learning, containsIframe, notCaseOrPearl) => {
    return (
      <User>
        {({ data: { me } }) => (
          <Mutation mutation={LIKE_BUTTON_CLICKED_MUTATION}>
            {(likePresentation, { loading, error }) => (
              <CardTitle
                learning={learning}
                containsIframe={containsIframe}
                notCaseOrPearl={notCaseOrPearl}
                showSlide={this.state.showSlide}
                toggleShowSlide={() => this.toggleShowSlide()}
                like={this.state.like}
                likePresentation={likePresentation}
                toggleLike={e => this.likedClicked(e)}
                editPresentation={e => this.editPresentation(e)}
                me={me}
              />
            )}
          </Mutation>
        )}
      </User>
    );
  };

  render() {
    const { learning } = this.props;

    const learningWithOutIframe = learning.whatWasLearned.replace(
      /<iframe.+?<\/iframe>/g,
      '<div class="slideShowPlaceHolder">Tap 👁️ for slides</div>'
    );

    const containsIframe =
      learningWithOutIframe !== learning.whatWasLearned ||
      learning.presentationType === 'Case';
    const { showSlide } = this.state;
    //Hide slides on load...

    const notCaseOrPearl =
      learning.presentationType !== 'Case' &&
      learning.presentationType !== 'Pearl';

    let firstLineOfString;
    if (notCaseOrPearl) {
      firstLineOfString = learning.whatWasLearned.split(/\r?\n/);
    }

    return (
      // <Link href={`/card?id=${learning.id}`}>
      <StyledCard key={learning.id} className="card">
        {this.cardTitle(learning, containsIframe, notCaseOrPearl)}
        <span className="bodyWrapper">
          {notCaseOrPearl && !showSlide ? (
            <CardBody source={firstLineOfString[0]} escapeHtml={false} />
          ) : (
            <CardBody
              source={
                showSlide ? learning.whatWasLearned : learningWithOutIframe
              }
              escapeHtml={false}
            />
          )}
        </span>
        {learning.presentationType === 'Case' && (
          <>
            {showSlide && (
              <>
                <span className="bodyWrapper">
                  <h3 style={{ textDecoration: 'underline' }}>HPI</h3>
                  <CardBody source={learning.hpi} />
                  <h3 style={{ textDecoration: 'underline' }}>Exam</h3>
                  <CardBody source={learning.physicalExam} />
                  <h3 style={{ textDecoration: 'underline' }}>
                    Summary Assessment
                  </h3>
                  <CardBody source={learning.summAssessment} />
                  <h3 style={{ textDecoration: 'underline' }}>DDx</h3>
                  <SortableList items={learning.ddx} />
                </span>
              </>
            )}
          </>
        )}
      </StyledCard>
      // </Link>
    );
  }
}
