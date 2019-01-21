import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from 'react-sortable-hoc';

import Form from './styles/Form';
import Error from './ErrorMessage';
import Router from 'next/router';
import styled from 'styled-components';
import Mentions from './Mentions';
import { possibleRotationTypes, ALL_USERS_QUERY } from './CreateLearningCard';
import MarkdownEditor from './MarkdownEditor';
import ReactMarkdown from 'react-markdown';
import markdownButtonPressed from '../lib/markdownEditorFunctions';

import { ALL_PRESENTATIONS_QUERY } from './HomeLearning';

const UPDATE_PRESENTATION_MUTATION = gql`
  mutation UPDATE_PRESENTATION_MUTATION(
    $id: ID!
    $tags: [RotationTags]!
    $whatWasLearned: String!
    $taggedUser: [ID]!
    $hpi: String!
    $physicalExam: String!
    $summAssessment: String!
    $ddx: [String]!
    $presentationType: PresentationTypes!
    $createdBy: ID!
    $myCreatedAt: DateTime!
  ) {
    updatePresentation(
      id: $id
      tags: $tags
      whatWasLearned: $whatWasLearned
      taggedUser: $taggedUser
      hpi: $hpi
      physicalExam: $physicalExam
      summAssessment: $summAssessment
      ddx: $ddx
      presentationType: $presentationType
      createdBy: $createdBy
      myCreatedAt: $myCreatedAt
    ) {
      id
    }
  }
`;

const DELETE_PRESENTATION_MUTATION = gql`
  mutation DELETE_PRESENTATION_MUTATION($id: ID!) {
    deletePresentation(id: $id) {
      id
    }
  }
`;

const CaseLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  width: 100%;
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

const presentationTypes = [
  { value: 'General', label: 'General' },
  { value: 'Morning', label: 'Morning' },
  { value: 'Case', label: 'Case' },
  { value: 'Specialist', label: 'Specialist' },
  { value: 'Primary Care', label: 'PrimaryCare' },
  { value: 'Intern Survival', label: 'InternSurvival' }
];

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

export default class Presentation extends Component {
  state = {
    id: this.props.learning.id,
    subjective: this.props.learning.hpi,
    objective: this.props.learning.physicalExam,
    sumAssess: this.props.learning.summAssessment,
    ddx: this.props.learning.ddx,
    ddxInput: '',
    taggedUser: this.props.learning.taggedUser.map(user => {
      return user.id;
    }),
    tags: this.props.learning.tags,
    preview: false,
    whatWasLearned: this.props.learning.whatWasLearned,
    presentationType: this.props.learning.presentationType,
    myCreatedAt: this.props.learning.myCreatedAt,
    createdBy: this.props.learning.createdBy.id
  };

  tagsAdded = id => {
    this.setState({ tags: [...this.state.tags, id] });
  };

  usersAdded = id => {
    this.setState({ taggedUser: [...this.state.taggedUser, id] });
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

  enterPressed = e => {
    if (e.key === 'Enter') {
      e.preventDefault();

      this.setState({ ddx: [...this.state.ddx, this.state.ddxInput] }, () =>
        this.setState({ ddxInput: '' })
      );
    }
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({
      ddx: arrayMove(this.state.ddx, oldIndex, newIndex)
    });
  };

  deletePresentation = () => {};

  render() {
    return (
      <Mutation
        mutation={UPDATE_PRESENTATION_MUTATION}
        refetchQueries={[{ query: ALL_PRESENTATIONS_QUERY }]}
      >
        {(updatePresentation, { loading, error }) => (
          <Form
            data-test="form"
            onSubmit={async e => {
              e.preventDefault();
              // call the mutation
              const {
                id,
                tags,
                taggedUser,
                whatWasLearned,
                subjective,
                objective,
                sumAssess,
                ddx,
                presentationType,
                myCreatedAt,
                createdBy
              } = this.state;

              console.log(taggedUser);

              const res = await updatePresentation({
                variables: {
                  id,
                  tags,
                  taggedUser,
                  whatWasLearned,
                  hpi: subjective,
                  physicalExam: objective,
                  summAssessment: sumAssess,
                  ddx,
                  presentationType,
                  myCreatedAt,
                  createdBy
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
            <Query query={ALL_USERS_QUERY}>
              {({ data, loading, error }) => {
                if (loading) return <p>Loading...</p>;
                const userArray = data.users.map(user => {
                  return { id: user.id, display: `@${user.name}` };
                });
                const rotationArray = possibleRotationTypes.map(rotation => {
                  return {
                    id: rotation.value,
                    display: `#${rotation.label}`
                  };
                });

                return (
                  <>
                    <Error error={error} />
                    <fieldset disabled={loading} aria-busy={loading}>
                      {this.state.presentationType !== 'Pearl' && (
                        <label htmlFor="caseType">
                          {presentationTypes.map(presentation => {
                            return (
                              <button
                                key={presentation.label}
                                type="button"
                                name="presentationType"
                                id={presentation.label}
                                style={
                                  presentation.label ===
                                  this.state.presentationType
                                    ? { background: 'white', color: '#01B6DD' }
                                    : {}
                                }
                                onClick={() => {
                                  this.setState({
                                    presentationType: presentation.label
                                  });
                                }}
                              >
                                {presentation.value}
                              </button>
                            );
                          })}
                        </label>
                      )}
                      {this.state.presentationType === 'Case' ? (
                        <>
                          <hr />

                          <CaseLayout>
                            <div>
                              <label>Subjective/HPI</label>
                              <Mentions
                                name="subjective"
                                nameOfTextArea={`subjective`}
                                users={userArray}
                                rotations={rotationArray}
                                whatWasLearned={this.state.subjective}
                                handleChange={this.handleChange}
                                tagsAdded={this.tagsAdded}
                                usersAdded={this.usersAdded}
                              />
                            </div>
                            <div>
                              <label>Objective/Exam|Labs|Imaging</label>
                              <Mentions
                                name="objective"
                                nameOfTextArea={`objective`}
                                users={userArray}
                                rotations={rotationArray}
                                whatWasLearned={this.state.objective}
                                handleChange={this.handleChange}
                                tagsAdded={this.tagsAdded}
                                usersAdded={this.usersAdded}
                              />
                            </div>
                            <div>
                              <label>Summary assessment</label>
                              <Mentions
                                name="sumAssess"
                                nameOfTextArea={`sumAssess`}
                                placeholder="Middle aged male with..."
                                users={userArray}
                                rotations={rotationArray}
                                whatWasLearned={this.state.sumAssess}
                                handleChange={this.handleChange}
                                tagsAdded={this.tagsAdded}
                                usersAdded={this.usersAdded}
                              />
                              <label>DDx</label>
                              <input
                                type="text"
                                name="ddxInput"
                                value={this.state.ddxInput}
                                onChange={e =>
                                  this.setState({ ddxInput: e.target.value })
                                }
                                onKeyPress={this.enterPressed}
                              />
                              <SortableList
                                items={this.state.ddx}
                                onSortEnd={this.onSortEnd}
                              />
                            </div>
                          </CaseLayout>
                        </>
                      ) : (
                        <></>
                      )}

                      <hr />
                      <label htmlFor="whatWasLearned">
                        <MarkdownEditor
                          preview={this.state.preview}
                          previewChange={this.previewChange}
                          markdownButtonPressed={this.markdownButtonPressed}
                        />
                        {this.state.preview ? (
                          <span style={{ whiteSpace: 'pre-wrap' }}>
                            <ReactMarkdown
                              className="markdownPreview"
                              source={this.state.whatWasLearned}
                              escapeHtml={false}
                            />{' '}
                          </span>
                        ) : (
                          <Mentions
                            name="whatWasLearned"
                            nameOfTextArea="whatWasLearned"
                            placeholder={`Tag Presenter with @USER, and specialty with #SPECIALTY`}
                            users={userArray}
                            rotations={rotationArray}
                            whatWasLearned={this.state.whatWasLearned}
                            handleChange={this.handleChange}
                            tagsAdded={this.tagsAdded}
                            usersAdded={this.usersAdded}
                          />
                        )}
                      </label>
                    </fieldset>
                  </>
                );
              }}
            </Query>
            <button type="submit">Save Changes</button>
            <Mutation
              mutation={DELETE_PRESENTATION_MUTATION}
              variables={{ id: this.props.learning.id }}
              refetchQueries={[{ query: ALL_PRESENTATIONS_QUERY }]}
            >
              {(deletePresentation, { loading, error }) => (
                <button
                  type="button"
                  style={{ background: 'red', marginLeft: '5px' }}
                  onClick={() => {
                    if (confirm('Are you sure you want to delete this?')) {
                      deletePresentation().catch(err => {
                        alert(err.message);
                      });

                      Router.push({
                        pathname: '/'
                      });
                    }
                  }}
                >
                  Delete
                </button>
              )}
            </Mutation>
          </Form>
        )}
      </Mutation>
    );
  }
}
