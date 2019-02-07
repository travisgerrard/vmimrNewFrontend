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
import htmlParser from 'react-markdown/plugins/html-parser';
import Popup from 'reactjs-popup';

import CardTitle from './CardTitle';
import { ALL_PRESENTATIONS_QUERY } from './HomeLearning';
import { PINNED_PRESENTATIONS_QUERY } from './GroupPages/PinnedPresentations';

import LikeButton from './CardButtons/LikeButton';
import ExpandButton from './ExpandButton';
import ViewSlidesButton from './CardButtons/ViewSlidesButton';
import EditCardButtion from './CardButtons/EditCardButton';
import PinButton from './CardButtons/PinButton';

const CHARS_TO_EXPOSE = 400;

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

const PIN_BUTTON_CLICKED_MUTATION = gql`
  mutation PIN_BUTTON_CLICKED_MUTATION($id: ID!, $isPinned: Boolean!) {
    changedPinnedStatus(id: $id, isPinned: $isPinned) {
      id
      isPinned
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

const Modal = ({ src }) => (
  <Popup
    trigger={<img src={src} style={{ cursor: 'pointer' }} />}
    modal
    closeOnDocumentClick
    contentStyle={{ width: '80vw', height: '80vh', background: '#403933' }}
  >
    <>
      <span
        style={{
          display: 'inline-block',
          height: '100%',
          verticalAlign: 'middle'
        }}
      />
      <a href={src}>
        <img
          src={src}
          style={{
            height: '100%',
            verticalAlign: 'middle',
            objectFit: 'contain'
          }}
        />
      </a>
    </>
  </Popup>
);

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
    //console.log(this.props.learning.likes);

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

  pinCard = async changedPinnedStatus => {
    const isPinnedToggle = this.props.learning.isPinned ? false : true;

    const res = await changedPinnedStatus({
      variables: {
        id: this.props.learning.id,
        isPinned: isPinnedToggle
      }
    }).catch(err => {
      alert(err.message);
    });
    // alert('Hey admin, you pressed pin button which should function shortly.');
  };

  toggleShowSlide = () => {
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
    const { presentationType } = learning;

    const learningWithOutIframe = learning.whatWasLearned.replace(
      /<iframe.+?<\/iframe>/g,
      '<div class="slideShowPlaceHolder">Tap 👁️ for slides</div>'
    );

    const containsIframe =
      learningWithOutIframe !== learning.whatWasLearned ||
      presentationType === 'Case';
    const { showSlide } = this.state;
    //Hide slides on load...

    const notCaseOrPearl =
      presentationType !== 'Case' && presentationType !== 'Pearl';

    let firstLineOfString;
    if (notCaseOrPearl) {
      firstLineOfString = learning.whatWasLearned.split(/\r?\n/);
    }

    const showEye = containsIframe || notCaseOrPearl;

    function imageRenderer({ src, ...props }) {
      return <Modal src={src} />;
    }

    const renderers = {};
    renderers['image'] = imageRenderer;

    const firstHundred =
      learningWithOutIframe.length > CHARS_TO_EXPOSE ? true : false;

    return (
      <User>
        {({ data: { me } }) => (
          <StyledCard key={learning.id} className="card">
            {this.cardTitle(learning, containsIframe, notCaseOrPearl)}
            <span className="bodyWrapper">
              {notCaseOrPearl && !showSlide ? (
                <CardBody
                  source={
                    firstHundred
                      ? `${learningWithOutIframe.substring(
                          0,
                          CHARS_TO_EXPOSE
                        )} - **Tap "Expand" to see full text**`
                      : `${learningWithOutIframe.substring(0, CHARS_TO_EXPOSE)}`
                  }
                  escapeHtml={false}
                  renderers={renderers}
                />
              ) : (
                <CardBody
                  source={
                    showSlide ? learning.whatWasLearned : learningWithOutIframe
                  }
                  escapeHtml={false}
                  renderers={renderers}
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
            {me && (
              <div className="buttonList">
                <div>
                  <Mutation
                    mutation={LIKE_BUTTON_CLICKED_MUTATION}
                    refetchQueries={[{ query: ALL_PRESENTATIONS_QUERY }]}
                  >
                    {(likePresentation, { loading, error }) => (
                      <div>
                        <LikeButton
                          learning={learning}
                          like={this.state.like}
                          toggleLike={e => this.likedClicked(e)}
                          likePresentation={likePresentation}
                        >
                          Like
                        </LikeButton>
                      </div>
                    )}
                  </Mutation>
                </div>

                {!this.props.singleCard && (
                  <ExpandButton id={learning.id}>Expand</ExpandButton>
                )}
                {showEye && (
                  <ViewSlidesButton
                    toggleShowSlide={() => this.toggleShowSlide()}
                    showSlide={this.state.showSlide}
                  >
                    {this.state.showSlide ? <strike>Slides</strike> : `Slides`}
                  </ViewSlidesButton>
                )}

                {me.permissions.includes('ADMIN') && (
                  <>
                    <EditCardButtion
                      editPresentation={e => this.editPresentation(e)}
                      learning={learning}
                    >
                      Edit
                    </EditCardButtion>
                    <Mutation
                      mutation={PIN_BUTTON_CLICKED_MUTATION}
                      refetchQueries={[
                        { query: ALL_PRESENTATIONS_QUERY },
                        { query: PINNED_PRESENTATIONS_QUERY }
                      ]}
                    >
                      {(changedPinnedStatus, { loading, error }) => (
                        <PinButton
                          changedPinnedStatus={changedPinnedStatus}
                          pinCard={e => this.pinCard(e)}
                          isPinned={learning.isPinned}
                        />
                      )}
                    </Mutation>
                  </>
                )}
              </div>
            )}
          </StyledCard>
        )}
      </User>
    );
  }
}
