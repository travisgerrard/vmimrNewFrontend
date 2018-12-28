import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBold,
  faHeading,
  faItalic,
  faStrikethrough,
  faLink,
  faQuoteRight,
  faCode,
  faImage,
  faListUl,
  faListOl,
  faTasks
} from '@fortawesome/free-solid-svg-icons';
import Popup from 'reactjs-popup';
import styled from 'styled-components';

const HeaderPopover = styled.div`
  h1,
  h2,
  h3,
  h4 {
    margin: 0;
    &:hover {
      color: ${props => props.theme.darkBlue};
      cursor: pointer;
    }
  }
`;

class MarkdownEditor extends Component {
  handleClick = value => {
    this.props.markdownButtonPressed(value);
  };

  showEditBar = () => {
    const { preview } = this.props;
    if (preview) {
      return (
        <div className="markdown-header">
          <button type="button" onClick={this.props.previewChange}>
            write
          </button>
        </div>
      );
    }

    return (
      <div className="markdown-header">
        <button type="button" onClick={this.props.previewChange}>
          preview
        </button>
        <Popup
          trigger={open => {
            return (
              <button id="header-button" name="header-button" type="button">
                <FontAwesomeIcon icon={faHeading} />
              </button>
            );
          }}
          position="bottom center"
          closeOnDocumentClick
        >
          {close => (
            <HeaderPopover className="header-popover">
              <h2
                onClick={() => {
                  this.handleClick('headerTwo');
                  close();
                }}
              >
                Header 1
              </h2>
              <h3
                onClick={e => {
                  this.handleClick('headerThree');
                  close();
                }}
              >
                Header 2
              </h3>
              <h4
                onClick={e => {
                  this.handleClick('headerFour');
                  close();
                }}
              >
                Header 3
              </h4>
            </HeaderPopover>
          )}
        </Popup>

        <button
          id="bold-button"
          name="bold-button"
          onClick={e => {
            e.preventDefault();
            this.handleClick('bold');
          }}
        >
          <FontAwesomeIcon icon={faBold} />
        </button>
        <button
          id="italic-button"
          name="italic-button"
          onClick={e => {
            e.preventDefault();
            this.handleClick('italic');
          }}
        >
          <FontAwesomeIcon icon={faItalic} />
        </button>
        <button
          id="strikeThrough-button"
          name="strikeThrough-button"
          onClick={e => {
            e.preventDefault();
            this.handleClick('strikeThrough');
          }}
        >
          <FontAwesomeIcon icon={faStrikethrough} />
        </button>
        <button
          id="link-button"
          name="link-button"
          onClick={e => {
            e.preventDefault();
            this.handleClick('link');
          }}
        >
          <FontAwesomeIcon icon={faLink} />
        </button>
        <button
          id="quote-button"
          name="quote-button"
          onClick={e => {
            e.preventDefault();
            this.handleClick('quote');
          }}
        >
          <FontAwesomeIcon icon={faQuoteRight} />
        </button>
        <button
          id="code-button"
          name="code-button"
          onClick={e => {
            e.preventDefault();
            this.handleClick('code');
          }}
        >
          <FontAwesomeIcon icon={faCode} />
        </button>
        <button
          id="image-button"
          name="image-button"
          onClick={e => {
            e.preventDefault();
            this.handleClick('image');
          }}
        >
          <FontAwesomeIcon icon={faImage} />
        </button>
        <button
          id="listUl-button"
          name="listUl-button"
          onClick={e => {
            e.preventDefault();
            this.handleClick('listUl');
          }}
        >
          <FontAwesomeIcon icon={faListUl} />
        </button>
        <button
          id="listOl-button"
          name="listOl-button"
          onClick={e => {
            e.preventDefault();
            this.handleClick('listOl');
          }}
        >
          <FontAwesomeIcon icon={faListOl} />
        </button>
        <button
          id="tasks-button"
          name="tasks-button"
          onClick={e => {
            e.preventDefault();
            this.handleClick('tasks');
          }}
        >
          <FontAwesomeIcon icon={faTasks} />
        </button>
      </div>
    );
  };

  render() {
    return <div>{this.showEditBar()}</div>;
  }
}

export default MarkdownEditor;
