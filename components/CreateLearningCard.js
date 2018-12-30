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
    }
  }
`;

const CREATE_CARD_MUTATION = gql`
  mutation CREATE_CARD_MUTATION(
    $tags: [RotationTags]!
    $title: String!
    $whatWasLearned: String!
    $taggedUser: [ID]!
  ) {
    createCard(
      tags: $tags
      title: $title
      whatWasLearned: $whatWasLearned
      taggedUser: $taggedUser
    ) {
      id
    }
  }
`;

class CreateLearningCard extends React.Component {
  state = {
    title: '',
    whatWasLearned: 'Learned with attending _ on date _',
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

  indiciesForWordToLeft = (whatWasLearnedText, startPosition) => {
    const theSubstring = whatWasLearnedText.substring(0, startPosition);
    // return index of all ' ' in the string
    var indices = [];
    for (var i = 0; i < theSubstring.length; i++) {
      if (theSubstring[i] === ' ' || theSubstring[i] === '\n') indices.push(i);
    }
    // find the last index that occurs and add one to make up for the ' ', and if non occured, make last index 0
    return indices.length ? indices.pop() + 1 : 0;
  };

  indiciesForWordToRight = (whatWasLearnedText, startPosition) => {
    // The string to the right of the blank
    const theSubstring = whatWasLearnedText.substring(startPosition);

    // return index of all ' ' in the string
    var indices = [];
    for (var i = 0; i < theSubstring.length; i++) {
      if (theSubstring[i] === ' ' || theSubstring[i] === '\n') indices.push(i);
    }

    // find the first index that occurs, and if non occured, return length
    return indices.length ? indices[0] : theSubstring.length;
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

  handleButtonClickWithValue = (
    whatWasLearnedText,
    value,
    word,
    leftIndex,
    rightIndex
  ) => {
    let newText;
    const leftText = whatWasLearnedText.slice(0, leftIndex);
    const rightText = whatWasLearnedText.slice(rightIndex);

    switch (value) {
      case 'headerOne':
        newText = `${leftText} # ${word}${rightText}`;

        this.setState({ whatWasLearned: newText }, () => {
          this.setCaretPosition('whatWasLearned', leftIndex + 3);
        });
        break;
      case 'headerTwo':
        newText = `${leftText} ## ${word}${rightText}`;

        this.setState({ whatWasLearned: newText }, () => {
          this.setCaretPosition('whatWasLearned', leftIndex + 4);
        });
        break;
      case 'headerThree':
        newText = `${leftText} ### ${word}${rightText}`;

        this.setState({ whatWasLearned: newText }, () => {
          this.setCaretPosition('whatWasLearned', leftIndex + 4);
        });
        break;
      case 'headerFour':
        newText = `${leftText} #### ${word}${rightText}`;

        this.setState({ whatWasLearned: newText }, () => {
          this.setCaretPosition('whatWasLearned', leftIndex + 5);
        });
        break;
      case 'bold':
        newText = `${leftText}**${word}**${rightText}`;
        console.log(newText);

        this.setState({ whatWasLearned: newText }, () => {
          this.setCaretPosition('whatWasLearned', leftIndex + 2);
        });

        break;
      case 'italic':
        newText = `${leftText}_${word}_${rightText}`;

        this.setState({ whatWasLearned: newText }, () => {
          this.setCaretPosition('whatWasLearned', leftIndex + 1);
        });
        break;
      case 'strikeThrough':
        newText = `${leftText}~~${word}~~${rightText}`;
        console.log(newText);

        this.setState({ whatWasLearned: newText }, () => {
          this.setCaretPosition('whatWasLearned', leftIndex + 2);
        });
        break;
      case 'link':
        newText = `${leftText}[${word}](url)${rightText}`;

        this.setState({ whatWasLearned: newText }, () => {
          this.setCaretPosition('whatWasLearned', leftIndex + 1);
        });
        break;
      case 'quote':
        newText = `${leftText}\n\n> ${word}${rightText}`;

        this.setState({ whatWasLearned: newText }, () => {
          this.setCaretPosition('whatWasLearned', leftIndex + 4);
        });
        break;
      case 'code':
        newText = `${leftText}\`${word}\`${rightText}`;

        this.setState({ whatWasLearned: newText }, () => {
          this.setCaretPosition('whatWasLearned', leftIndex + 1);
        });
        break;
      case 'image':
        newText = `${leftText}![${word}](url)${rightText}`;

        this.setState({ whatWasLearned: newText }, () => {
          this.setCaretPosition('whatWasLearned', leftIndex + 2);
        });
        break;
      case 'listUl':
        newText = `${leftText}\n\n- ${word}${rightText}`;

        this.setState({ whatWasLearned: newText }, () => {
          this.setCaretPosition('whatWasLearned', leftIndex + 4);
        });
        break;
      case 'listOl':
        newText = `${leftText}\n\n1. ${word}${rightText}`;

        this.setState({ whatWasLearned: newText }, () => {
          this.setCaretPosition('whatWasLearned', leftIndex + 5);
        });
        break;
      case 'tasks':
        newText = `${leftText}\n\n- [ ] ${word}${rightText}`;

        this.setState({ whatWasLearned: newText }, () => {
          this.setCaretPosition('whatWasLearned', leftIndex + 8);
        });
        break;
      default:
        break;
    }
  };

  markdownButtonPressed = value => {
    console.log(value);

    const whatWasLearnedText = this.state.whatWasLearned;
    const whatWasLearnedTextArea = document.getElementById('whatWasLearned');
    console.log(whatWasLearnedTextArea);

    const startPosition = whatWasLearnedTextArea.selectionStart;
    const endPosition = whatWasLearnedTextArea.selectionEnd;
    console.log(startPosition, endPosition);

    if (startPosition == endPosition) {
      const prev = whatWasLearnedText.slice(startPosition - 1, startPosition);
      const next = whatWasLearnedText.slice(startPosition, startPosition + 1);

      if ((prev === '' || prev === ' ') && (next === '' || next === ' ')) {
        console.log('blanks on EITHER side of cursor position');
        const leftIndex = this.indiciesForWordToLeft(
          whatWasLearnedText,
          startPosition
        );

        this.handleButtonClickWithValue(
          whatWasLearnedText,
          value,
          '',
          startPosition,
          startPosition
        );
      } else if (
        (prev !== '' || prev !== ' ') &&
        (next === '' || next === ' ')
      ) {
        // console.log('blanks on RIGHT side of cursor position');
        const leftIndex = this.indiciesForWordToLeft(
          whatWasLearnedText,
          startPosition
        );

        // Slice the string to return the word
        const wordToTheLeft = whatWasLearnedText
          .substring(0, startPosition)
          .substring(leftIndex, startPosition);

        this.handleButtonClickWithValue(
          whatWasLearnedText,
          value,
          wordToTheLeft,
          leftIndex,
          startPosition
        );
        // console.log(wordToTheLeft);
      } else if (
        (prev === '' || prev === ' ') &&
        (next !== '' || next !== ' ')
      ) {
        // console.log('blanks on LEFT side of cursor position');

        const lastIndex = this.indiciesForWordToRight(
          whatWasLearnedText,
          startPosition
        );

        // Slice the string to return the word
        const wordToTheRight = whatWasLearnedText
          .substring(startPosition)
          .substring(0, lastIndex);

        this.handleButtonClickWithValue(
          whatWasLearnedText,
          value,
          wordToTheRight,
          startPosition,
          startPosition + lastIndex
        );
        // console.log(wordToTheRight);
      } else {
        // Letters on either side of cursor
        // console.log('Letters on either side of cursor ');

        const lastIndexRight = this.indiciesForWordToRight(
          whatWasLearnedText,
          startPosition
        );
        const lastIndexLeft = this.indiciesForWordToLeft(
          whatWasLearnedText,
          startPosition
        );

        const wordCursorWithin = whatWasLearnedText.substring(
          lastIndexLeft,
          startPosition + lastIndexRight
        );

        this.handleButtonClickWithValue(
          whatWasLearnedText,
          value,
          wordCursorWithin,
          lastIndexLeft,
          startPosition + lastIndexRight
        );

        // console.log(wordCursorWithin);
      }
    }
  };

  render() {
    return (
      <Mutation mutation={CREATE_CARD_MUTATION} variables={this.state}>
        {(createCard, { loading, error }) => (
          <Form
            data-test="form"
            onSubmit={async e => {
              e.preventDefault();
              // call the mutation
              const { tags, taggedUser, whatWasLearned, title } = this.state;

              console.log(tags, taggedUser, whatWasLearned, title);

              const res = await createCard({
                variables: {
                  tags,
                  taggedUser,
                  whatWasLearned,
                  title
                }
              }).catch(err => {
                alert(err.message);
              });
              console.log(res);

              // change them to the home page.
              Router.push({
                pathname: '/'
              });
            }}
          >
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="title">
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title"
                  required
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="whatWasLearned">
                <Query query={ALL_USERS_QUERY}>
                  {({ data, loading, error }) => {
                    if (loading) return <p>Loading...</p>;
                    const userArray = data.users.map(user => {
                      return { id: user.id, display: user.name };
                    });
                    const rotationArray = possibleRotationTypes.map(
                      rotation => {
                        return { id: rotation.value, display: rotation.label };
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
