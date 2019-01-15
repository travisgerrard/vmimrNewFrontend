import React, { Component } from 'react';
import { format, formatDistance } from 'date-fns';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart as faHeartSolid,
  faPencilAlt
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import Popup from 'reactjs-popup';
import User from './User';

import {
  CardBody,
  CardTitleCratedBy,
  CardTitle,
  StyledCard
} from './styles/CardStyle';
import editPresentation from '../pages/editPresentation';

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

const ExactDate = ({ title }) => <div className="card">{title}</div>;

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

  editPresentation = ({ id }) => {
    Router.push({
      pathname: '/editPresentation',
      query: { id }
    });
  };

  cardTitle = learning => {
    const { myCreatedAt, presentationType } = learning;
    const distanceFrom = formatDistance(myCreatedAt, new Date());
    const formattedDate = format(myCreatedAt, 'MMMM d, yyyy h:mm a');

    const { name, id } = learning.createdBy;
    const titleMarkdown = `[@${name}](/user?id=${id}) - `;
    return (
      <User>
        {({ data: { me } }) => (
          <Mutation mutation={LIKE_BUTTON_CLICKED_MUTATION}>
            {(likePresentation, { loading, error }) => (
              <>
                <CardTitleCratedBy
                  className="createdBy"
                  source={titleMarkdown}
                />
                <Popup
                  trigger={<div className="distanceFrom"> {distanceFrom} </div>}
                  position="top center"
                  on="hover"
                >
                  <ExactDate title={formattedDate} />
                </Popup>
                <div className="likes">
                  {this.props.learning.likes.length > 0 && (
                    <span>{this.props.learning.likes.length}</span>
                  )}
                  <FontAwesomeIcon
                    style={{ color: 'red' }}
                    icon={this.state.like ? faHeartSolid : faHeart}
                    onClick={() => this.likedClicked(likePresentation)}
                  />
                  {me.permissions.includes('ADMIN') &&
                    presentationType !== 'Pearl' && (
                      <FontAwesomeIcon
                        style={{ color: 'black', paddingLeft: '5px' }}
                        icon={faPencilAlt}
                        onClick={() => this.editPresentation(learning)}
                      />
                    )}
                </div>
              </>
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
      '<div class="slideShowPlaceHolder">Tap button on bottom to reveal slideshow</div>'
    );

    const containsIframe = learningWithOutIframe !== learning.whatWasLearned;
    const { showSlide } = this.state;
    //Hide slides on load...

    return (
      <StyledCard key={learning.id} className="card">
        <CardTitle>{this.cardTitle(learning)}</CardTitle>
        <span className="bodyWrapper">
          <CardBody
            source={showSlide ? learning.whatWasLearned : learningWithOutIframe}
            escapeHtml={false}
          />
        </span>
        {containsIframe && (
          <button
            type="button"
            className="showSlidesButton"
            onClick={() => this.setState({ showSlide: !this.state.showSlide })}
          >
            {showSlide ? `Hide Slides` : `Show Slides`}
          </button>
        )}
      </StyledCard>
    );
  }
}
