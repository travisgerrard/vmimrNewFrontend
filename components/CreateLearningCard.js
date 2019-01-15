import React from 'react';
import { Query, Mutation } from 'react-apollo';
//import Select from 'react-select';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';
import Router from 'next/router';
import MarkdownEditor from './MarkdownEditor';
import Mentions from './Mentions';
import ReactMarkdown from 'react-markdown';
import markdownButtonPressed from '../lib/markdownEditorFunctions';

import { ALL_PRESENTATIONS_QUERY } from './HomeLearning';

const possibleRotationTypes = [
  { value: 'Wards', label: 'Wards' },
  { value: 'Nights', label: 'Nights' },
  { value: 'Ccu', label: 'CCU' },
  { value: 'Qi', label: 'Quality Improvement' },
  { value: 'Allergy', label: 'Allergy' },
  { value: 'Anesthesia', label: 'Anesthesia' },
  { value: 'Cardiology', label: 'Cardiology' },
  { value: 'Dermatology', label: 'Dermatology' },
  { value: 'Endocrinology', label: 'Endocrinology' },
  { value: 'Ent', label: 'Ears, Nose, Throat (ENT)' },
  { value: 'Gi', label: 'GI' },
  { value: 'Gim', label: 'GIM' },
  { value: 'Geriatrics', label: 'Geriatrics' },
  { value: 'Gyn', label: 'Gynecology' },
  { value: 'Hemeonc', label: 'Hematology Oncology' },
  { value: 'Infectiousdisease', label: 'Infectious Disease (ID)' },
  { value: 'Nephro', label: 'Nephrology' },
  { value: 'Neuro', label: 'Neurology' },
  { value: 'Ophtho', label: 'Ophthalmology' },
  { value: 'Surgery', label: 'Surgery' },
  { value: 'Urology', label: 'Urology' },
  { value: 'Msk', label: 'MSK' },
  { value: 'Palliative', label: 'Palliative' },
  { value: 'Path', label: 'Pathology' },
  { value: 'Procedures', label: 'Procedures' },
  { value: 'Psych', label: 'Psychiatry' },
  { value: 'Pulm', label: 'Pulmonology' },
  { value: 'Rheum', label: 'Rheumatology' },
  { value: 'Scholarly', label: 'Scholarly' },
  { value: 'Specialreq', label: 'Special Request' },
  { value: 'Swing', label: 'Swing' },
  { value: 'Float', label: 'Float' },
  { value: 'Sbp', label: 'Systems Based Practice (SBP)' },
  { value: 'Hyperbarics', label: 'Hyperbarics' },
  { value: 'DotPhrase', label: 'dotPhrase' },
  { value: 'Link', label: 'Link' },
  { value: 'Mksap', label: 'Mksap' }
];

const ALL_USERS_QUERY = gql`
  query ALL_USERS_QUERY {
    users {
      id
      name
      email
      permissions
      visible
    }
  }
`;

const CREATE_CARD_MUTATION = gql`
  mutation CREATE_CARD_MUTATION(
    $tags: [RotationTags]!
    $whatWasLearned: String!
    $taggedUser: [ID]!
    $myCreatedAt: DateTime!
  ) {
    createCard(
      tags: $tags
      whatWasLearned: $whatWasLearned
      taggedUser: $taggedUser
      myCreatedAt: $myCreatedAt
    ) {
      id
    }
  }
`;

class CreateLearningCard extends React.Component {
  state = {
    whatWasLearned: '',
    tags: [],
    taggedUser: [],
    preview: false
  };

  tagsAdded = id => {
    this.setState({ tags: [...this.state.tags, id] }, () =>
      console.log(this.state.tags)
    );
  };

  usersAdded = id => {
    this.setState({ taggedUser: [...this.state.taggedUser, id] }, () =>
      console.log(this.state.taggedUser)
    );
  };

  previewChange = () => {
    const currentPreview = this.state.preview;

    this.setState({ preview: !currentPreview });
  };

  handleChange = e => {
    const { name, type, value } = e.target;

    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  setCaretPosition(el, pos) {
    let ctrl = document.getElementById(el);

    if (ctrl.setSelectionRange) {
      ctrl.focus();
      ctrl.setSelectionRange(pos, pos);
    } else if (ctrl.createTextRange) {
      var range = ctrl.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  }

  markdownButtonPressed = value => {
    const objectReturnedFromPressDown = markdownButtonPressed(
      value,
      this.state.whatWasLearned,
      document.getElementById('whatWasLearned')
    );
    const { whatWasLearned, caretPosition } = objectReturnedFromPressDown;
    this.setState({ whatWasLearned }, () => {
      this.setCaretPosition('whatWasLearned', caretPosition);
    });
  };

  render() {
    return (
      <Mutation
        mutation={CREATE_CARD_MUTATION}
        refetchQueries={[{ query: ALL_PRESENTATIONS_QUERY }]}
      >
        {(createCard, { loading, error }) => (
          <Form
            data-test="form"
            onSubmit={async e => {
              e.preventDefault();
              // call the mutation
              const { tags, taggedUser, whatWasLearned } = this.state;
              const myCreatedAt = new Date();

              //console.log(tags, taggedUser, whatWasLearned, title);

              const res = await createCard({
                variables: {
                  tags,
                  taggedUser,
                  whatWasLearned,
                  myCreatedAt
                }
              }).catch(err => {
                alert(err.message);
              });
              //console.log(res);

              // change them to the home page.
              Router.push({
                pathname: '/'
              });
            }}
          >
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="whatWasLearned">
                <Query query={ALL_USERS_QUERY}>
                  {({ data, loading, error }) => {
                    if (loading) return <p>Loading...</p>;
                    const userArray = data.users.map(user => {
                      return { id: user.id, display: `@${user.name}` };
                    });
                    const rotationArray = possibleRotationTypes.map(
                      rotation => {
                        return {
                          id: rotation.value,
                          display: `#${rotation.label}`
                        };
                      }
                    );

                    return (
                      <>
                        <MarkdownEditor
                          preview={this.state.preview}
                          previewChange={this.previewChange}
                          markdownButtonPressed={this.markdownButtonPressed}
                        />
                        {this.state.preview ? (
                          <ReactMarkdown
                            className="markdownPreview"
                            source={this.state.whatWasLearned}
                          />
                        ) : (
                          <Mentions
                            name="whatWasLearned"
                            nameOfTextArea={`whatWasLearned`}
                            placeholder={`Title\nLearned with attending _ on date _ \nUse @ to tag users and # to tag a rotation`}
                            users={userArray}
                            rotations={rotationArray}
                            whatWasLearned={this.state.whatWasLearned}
                            handleChange={this.handleChange}
                            tagsAdded={this.tagsAdded}
                            usersAdded={this.usersAdded}
                          />
                        )}
                      </>
                    );
                  }}
                </Query>
              </label>

              <button type="submit">Submit</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default CreateLearningCard;
export { possibleRotationTypes, ALL_USERS_QUERY };
