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
import ReactMarkdown from 'react-markdown';
import InputTrigger from 'react-input-trigger';
//import { MentionsInput, Mention } from 'react-mentions';

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
  state = {
    preview: false,
    top: null,
    left: null,
    showSuggestor: false,
    text: null,
    startPosition: null,
    currentSelection: 0,
    filteredResidents: this.props.residents,
    filteredRotationTags: this.props.rotationTags
  };

  toggleSuggestor = metaInformation => {
    const { hookType, cursor } = metaInformation;

    if (hookType === 'start') {
      this.setState({
        showSuggestor: true,
        left: cursor.left,
        top: cursor.top + cursor.height * 1.5, // we need to add the cursor height so that the dropdown doesn't overlap with the `@`.
        startPosition: cursor.selectionStart
      });
    }

    if (hookType === 'cancel') {
      this.setState({
        showSuggestor: false,
        left: null,
        top: null,
        startPosition: null
      });
    }
  };

  handleInput = metaInformation => {
    console.log(metaInformation.text);

    if (this.state.showSuggestor) {
      // So we don;t update filter after we hit enter in the menu
      const filteredResidents = this.props.residents.filter(
        resident =>
          resident.label
            .toLowerCase()
            .indexOf(metaInformation.text.toLowerCase()) !== -1
      );

      this.setState({
        text: metaInformation.text,
        filteredResidents
      });
    }
  };

  handleKeyDown = event => {
    const { which } = event;
    const { currentSelection, filteredResidents } = this.state;
    const { residents } = this.props;

    if (which === 40 && this.state.showSuggestor) {
      // @ symple
      event.preventDefault();

      this.setState({
        currentSelection: (currentSelection + 1) % filteredResidents.length
      });
    }

    if (which === 13 && this.state.showSuggestor) {
      // Return
      event.preventDefault();

      const { currentSelection, startPosition, filteredResidents } = this.state;
      const { residents, whatWasLearned } = this.props;
      const resident = filteredResidents[currentSelection];

      // console.log(currentSelection);
      // console.log(resident.label);

      // ${`@[${resident.label}](${resident.value})`}

      const newText = `${whatWasLearned.slice(0, startPosition - 1)}${`@${
        resident.label
      }`}${whatWasLearned.slice(
        startPosition + resident.label.length,
        whatWasLearned.length
      )}`;

      this.setState({
        showSuggestor: false,
        left: null,
        top: null,
        text: null,
        startPosition: null,
        filteredResidents: this.props.residents
      });

      this.props.handleChange({
        target: {
          value: newText,
          type: 'text',
          name: 'whatWasLearned'
        }
      });

      this.endHandler();
    }

    if (which === 32 && this.state.showSuggestor) {
      if (this.state.text === null || this.state.text === '') {
        this.setState({
          showSuggestor: false,
          left: null,
          top: null,
          text: null,
          startPosition: null,
          filteredResidents: this.props.residents
        });
      }
      this.endHandler();
    }
  };

  showTextArea = () => {
    return (
      <div
        style={{
          position: 'relative'
        }}
        onKeyDown={this.handleKeyDown}
      >
        <InputTrigger
          trigger={{
            keyCode: 50,
            shiftKey: true
          }}
          onStart={metaData => {
            this.toggleSuggestor(metaData);
          }}
          onCancel={metaData => {
            this.toggleSuggestor(metaData);
          }}
          onType={metaData => {
            this.handleInput(metaData);
          }}
          endTrigger={endHandler => (this.endHandler = endHandler)}
        >
          <textarea
            type="text"
            id="whatWasLearned"
            name="whatWasLearned"
            placeholder="Learning point"
            rows="5"
            required
            value={this.props.whatWasLearned}
            onChange={this.props.handleChange}
          />
        </InputTrigger>
        <div
          id="dropdown"
          style={{
            position: 'absolute',
            width: '200px',
            borderRadius: '6px',
            background: 'white',
            boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',

            display: this.state.showSuggestor ? 'block' : 'none',
            top: this.state.top,
            left: this.state.left
          }}
        >
          {this.state.filteredResidents.map((resident, index) => (
            <div
              key={resident.value}
              style={{
                padding: '10px 20px',
                background: index === this.state.currentSelection ? '#eee' : ''
              }}
            >
              {resident.label}
            </div>
          ))}
        </div>
      </div>
    );
  };

  showMarkdownPreview = () => {
    return <ReactMarkdown source={this.props.whatWasLearned} />;
  };

  textAreaVsPreview = () => {
    if (this.state.preview) {
      return (
        <div className="markdownPreview">{this.showMarkdownPreview()} </div>
      );
    } else {
      return this.showTextArea();
    }
  };

  handleClick = value => {
    this.props.markdownButtonPressed(value);
  };

  render() {
    return (
      <div>
        <div className="markdown-header">
          <button
            type="button"
            onClick={() => this.setState({ preview: false })}
          >
            write
          </button>
          <button
            type="button"
            onClick={() => this.setState({ preview: true })}
          >
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
                <h1
                  onClick={() => {
                    this.handleClick('headerOne');
                    close();
                  }}
                >
                  Header 1
                </h1>
                <h2
                  onClick={() => {
                    this.handleClick('headerTwo');
                    close();
                  }}
                >
                  Header 2
                </h2>
                <h3
                  onClick={e => {
                    this.handleClick('headerThree');
                    close();
                  }}
                >
                  Header 3
                </h3>
                <h4
                  onClick={e => {
                    this.handleClick('headerFour');
                    close();
                  }}
                >
                  Header 4
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
        <div className="markdownText">{this.textAreaVsPreview()}</div>
      </div>
    );
  }
}

export default MarkdownEditor;
