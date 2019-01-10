import React, { Component } from 'react';
import { format, formatDistance } from 'date-fns';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import {
  CardBody,
  CardTitleCratedBy,
  CardTitle,
  StyledCard
} from './styles/CardStyle';

const LIKE_BUTTON_CLICKED_MUTATION = gql`
  mutation LIKE_BUTTON_CLICKED($id: ID!) {
    likePresentation(id: $id) {
      id
      likes {
        id
      }
    }
  }
`;

export default class Card extends Component {
  state = {
    like: this.props.learning.likes
      ? this.props.learning.likes.some(e => e.id === this.props.userId)
      : false,
    showSlide: false
  };

  likedClicked = async likePresentation => {
    const res = await likePresentation({
      variables: {
        id: this.props.learning.id
      }
    }).catch(err => {
      alert(err.message);
    });
    this.setState({ like: !this.state.like });
  };

  cardTitle = learning => {
    const { createdAt } = learning;
    const formatedDate = formatDistance(createdAt, new Date());

    const heartIconButton = (
      <button id="heart-button" name="heart-button" type="button">
        <FontAwesomeIcon icon={faHeart} />
      </button>
    );

    const { name, id } = learning.createdBy;
    const titleMarkdown = `[@${name}](/user?id=${id}) - ${formatedDate}`;
    return (
      <Mutation mutation={LIKE_BUTTON_CLICKED_MUTATION}>
        {(likePresentation, { loading, error }) => (
          <>
            <CardTitleCratedBy source={titleMarkdown} />
            <FontAwesomeIcon
              icon={this.state.like ? faHeartSolid : faHeart}
              onClick={() => this.likedClicked(likePresentation)}
            />
          </>
        )}
      </Mutation>
    );
  };

  render() {
    const { learning } = this.props;

    const learningWithOutIframe = learning.whatWasLearned.replace(
      /<iframe.+?<\/iframe>/g,
      ''
    );

    const containsIframe = learningWithOutIframe !== learning.whatWasLearned;
    const { showSlide } = this.state;
    //Hide slides on load...

    return (
      <StyledCard key={learning.id} classname="card">
        <CardTitle>{this.cardTitle(learning)}</CardTitle>
        <CardBody
          source={showSlide ? learning.whatWasLearned : learningWithOutIframe}
          escapeHtml={false}
        />
        {containsIframe && (
          <button
            onClick={() => this.setState({ showSlide: !this.state.showSlide })}
          >
            {showSlide ? `Hide Slide` : `Show Slide`}
          </button>
        )}
      </StyledCard>
    );
  }
}
