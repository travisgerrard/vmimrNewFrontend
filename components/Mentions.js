import React, { Component } from 'react';
import { MentionsInput, Mention } from 'react-mentions';

import defaultStyle from './defaultStyle';
import defaultMentionStyle from './defaultMentionStyle';

export default class Mentions extends Component {
  state = {
    value: ''
  };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  onAdd = (...args) => console.log('added a new mention, ', ...args);

  render() {
    const { value } = this.state;
    const { users, rotations } = this.props;

    console.log(value);

    return (
      <MentionsInput
        className="mentionInput"
        value={value}
        onChange={this.onChange}
        style={defaultStyle}
        markup="[__display__](__type__:__id__)"
        allowSpaceInQuery
        placeholder={
          'Learned with attending _ on date _ \n\nUse @ to tag other users and # to tag a rotation'
        }
        displayTransform={(id, display, type) => {
          if (type === 'user') return `@${display}`;
          if (type === 'rotation') return `#${display}`;
        }}
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
          onAdd={this.onAdd}
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
          onAdd={this.onAdd}
          style={{ backgroundColor: '#FFEE58' }}
        />
      </MentionsInput>
    );
  }
}
