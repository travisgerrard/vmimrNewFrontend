import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
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
  { value: 'General', label: 'general' },
  { value: 'Morning', label: 'morning' },
  { value: 'Case', label: 'case' },
  { value: 'Specialist', label: 'specialist' },
  { value: 'Primary Care', label: 'primaryCare' },
  { value: 'Intern Survival', label: 'internSurvival' }
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
const SUBJECTIVE = `HPI:
45F p/w ...



PMH/PSH:
MEDS:
SOCIAL: Tobacco/EtOH/Illicits
Fam Hx:`;

const OBJECTIVE = `Vitals:
Tmax: HR: BP: / RR:

Physical Exam
Const:
HEENT:
Neck:
Heart:
Lungs:
Abd:
Extremities:
Neuro:
Skin:
Psych:

---Labs---
CBC: WBC / Hg / Plt
BMP: Na / K / Cl / HCO2 / BUN / Cr / Glu
LFTs: AP / ALT / AST / Tbili



---Imaging---



`;

export default class Presentation extends Component {
  state = {
    subjective: SUBJECTIVE,
    objective: OBJECTIVE,
    sumAssess: '',
    ddx: ['test1', 'test2'],
    ddxInput: '',
    taggedUser: [],
    tags: [],
    preview: false,
    whatWasLearned: '',
    presentaionType: 'general'
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

  enterPressed = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      s;
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

  render() {
    return (
      <Form>
        <label htmlFor="caseType">
          {presentationTypes.map(presentation => {
            return (
              <button
                key={presentation.label}
                type="button"
                name="presentationType"
                id={presentation.label}
                style={
                  presentation.label === this.state.presentaionType
                    ? { background: 'white', color: '#01B6DD' }
                    : {}
                }
                onClick={() => {
                  this.setState({ presentaionType: presentation.label });
                }}
              >
                {presentation.value}
              </button>
            );
          })}
        </label>
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
                {this.state.presentaionType === 'case' ? (
                  <>
                    <hr />

                    <CaseLayout>
                      <div>
                        <label>Subjective/HPI</label>
                        <Mentions
                          name="subjective"
                          nameOfTextArea={`subjective`}
                          placeholder={SUBJECTIVE}
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
                          placeholder={OBJECTIVE}
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
                <fieldset disabled={loading} aria-busy={loading}>
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
      </Form>
    );
  }
}
