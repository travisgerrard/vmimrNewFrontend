import React, { Component } from 'react';
import { format, formatDistance } from 'date-fns';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Link from 'next/link';

import _ from 'lodash';
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from 'react-sortable-hoc';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart as faHeartSolid,
  faPencilAlt,
  faEye
} from '@fortawesome/free-solid-svg-icons';
import { faHeart, faWindowMaximize } from '@fortawesome/free-regular-svg-icons';

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
  mutation LIKE_BUTTON_CLICKED($id: ID!, $addLike: Boolean!) {
    likePresentation(id: $id, addLike: $addLike) {
      id
      likes {
        id
      }
    }
  }
`;

const ExactDate = ({ title }) => <div className="card">{title}</div>;

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

  cardTitle = (learning, containsIframe, notCaseOrPearl) => {
    const { myCreatedAt, presentationType } = learning;
    const distanceFrom = formatDistance(myCreatedAt, new Date());
    const formattedDate = format(myCreatedAt, 'MMMM d, yyyy h:mm a');

    const { name, id } = learning.createdBy;
    const titleMarkdown = `[@${name}](/user?id=${id}) - `;

    const likesExist = this.props.learning.likes;
    const likesLength = likesExist && this.props.learning.likes.length > 0;

    const showEye = containsIframe || notCaseOrPearl;

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
                <Link href={`/presentationType?id=${presentationType}`}>
                  <a
                    style={{ paddingLeft: '5px' }}
                  >{` - ${presentationType}`}</a>
                </Link>
                <div className="likes">
                  {!this.props.singleCard && (
                    <FontAwesomeIcon
                      icon={faWindowMaximize}
                      style={{ marginRight: '5px' }}
                      onClick={() => {
                        const id = learning.id;
                        Router.push({
                          pathname: `/card`,
                          query: { id }
                        });
                      }}
                    />
                  )}

                  {showEye && (
                    <FontAwesomeIcon
                      style={
                        this.state.showSlide
                          ? { color: 'grey', marginRight: '7px' }
                          : { color: 'black', marginRight: '7px' }
                      }
                      icon={faEye}
                      onClick={() =>
                        this.setState({ showSlide: !this.state.showSlide })
                      }
                    />
                  )}
                  {likesLength && (
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
        <CardTitle>
          {this.cardTitle(learning, containsIframe, notCaseOrPearl)}
        </CardTitle>
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
