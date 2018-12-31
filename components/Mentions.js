import React, { Component } from 'react';
import { MentionsInput, Mention } from 'react-mentions';

import defaultStyle from './defaultStyle';
import defaultMentionStyle from './defaultMentionStyle';

import styled from 'styled-components';

export default class Mentions extends Component {
  state = {
    value: ''
  };

  onChange = (e, value) => {
    // console.log(e, value);
    // console.log(this.state.value);

    this.setState({ value });

    this.props.handleChange({
      target: {
        value: value,
        type: 'text',
        name: this.props.name
      }
    });
  };

  onAddUser = (id, display) => {
    this.props.usersAdded(id);

    console.log('added a new user, ', display);
  };

  onAddRotation = (id, display) => {
    this.props.tagsAdded(id);

    console.log('added a new rotation, ', display);
  };

  render() {
    const { users, rotations, whatWasLearned } = this.props;

    return (
      <MentionsInput
        name={this.props.nameOfTextArea}
        id={this.props.nameOfTextArea}
        className="mentionInput"
        value={whatWasLearned}
        onChange={this.onChange}
        style={defaultStyle}
        markup="[__display__](/__type__/__id__)"
        allowSpaceInQuery
        placeholder={this.props.placeholder}
      >
        <Mention
          type="user"
          trigger="@"
          data={users}
          renderSuggestion={(
            suggestion,
            search,
            highlightedDisplay,
            index,
            focused
          ) => (
            <div className={`user ${focused ? 'focused' : ''}`}>
              {highlightedDisplay}
            </div>
          )}
          onAdd={this.onAddUser}
          style={defaultMentionStyle}
        />

        <Mention
          type="rotation"
          trigger="#"
          data={rotations}
          renderSuggestion={(
            suggestion,
            search,
            highlightedDisplay,
            index,
            focused
          ) => (
            <div className={`user ${focused ? 'focused' : ''}`}>
              {highlightedDisplay}
            </div>
          )}
          onAdd={this.onAddRotation}
          style={{ backgroundColor: '#FFEE58' }}
        />
      </MentionsInput>
    );
  }
}
