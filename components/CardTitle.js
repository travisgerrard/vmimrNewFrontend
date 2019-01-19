import React, { Component } from 'react';
import { format, formatDistance } from 'date-fns';

import Popup from 'reactjs-popup';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart as faHeartSolid,
  faPencilAlt,
  faEye
} from '@fortawesome/free-solid-svg-icons';
import { faHeart, faWindowMaximize } from '@fortawesome/free-regular-svg-icons';
import ReactMarkdown from 'react-markdown';

import { CardTitleStyle } from './styles/CardTitleStyle';

const ExactDate = ({ title }) => <div className="card">{title}</div>;

export default class CardTitle extends Component {
  render() {
    const { learning } = this.props;
    const { myCreatedAt, presentationType } = learning;
    const distanceFrom = formatDistance(myCreatedAt, new Date());
    const formattedDate = format(myCreatedAt, 'MMMM d, yyyy h:mm a');

    const { name, id } = learning.createdBy;
    const titleMarkdown = `[@${name}](/user?id=${id}) - `;

    const likesExist = learning.likes;
    const likesLength = likesExist && learning.likes.length > 0;

    const showEye = this.props.containsIframe || this.props.notCaseOrPearl;

    return (
      <CardTitleStyle>
        <ReactMarkdown className="createdBy" source={titleMarkdown} />
        <Popup
          trigger={<span className="distanceFrom"> {distanceFrom} </span>}
          position="top center"
          on="hover"
        >
          <ExactDate title={formattedDate} />
        </Popup>
        <Link href={`/presentationType?id=${presentationType}`}>
          <span style={{ paddingLeft: '5px' }}>
            {` - `}
            <a>{`${presentationType}`}</a>
          </span>
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
                this.props.showSlide
                  ? { color: 'grey', marginRight: '7px' }
                  : { color: 'black', marginRight: '7px' }
              }
              icon={faEye}
              onClick={() => this.props.toggleShowSlide()}
            />
          )}
          {likesLength && <span>{learning.likes.length}</span>}
          <FontAwesomeIcon
            style={{ color: 'red' }}
            icon={this.props.like ? faHeartSolid : faHeart}
            onClick={() => this.props.toggleLike(this.props.likePresentation)}
          />
          {this.props.me.permissions.includes('ADMIN') &&
            presentationType !== 'Pearl' && (
              <FontAwesomeIcon
                style={{ color: 'black', paddingLeft: '5px' }}
                icon={faPencilAlt}
                onClick={() => this.props.editPresentation(learning)}
              />
            )}
        </div>
      </CardTitleStyle>
    );
  }
}
