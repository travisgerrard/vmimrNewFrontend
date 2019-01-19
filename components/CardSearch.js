import React, { Component } from 'react';
import { format, formatDistance } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Popup from 'reactjs-popup';
import ReactMarkdown from 'react-markdown';

import { CardBody, StyledSearchCard } from './styles/CardStyle';

import { CardTitleStyle } from './styles/CardTitleStyle';

const ExactDate = ({ title }) => <div className="card">{title}</div>;

export default class Card extends Component {
  state = {
    like: this.props.learning.likes
      ? this.props.learning.likes.some(e => e.id === this.props.userId)
      : false
  };

  cardTitle = learning => {
    const { myCreatedAt } = learning;
    const distanceFrom = formatDistance(myCreatedAt, new Date());
    const formattedDate = format(myCreatedAt, 'MMMM d, yyyy h:mm a');

    const { name, id } = learning.createdBy;
    const titleMarkdown = `[@${name}](/user?id=${id}) - `;
    return (
      <>
        <ReactMarkdown className="createdBy" source={titleMarkdown} />
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
            // onClick={() => this.likedClicked(likePresentation)}
          />
        </div>
      </>
    );
  };

  render() {
    const { learning } = this.props;
    const firstLineOfString = learning.whatWasLearned.split(/\r?\n/);
    return (
      <StyledSearchCard key={learning.id} classname="card">
        <CardTitleStyle>{this.cardTitle(learning)}</CardTitleStyle>
        <CardBody source={firstLineOfString[0]} escapeHtml={false} />
      </StyledSearchCard>
    );
  }
}
