import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createMentionPlugin, {
  defaultSuggestionsFilter
} from 'draft-js-mention-plugin';
import styled from 'styled-components';
//import mentionsStyles from './mention.css';
import 'draft-js-mention-plugin/lib/plugin.css';

const EditorWrapper = styled.div`
  box-sizing: border-box;
  border: 1px solid #ddd;
  cursor: text;
  border-radius: 2px;
  margin-bottom: 2em;
  padding: 5px;
  box-shadow: inset 0px 1px 8px -3px #ababab;
  background: #fefefe;
  :global(.public-DraftEditor-content) {
    min-height: 140px;
  }
`;

export default class DraftEditor extends Component {
  constructor(props) {
    super(props);

    this.mentionPlugin = createMentionPlugin();
  }

  state = {
    editorState: EditorState.createEmpty(),
    suggestions: this.props.residents,
    showEditor: false
  };

  componentDidMount = () => {
    this.setState({ showEditor: true });
  };

  onChange = editorState => {
    this.setState({
      editorState
    });
  };

  onSearchChange = ({ value }) => {
    this.setState({
      suggestions: defaultSuggestionsFilter(value, this.props.residents)
    });
  };

  onAddMention = () => {
    // get the mention object selected
  };

  focus = () => {
    this.editor.focus();
  };

  render() {
    const { MentionSuggestions } = this.mentionPlugin;
    const plugins = [this.mentionPlugin];

    return (
      <EditorWrapper onClick={this.focus}>
        {this.state.showEditor && (
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref={element => {
              this.editor = element;
            }}
            editorKey="editor"
          />
        )}
        <MentionSuggestions
          onSearchChange={this.onSearchChange}
          suggestions={this.state.suggestions}
          onAddMention={this.onAddMention}
        />
      </EditorWrapper>
    );
  }
}
