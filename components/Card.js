import React, { Component } from 'react';
import { format, formatDistance } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import {
  CardBody,
  CardTitleCratedBy,
  CardTitle,
  StyledCard
} from './styles/CardStyle';

export default class Card extends Component {
  state = {
    like: false
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
    const titleMarkdown = `[@${name}](/user/${id}) - ${formatedDate}`;
    return (
      <>
        <CardTitleCratedBy source={titleMarkdown} />
        <FontAwesomeIcon
          icon={this.state.like ? faHeartSolid : faHeart}
          onClick={() => this.setState({ like: !this.state.like })}
        />
      </>
    );
  };

  render() {
    const { learning } = this.props;
    return (
      <StyledCard key={learning.id} classname="card">
        <CardTitle>{this.cardTitle(learning)}</CardTitle>
        <CardBody source={learning.whatWasLearned} escapeHtml={false} />
      </StyledCard>
    );
  }
}
