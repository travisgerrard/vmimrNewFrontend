/*
  markdownButtonPressed takes in value, string and reference to textarea
  return an object with evertrhing needed to get sent on and modify text
*/

function indiciesForWordToLeft(whatWasLearnedText, startPosition) {
  const theSubstring = whatWasLearnedText.substring(0, startPosition);
  // return index of all ' ' in the string
  var indices = [];
  for (var i = 0; i < theSubstring.length; i++) {
    if (theSubstring[i] === ' ' || theSubstring[i] === '\n') indices.push(i);
  }
  // find the last index that occurs and add one to make up for the ' ', and if non occured, make last index 0
  return indices.length ? indices.pop() + 1 : 0;
}

function indiciesForWordToRight(whatWasLearnedText, startPosition) {
  // The string to the right of the blank
  const theSubstring = whatWasLearnedText.substring(startPosition);

  // return index of all ' ' in the string
  var indices = [];
  for (var i = 0; i < theSubstring.length; i++) {
    if (theSubstring[i] === ' ' || theSubstring[i] === '\n') indices.push(i);
  }

  // find the first index that occurs, and if non occured, return length
  return indices.length ? indices[0] : theSubstring.length;
}

// handleButtonClickWithValue
function markdownButtonPressedStepOneTwo({
  whatWasLearnedText,
  value,
  word,
  leftIndex,
  rightIndex
}) {
  let newText;
  const leftText = whatWasLearnedText.slice(0, leftIndex);
  const rightText = whatWasLearnedText.slice(rightIndex);

  switch (value) {
    case 'headerOne':
      newText = `${leftText} # ${word}${rightText}`;

      return {
        whatWasLearned: newText,
        caretPosition: leftIndex + 3
      };
      // this.setState({ whatWasLearned: newText }, () => {
      //   this.setCaretPosition('whatWasLearned', leftIndex + 3);
      // });
      break;
    case 'headerTwo':
      newText = `${leftText} ## ${word}${rightText}`;

      return {
        whatWasLearned: newText,
        caretPosition: leftIndex + 4
      };

      // this.setState({ whatWasLearned: newText }, () => {
      //   this.setCaretPosition('whatWasLearned', leftIndex + 4);
      // });
      break;
    case 'headerThree':
      newText = `${leftText} ### ${word}${rightText}`;

      return {
        whatWasLearned: newText,
        caretPosition: leftIndex + 4
      };

      // this.setState({ whatWasLearned: newText }, () => {
      //   this.setCaretPosition('whatWasLearned', leftIndex + 4);
      // });
      break;
    case 'headerFour':
      newText = `${leftText} #### ${word}${rightText}`;

      return {
        whatWasLearned: newText,
        caretPosition: leftIndex + 5
      };
      // this.setState({ whatWasLearned: newText }, () => {
      //   this.setCaretPosition('whatWasLearned', leftIndex + 5);
      // });
      break;
    case 'bold':
      newText = `${leftText}**${word}**${rightText}`;
      console.log(newText);

      return {
        whatWasLearned: newText,
        caretPosition: leftIndex + 2
      };
      // this.setState({ whatWasLearned: newText }, () => {
      //   this.setCaretPosition('whatWasLearned', leftIndex + 2);
      // });

      break;
    case 'italic':
      newText = `${leftText}_${word}_${rightText}`;

      return {
        whatWasLearned: newText,
        caretPosition: leftIndex + 1
      };
      // this.setState({ whatWasLearned: newText }, () => {
      //   this.setCaretPosition('whatWasLearned', leftIndex + 1);
      // });
      break;
    case 'strikeThrough':
      newText = `${leftText}~~${word}~~${rightText}`;
      console.log(newText);

      return {
        whatWasLearned: newText,
        caretPosition: leftIndex + 2
      };
      // this.setState({ whatWasLearned: newText }, () => {
      //   this.setCaretPosition('whatWasLearned', leftIndex + 2);
      // });
      break;
    case 'link':
      newText = `${leftText}[${word}](url)${rightText}`;

      return {
        whatWasLearned: newText,
        caretPosition: leftIndex + 1
      };
      // this.setState({ whatWasLearned: newText }, () => {
      //   this.setCaretPosition('whatWasLearned', leftIndex + 1);
      // });
      break;
    case 'quote':
      newText = `${leftText}\n\n> ${word}${rightText}`;

      return {
        whatWasLearned: newText,
        caretPosition: leftIndex + 4
      };
      // this.setState({ whatWasLearned: newText }, () => {
      //   this.setCaretPosition('whatWasLearned', leftIndex + 4);
      // });
      break;
    case 'code':
      newText = `${leftText}\`${word}\`${rightText}`;

      return {
        whatWasLearned: newText,
        caretPosition: leftIndex + 1
      };
      // this.setState({ whatWasLearned: newText }, () => {
      //   this.setCaretPosition('whatWasLearned', leftIndex + 1);
      // });
      break;
    case 'image':
      newText = `${leftText}![${word}](url)${rightText}`;

      return {
        whatWasLearned: newText,
        caretPosition: leftIndex + 2
      };

      // this.setState({ whatWasLearned: newText }, () => {
      //   this.setCaretPosition('whatWasLearned', leftIndex + 2);
      // });
      break;
    case 'listUl':
      newText = `${leftText}\n\n- ${word}${rightText}`;

      return {
        whatWasLearned: newText,
        caretPosition: leftIndex + 4
      };

      // this.setState({ whatWasLearned: newText }, () => {
      //   this.setCaretPosition('whatWasLearned', leftIndex + 4);
      // });
      break;
    case 'listOl':
      newText = `${leftText}\n\n1. ${word}${rightText}`;

      return {
        whatWasLearned: newText,
        caretPosition: leftIndex + 5
      };

      // this.setState({ whatWasLearned: newText }, () => {
      //   this.setCaretPosition('whatWasLearned', leftIndex + 5);
      // });
      break;
    case 'tasks':
      newText = `${leftText}\n\n- [ ] ${word}${rightText}`;

      return {
        whatWasLearned: newText,
        caretPosition: leftIndex + 8
      };

      // this.setState({ whatWasLearned: newText }, () => {
      //   this.setCaretPosition('whatWasLearned', leftIndex + 8);
      // });
      break;
    default:
      break;
  }
}

function markdownButtonPressedStepOne(
  value,
  whatWasLearnedText,
  whatWasLearnedTextArea
) {
  const startPosition = whatWasLearnedTextArea.selectionStart;
  const endPosition = whatWasLearnedTextArea.selectionEnd;

  if (startPosition == endPosition) {
    const prev = whatWasLearnedText.slice(startPosition - 1, startPosition);
    const next = whatWasLearnedText.slice(startPosition, startPosition + 1);

    if ((prev === '' || prev === ' ') && (next === '' || next === ' ')) {
      //console.log('blanks on EITHER side of cursor position');
      return {
        whatWasLearnedText,
        value,
        word: '',
        leftIndex: startPosition,
        rightIndex: startPosition
      };
      // this.handleButtonClickWithValue(
      //   whatWasLearnedText,
      //   value,
      //   '',
      //   startPosition,
      //   startPosition
      // );
    } else if ((prev !== '' || prev !== ' ') && (next === '' || next === ' ')) {
      // console.log('blanks on RIGHT side of cursor position');
      const leftIndex = indiciesForWordToLeft(
        whatWasLearnedText,
        startPosition
      );

      // Slice the string to return the word
      const wordToTheLeft = whatWasLearnedText
        .substring(0, startPosition)
        .substring(leftIndex, startPosition);

      return {
        whatWasLearnedText,
        value,
        word: wordToTheLeft,
        leftIndex,
        rightIndex: startPosition
      };

      // this.handleButtonClickWithValue(
      //   whatWasLearnedText,
      //   value,
      //   wordToTheLeft,
      //   leftIndex,
      //   startPosition
      // );
      // console.log(wordToTheLeft);
    } else if ((prev === '' || prev === ' ') && (next !== '' || next !== ' ')) {
      // console.log('blanks on LEFT side of cursor position');

      const lastIndex = indiciesForWordToRight(
        whatWasLearnedText,
        startPosition
      );

      // Slice the string to return the word
      const wordToTheRight = whatWasLearnedText
        .substring(startPosition)
        .substring(0, lastIndex);

      return {
        whatWasLearnedText,
        value,
        word: wordToTheRight,
        leftIndex: startPosition,
        rightIndex: startPosition + lastIndex
      };

      // this.handleButtonClickWithValue(
      //   whatWasLearnedText,
      //   value,
      //   wordToTheRight,
      //   startPosition,
      //   startPosition + lastIndex
      // );
      // console.log(wordToTheRight);
    } else {
      // Letters on either side of cursor
      // console.log('Letters on either side of cursor ');

      const lastIndexRight = indiciesForWordToRight(
        whatWasLearnedText,
        startPosition
      );
      const lastIndexLeft = indiciesForWordToLeft(
        whatWasLearnedText,
        startPosition
      );

      const wordCursorWithin = whatWasLearnedText.substring(
        lastIndexLeft,
        startPosition + lastIndexRight
      );

      return {
        whatWasLearnedText,
        value,
        word: wordCursorWithin,
        leftIndex: lastIndexLeft,
        rightIndex: startPosition + lastIndexRight
      };

      // this.handleButtonClickWithValue(
      //   whatWasLearnedText,
      //   value,
      //   wordCursorWithin,
      //   lastIndexLeft,
      //   startPosition + lastIndexRight
      // );

      // console.log(wordCursorWithin);
    }
  }
  return {
    whatWasLearnedText,
    value,
    word: whatWasLearnedText.substring(startPosition, endPosition),
    leftIndex: startPosition,
    rightIndex: endPosition
  };
}

export default function markdownButtonPressed(
  value,
  whatWasLearnedText,
  whatWasLearnedTextArea
) {
  const stepOne = markdownButtonPressedStepOne(
    value,
    whatWasLearnedText,
    whatWasLearnedTextArea
  );
  const stepTwo = markdownButtonPressedStepOneTwo(stepOne);

  return stepTwo;
}
