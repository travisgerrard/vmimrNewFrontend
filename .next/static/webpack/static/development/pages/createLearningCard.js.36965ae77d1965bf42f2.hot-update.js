webpackHotUpdate("static/development/pages/createLearningCard.js",{

/***/ "./components/CreateLearningCard.js":
/*!******************************************!*\
  !*** ./components/CreateLearningCard.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Mentions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Mentions */ "./components/Mentions.js");

var _jsxFileName = "/Users/travisgerrard/Dropbox/react-learning/VMIMRtake2/frontend/components/CreateLearningCard.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation CREATE_CARD_MUTATION(\n    $tags: [String]!\n    $title: String!\n    $whatWasLearned: String!\n    $dateWasLearned: String!\n    $wasLearnedWith: String!\n    $taggedUser: [User]\n  ) {\n    createCard(\n      tags: $tags\n      title: $title\n      whatWasLearned: $whatWasLearned\n      dateWasLearned: $dateWasLearned\n      wasLearnedWith: $wasLearnedWith\n      taggedUser: $taggedUSer\n    )\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query ALL_USERS_QUERY {\n    users {\n      id\n      name\n      email\n      permissions\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








 //import MarkdownEditor from './MarkdownEditor';
//import DraftEditor from './DraftEditor';


var possibleRotationTypes = [{
  value: 'Wards',
  label: 'Wards'
}, {
  value: 'Nights',
  label: 'Nights'
}, {
  value: 'Ccu',
  label: 'CCU'
}, {
  value: 'Qi',
  label: 'Quality Improvement'
}, {
  value: 'Allergy',
  label: 'Allergy'
}, {
  value: 'Anesthesia',
  label: 'Anesthesia'
}, {
  value: 'Cardiology',
  label: 'Cardiology'
}, {
  value: 'Dermatology',
  label: 'Dermatology'
}, {
  value: 'Endocrinology',
  label: 'Endocrinology'
}, {
  value: 'Ent',
  label: 'Ears, Nose, Throat (ENT)'
}, {
  value: 'Gi',
  label: 'GI'
}, {
  value: 'Gim',
  label: 'GIM'
}, {
  value: 'Geriatrics',
  label: 'Geriatrics'
}, {
  value: 'Gyn',
  label: 'Gynecology'
}, {
  value: 'Hemeonc',
  label: 'Hematology Oncology'
}, {
  value: 'Infectiousdisease',
  label: 'Infectious Disease (ID)'
}, {
  value: 'Nephro',
  label: 'Nephrology'
}, {
  value: 'Neuro',
  label: 'Neurology'
}, {
  value: 'Ophtho',
  label: 'Ophthalmology'
}, {
  value: 'Surgery',
  label: 'Surgery'
}, {
  value: 'Urology',
  label: 'Urology'
}, {
  value: 'Msk',
  label: 'MSK'
}, {
  value: 'Palliative',
  label: 'Palliative'
}, {
  value: 'Path',
  label: 'Pathology'
}, {
  value: 'Procedures',
  label: 'Procedures'
}, {
  value: 'Psych',
  label: 'Psychiatry'
}, {
  value: 'Pulm',
  label: 'Pulmonology'
}, {
  value: 'Rheum',
  label: 'Rheumatology'
}, {
  value: 'Scholarly',
  label: 'Scholarly'
}, {
  value: 'Specialreq',
  label: 'Special Request'
}, {
  value: 'Swing',
  label: 'Swing'
}, {
  value: 'Float',
  label: 'Float'
}, {
  value: 'Sbp',
  label: 'Systems Based Practice (SBP)'
}, {
  value: 'Hyperbarics',
  label: 'Hyperbarics'
}, {
  value: 'DotPhrase',
  label: 'dotPhrase'
}, {
  value: 'Link',
  label: 'Link'
}, {
  value: 'Mksap',
  label: 'Mksap'
}];
var ALL_USERS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());
var CREATE_CARD_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject2());

var CreateLearningCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CreateLearningCard, _React$Component);

  function CreateLearningCard() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CreateLearningCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CreateLearningCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      tags: null,
      title: '',
      whatWasLearned: 'This is a test sentence',
      dateWasLearned: '',
      wasLearnedWith: '',
      taggedUser: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      console.log(e.target);
      var _e$target = e.target,
          name = _e$target.name,
          type = _e$target.type,
          value = _e$target.value;
      var val = type === 'number' ? parseFloat(value) : value;

      _this.setState(_defineProperty({}, name, val));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handelSelectChange", function (e, name) {
      _this.setState(_defineProperty({}, name, e)); //console.log(`Option selected:`, tags);

    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "indiciesForWordToLeft", function (whatWasLearnedText, startPosition) {
      var theSubstring = whatWasLearnedText.substring(0, startPosition); // return index of all ' ' in the string

      var indices = [];

      for (var i = 0; i < theSubstring.length; i++) {
        if (theSubstring[i] === ' ' || theSubstring[i] === '\n') indices.push(i);
      } // find the last index that occurs and add one to make up for the ' ', and if non occured, make last index 0


      return indices.length ? indices.pop() + 1 : 0;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "indiciesForWordToRight", function (whatWasLearnedText, startPosition) {
      // The string to the right of the blank
      var theSubstring = whatWasLearnedText.substring(startPosition); // return index of all ' ' in the string

      var indices = [];

      for (var i = 0; i < theSubstring.length; i++) {
        if (theSubstring[i] === ' ' || theSubstring[i] === '\n') indices.push(i);
      } // find the first index that occurs, and if non occured, return length


      return indices.length ? indices[0] : theSubstring.length;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleButtonClickWithValue", function (whatWasLearnedText, value, word, leftIndex, rightIndex) {
      var newText;
      var leftText = whatWasLearnedText.slice(0, leftIndex);
      var rightText = whatWasLearnedText.slice(rightIndex);

      switch (value) {
        case 'headerOne':
          newText = "".concat(leftText, " # ").concat(word).concat(rightText);

          _this.setState({
            whatWasLearned: newText
          }, function () {
            _this.setCaretPosition('whatWasLearned', leftIndex + 3);
          });

          break;

        case 'headerTwo':
          newText = "".concat(leftText, " ## ").concat(word).concat(rightText);

          _this.setState({
            whatWasLearned: newText
          }, function () {
            _this.setCaretPosition('whatWasLearned', leftIndex + 4);
          });

          break;

        case 'headerThree':
          newText = "".concat(leftText, " ### ").concat(word).concat(rightText);

          _this.setState({
            whatWasLearned: newText
          }, function () {
            _this.setCaretPosition('whatWasLearned', leftIndex + 4);
          });

          break;

        case 'headerFour':
          newText = "".concat(leftText, " #### ").concat(word).concat(rightText);

          _this.setState({
            whatWasLearned: newText
          }, function () {
            _this.setCaretPosition('whatWasLearned', leftIndex + 5);
          });

          break;

        case 'bold':
          newText = "".concat(leftText, "**").concat(word, "**").concat(rightText);

          _this.setState({
            whatWasLearned: newText
          }, function () {
            _this.setCaretPosition('whatWasLearned', leftIndex + 2);
          });

          break;

        case 'italic':
          newText = "".concat(leftText, "_").concat(word, "_").concat(rightText);

          _this.setState({
            whatWasLearned: newText
          }, function () {
            _this.setCaretPosition('whatWasLearned', leftIndex + 1);
          });

          break;

        case 'strikeThrough':
          newText = "".concat(leftText, "~~").concat(word, "~~").concat(rightText);
          console.log(newText);

          _this.setState({
            whatWasLearned: newText
          }, function () {
            _this.setCaretPosition('whatWasLearned', leftIndex + 2);
          });

          break;

        case 'link':
          newText = "".concat(leftText, "[").concat(word, "](url)").concat(rightText);

          _this.setState({
            whatWasLearned: newText
          }, function () {
            _this.setCaretPosition('whatWasLearned', leftIndex + 1);
          });

          break;

        case 'quote':
          newText = "".concat(leftText, "\n\n> ").concat(word).concat(rightText);

          _this.setState({
            whatWasLearned: newText
          }, function () {
            _this.setCaretPosition('whatWasLearned', leftIndex + 4);
          });

          break;

        case 'code':
          newText = "".concat(leftText, "`").concat(word, "`").concat(rightText);

          _this.setState({
            whatWasLearned: newText
          }, function () {
            _this.setCaretPosition('whatWasLearned', leftIndex + 1);
          });

          break;

        case 'image':
          newText = "".concat(leftText, "![").concat(word, "](url)").concat(rightText);

          _this.setState({
            whatWasLearned: newText
          }, function () {
            _this.setCaretPosition('whatWasLearned', leftIndex + 2);
          });

          break;

        case 'listUl':
          newText = "".concat(leftText, "\n\n- ").concat(word).concat(rightText);

          _this.setState({
            whatWasLearned: newText
          }, function () {
            _this.setCaretPosition('whatWasLearned', leftIndex + 4);
          });

          break;

        case 'listOl':
          newText = "".concat(leftText, "\n\n1. ").concat(word).concat(rightText);

          _this.setState({
            whatWasLearned: newText
          }, function () {
            _this.setCaretPosition('whatWasLearned', leftIndex + 5);
          });

          break;

        case 'tasks':
          newText = "".concat(leftText, "\n\n- [ ] ").concat(word).concat(rightText);

          _this.setState({
            whatWasLearned: newText
          }, function () {
            _this.setCaretPosition('whatWasLearned', leftIndex + 8);
          });

          break;

        default:
          break;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "markdownButtonPressed", function (value) {
      var whatWasLearnedText = _this.state.whatWasLearned;
      var whatWasLearnedTextArea = document.getElementById('whatWasLearned');
      var startPosition = whatWasLearnedTextArea.selectionStart;
      var endPosition = whatWasLearnedTextArea.selectionEnd;

      if (startPosition == endPosition) {
        var prev = whatWasLearnedText.slice(startPosition - 1, startPosition);
        var next = whatWasLearnedText.slice(startPosition, startPosition + 1);

        if ((prev === '' || prev === ' ') && (next === '' || next === ' ')) {
          console.log('blanks on EITHER side of cursor position');

          var leftIndex = _this.indiciesForWordToLeft(whatWasLearnedText, startPosition);

          _this.handleButtonClickWithValue(whatWasLearnedText, value, '', startPosition, startPosition);
        } else if ((prev !== '' || prev !== ' ') && (next === '' || next === ' ')) {
          // console.log('blanks on RIGHT side of cursor position');
          var _leftIndex = _this.indiciesForWordToLeft(whatWasLearnedText, startPosition); // Slice the string to return the word


          var wordToTheLeft = whatWasLearnedText.substring(0, startPosition).substring(_leftIndex, startPosition);

          _this.handleButtonClickWithValue(whatWasLearnedText, value, wordToTheLeft, _leftIndex, startPosition); // console.log(wordToTheLeft);

        } else if ((prev === '' || prev === ' ') && (next !== '' || next !== ' ')) {
          // console.log('blanks on LEFT side of cursor position');
          var lastIndex = _this.indiciesForWordToRight(whatWasLearnedText, startPosition); // Slice the string to return the word


          var wordToTheRight = whatWasLearnedText.substring(startPosition).substring(0, lastIndex);

          _this.handleButtonClickWithValue(whatWasLearnedText, value, wordToTheRight, startPosition, startPosition + lastIndex); // console.log(wordToTheRight);

        } else {
          // Letters on either side of cursor
          // console.log('Letters on either side of cursor ');
          var lastIndexRight = _this.indiciesForWordToRight(whatWasLearnedText, startPosition);

          var lastIndexLeft = _this.indiciesForWordToLeft(whatWasLearnedText, startPosition);

          var wordCursorWithin = whatWasLearnedText.substring(lastIndexLeft, startPosition + lastIndexRight);

          _this.handleButtonClickWithValue(whatWasLearnedText, value, wordCursorWithin, lastIndexLeft, startPosition + lastIndexRight); // console.log(wordCursorWithin);

        }
      }
    });

    return _this;
  }

  _createClass(CreateLearningCard, [{
    key: "setCaretPosition",
    value: function setCaretPosition(el, pos) {
      var ctrl = document.getElementById(el);

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
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
        mutation: CREATE_CARD_MUTATION,
        variables: this.state,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      }, function (createCard, _ref) {
        var loading = _ref.loading,
            error = _ref.error;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_5__["default"], {
          "data-test": "form",
          onSubmit:
          /*#__PURE__*/
          function () {
            var _ref2 = _asyncToGenerator(
            /*#__PURE__*/
            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
              var res;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      e.preventDefault(); // call the mutation

                      _context.next = 3;
                      return createCard();

                    case 3:
                      res = _context.sent;
                      // change them to the home page.
                      next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push({
                        pathname: '/'
                      });

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 370
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__["default"], {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 382
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
          disabled: loading,
          "aria-busy": loading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 383
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 384
          },
          __self: this
        }, "Title", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "text",
          id: "title",
          name: "title",
          placeholder: "Title",
          required: true,
          value: _this2.state.title,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 386
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "dateWasLearned",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 396
          },
          __self: this
        }, "Date this was learned", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "text",
          id: "dateWasLearned",
          name: "dateWasLearned",
          placeholder: "Date this was learned",
          required: true,
          value: _this2.state.dateWasLearned,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 398
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 408
          },
          __self: this
        }, "Rotation Tags", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
          instanceId: "tags",
          classNamePrefix: "tagSelect",
          value: _this2.state.tags,
          onChange: function onChange(e) {
            return _this2.handelSelectChange(e, 'tags');
          },
          options: possibleRotationTypes,
          isMulti: true,
          isSearchable: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 410
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "wasLearnedWith",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 421
          },
          __self: this
        }, "Attending (To reference patient off Attending;s schedule later)", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "text",
          id: "wasLearnedWith",
          name: "wasLearnedWith",
          placeholder: "Attending you learned this with",
          value: _this2.state.wasLearnedWith,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 423
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 432
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "whatWasLearned",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 433
          },
          __self: this
        }, "Learning point", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
          query: ALL_USERS_QUERY,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 435
          },
          __self: this
        }, function (_ref3) {
          var data = _ref3.data,
              loading = _ref3.loading,
              error = _ref3.error;
          if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 437
            },
            __self: this
          }, "Loading...");
          var userArray = data.users.map(function (user) {
            return {
              link: user.id,
              name: user.name
            };
          });
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DraftEditor, {
            residents: userArray,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 443
            },
            __self: this
          }) // <MarkdownEditor
          //   residents={userArray}
          //   rotationTags={possibleRotationTypes}
          //   whatWasLearned={this.state.whatWasLearned}
          //   handleChange={this.handleChange}
          //   markdownButtonPressed={this.markdownButtonPressed}
          // />
          ;
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 456
          },
          __self: this
        }, "Submit")));
      });
    }
  }]);

  return CreateLearningCard;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CreateLearningCard);

/***/ }),

/***/ "./components/DraftEditor.js":
false,

/***/ "./components/MarkdownEditor.js":
false,

/***/ "./components/Mentions.js":
/*!********************************!*\
  !*** ./components/Mentions.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mentions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_mentions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-mentions */ "./node_modules/react-mentions/es/index.js");
/* harmony import */ var _defaultStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultStyle */ "./components/defaultStyle.js");
/* harmony import */ var _defaultMentionStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultMentionStyle */ "./components/defaultMentionStyle.js");
var _jsxFileName = "/Users/travisgerrard/Dropbox/react-learning/VMIMRtake2/frontend/components/Mentions.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Mentions =
/*#__PURE__*/
function (_Component) {
  _inherits(Mentions, _Component);

  function Mentions() {
    _classCallCheck(this, Mentions);

    return _possibleConstructorReturn(this, _getPrototypeOf(Mentions).apply(this, arguments));
  }

  _createClass(Mentions, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_mentions__WEBPACK_IMPORTED_MODULE_1__["MentionsInput"], {
        value: value,
        onChange: onChange,
        style: _defaultStyle__WEBPACK_IMPORTED_MODULE_2__["default"],
        markup: "@[__display__](__type__:__id__)",
        placeholder: "Mention people using '@'",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_mentions__WEBPACK_IMPORTED_MODULE_1__["Mention"], {
        type: "user",
        trigger: "@",
        data: data,
        renderSuggestion: function renderSuggestion(suggestion, search, highlightedDisplay, index, focused) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "user ".concat(focused ? 'focused' : ''),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          }, highlightedDisplay);
        },
        onAdd: onAdd,
        style: _defaultMentionStyle__WEBPACK_IMPORTED_MODULE_3__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }));
    }
  }]);

  return Mentions;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/defaultMentionStyle.js":
/*!*******************************************!*\
  !*** ./components/defaultMentionStyle.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  backgroundColor: '#cee4e5'
});

/***/ }),

/***/ "./components/defaultStyle.js":
/*!************************************!*\
  !*** ./components/defaultStyle.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  control: {
    backgroundColor: '#fff',
    fontSize: 12,
    fontWeight: 'normal'
  },
  highlighter: {
    overflow: 'hidden'
  },
  input: {
    margin: 0
  },
  '&singleLine': {
    control: {
      display: 'inline-block',
      width: 130
    },
    highlighter: {
      padding: 1,
      border: '2px inset transparent'
    },
    input: {
      padding: 1,
      border: '2px inset'
    }
  },
  '&multiLine': {
    control: {
      fontFamily: 'monospace',
      border: '1px solid silver'
    },
    highlighter: {
      padding: 9
    },
    input: {
      padding: 9,
      minHeight: 63,
      outline: 0,
      border: 0
    }
  },
  suggestions: {
    list: {
      backgroundColor: 'white',
      border: '1px solid rgba(0,0,0,0.15)',
      fontSize: 10
    },
    item: {
      padding: '5px 15px',
      borderBottom: '1px solid rgba(0,0,0,0.15)',
      '&focused': {
        backgroundColor: '#cee4e5'
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js":
false,

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js":
false,

/***/ "./node_modules/@fortawesome/react-fontawesome/index.es.js":
false,

/***/ "./node_modules/bail/index.js":
false,

/***/ "./node_modules/character-entities-legacy/index.json":
false,

/***/ "./node_modules/character-reference-invalid/index.json":
false,

/***/ "./node_modules/collapse-white-space/index.js":
false,

/***/ "./node_modules/decorate-component-with-props/lib/index.js":
false,

/***/ "./node_modules/draft-js-mention-plugin/lib/Mention/index.js":
false,

/***/ "./node_modules/draft-js-mention-plugin/lib/MentionSuggestions/Entry/Avatar/index.js":
false,

/***/ "./node_modules/draft-js-mention-plugin/lib/MentionSuggestions/Entry/defaultEntryComponent.js":
false,

/***/ "./node_modules/draft-js-mention-plugin/lib/MentionSuggestions/Entry/index.js":
false,

/***/ "./node_modules/draft-js-mention-plugin/lib/MentionSuggestions/index.js":
false,

/***/ "./node_modules/draft-js-mention-plugin/lib/MentionSuggestionsPortal/index.js":
false,

/***/ "./node_modules/draft-js-mention-plugin/lib/defaultRegExp.js":
false,

/***/ "./node_modules/draft-js-mention-plugin/lib/index.js":
false,

/***/ "./node_modules/draft-js-mention-plugin/lib/mentionStrategy.js":
false,

/***/ "./node_modules/draft-js-mention-plugin/lib/mentionSuggestionsStrategy.js":
false,

/***/ "./node_modules/draft-js-mention-plugin/lib/modifiers/addMention.js":
false,

/***/ "./node_modules/draft-js-mention-plugin/lib/plugin.css":
false,

/***/ "./node_modules/draft-js-mention-plugin/lib/utils/decodeOffsetKey.js":
false,

/***/ "./node_modules/draft-js-mention-plugin/lib/utils/defaultSuggestionsFilter.js":
false,

/***/ "./node_modules/draft-js-mention-plugin/lib/utils/getSearchText.js":
false,

/***/ "./node_modules/draft-js-mention-plugin/lib/utils/getSearchTextAt.js":
false,

/***/ "./node_modules/draft-js-mention-plugin/lib/utils/getTypeByTrigger.js":
false,

/***/ "./node_modules/draft-js-mention-plugin/lib/utils/positionSuggestions.js":
false,

/***/ "./node_modules/draft-js-plugins-editor/lib/Editor/MultiDecorator.js":
false,

/***/ "./node_modules/draft-js-plugins-editor/lib/Editor/createCompositeDecorator.js":
false,

/***/ "./node_modules/draft-js-plugins-editor/lib/Editor/defaultKeyBindings.js":
false,

/***/ "./node_modules/draft-js-plugins-editor/lib/Editor/defaultKeyCommands.js":
false,

/***/ "./node_modules/draft-js-plugins-editor/lib/Editor/index.js":
false,

/***/ "./node_modules/draft-js-plugins-editor/lib/Editor/moveSelectionToEnd.js":
false,

/***/ "./node_modules/draft-js-plugins-editor/lib/Editor/proxies.js":
false,

/***/ "./node_modules/draft-js-plugins-editor/lib/Editor/resolveDecorators.js":
false,

/***/ "./node_modules/draft-js-plugins-editor/lib/index.js":
false,

/***/ "./node_modules/draft-js-plugins-editor/lib/utils/composeDecorators.js":
false,

/***/ "./node_modules/draft-js-plugins-editor/lib/utils/createEditorStateWithText.js":
false,

/***/ "./node_modules/draft-js/lib/AtomicBlockUtils.js":
false,

/***/ "./node_modules/draft-js/lib/BlockMapBuilder.js":
false,

/***/ "./node_modules/draft-js/lib/BlockTree.js":
false,

/***/ "./node_modules/draft-js/lib/CharacterMetadata.js":
false,

/***/ "./node_modules/draft-js/lib/CompositeDraftDecorator.js":
false,

/***/ "./node_modules/draft-js/lib/ContentBlock.js":
false,

/***/ "./node_modules/draft-js/lib/ContentBlockNode.js":
false,

/***/ "./node_modules/draft-js/lib/ContentState.js":
false,

/***/ "./node_modules/draft-js/lib/ContentStateInlineStyle.js":
false,

/***/ "./node_modules/draft-js/lib/DefaultDraftBlockRenderMap.js":
false,

/***/ "./node_modules/draft-js/lib/DefaultDraftInlineStyle.js":
false,

/***/ "./node_modules/draft-js/lib/Draft.js":
false,

/***/ "./node_modules/draft-js/lib/DraftEditor.react.js":
false,

/***/ "./node_modules/draft-js/lib/DraftEditorBlock.react.js":
false,

/***/ "./node_modules/draft-js/lib/DraftEditorCompositionHandler.js":
false,

/***/ "./node_modules/draft-js/lib/DraftEditorContents-core.react.js":
false,

/***/ "./node_modules/draft-js/lib/DraftEditorContents.react.js":
false,

/***/ "./node_modules/draft-js/lib/DraftEditorDragHandler.js":
false,

/***/ "./node_modules/draft-js/lib/DraftEditorEditHandler.js":
false,

/***/ "./node_modules/draft-js/lib/DraftEditorLeaf.react.js":
false,

/***/ "./node_modules/draft-js/lib/DraftEditorPlaceholder.react.js":
false,

/***/ "./node_modules/draft-js/lib/DraftEditorTextNode.react.js":
false,

/***/ "./node_modules/draft-js/lib/DraftEntity.js":
false,

/***/ "./node_modules/draft-js/lib/DraftEntityInstance.js":
false,

/***/ "./node_modules/draft-js/lib/DraftEntitySegments.js":
false,

/***/ "./node_modules/draft-js/lib/DraftFeatureFlags-core.js":
false,

/***/ "./node_modules/draft-js/lib/DraftFeatureFlags.js":
false,

/***/ "./node_modules/draft-js/lib/DraftJsDebugLogging.js":
false,

/***/ "./node_modules/draft-js/lib/DraftModifier.js":
false,

/***/ "./node_modules/draft-js/lib/DraftOffsetKey.js":
false,

/***/ "./node_modules/draft-js/lib/DraftPasteProcessor.js":
false,

/***/ "./node_modules/draft-js/lib/DraftRemovableWord.js":
false,

/***/ "./node_modules/draft-js/lib/DraftStringKey.js":
false,

/***/ "./node_modules/draft-js/lib/DraftTreeAdapter.js":
false,

/***/ "./node_modules/draft-js/lib/EditorBidiService.js":
false,

/***/ "./node_modules/draft-js/lib/EditorState.js":
false,

/***/ "./node_modules/draft-js/lib/KeyBindingUtil.js":
false,

/***/ "./node_modules/draft-js/lib/RichTextEditorUtil.js":
false,

/***/ "./node_modules/draft-js/lib/SecondaryClipboard.js":
false,

/***/ "./node_modules/draft-js/lib/SelectionState.js":
false,

/***/ "./node_modules/draft-js/lib/adjustBlockDepthForContentState.js":
false,

/***/ "./node_modules/draft-js/lib/applyEntityToContentBlock.js":
false,

/***/ "./node_modules/draft-js/lib/applyEntityToContentState.js":
false,

/***/ "./node_modules/draft-js/lib/convertFromDraftStateToRaw.js":
false,

/***/ "./node_modules/draft-js/lib/convertFromHTMLToContentBlocks.js":
false,

/***/ "./node_modules/draft-js/lib/convertFromRawToDraftState.js":
false,

/***/ "./node_modules/draft-js/lib/createCharacterList.js":
false,

/***/ "./node_modules/draft-js/lib/decodeEntityRanges.js":
false,

/***/ "./node_modules/draft-js/lib/decodeInlineStyleRanges.js":
false,

/***/ "./node_modules/draft-js/lib/editOnBeforeInput.js":
false,

/***/ "./node_modules/draft-js/lib/editOnBlur.js":
false,

/***/ "./node_modules/draft-js/lib/editOnCompositionStart.js":
false,

/***/ "./node_modules/draft-js/lib/editOnCopy.js":
false,

/***/ "./node_modules/draft-js/lib/editOnCut.js":
false,

/***/ "./node_modules/draft-js/lib/editOnDragOver.js":
false,

/***/ "./node_modules/draft-js/lib/editOnDragStart.js":
false,

/***/ "./node_modules/draft-js/lib/editOnFocus.js":
false,

/***/ "./node_modules/draft-js/lib/editOnInput.js":
false,

/***/ "./node_modules/draft-js/lib/editOnKeyDown.js":
false,

/***/ "./node_modules/draft-js/lib/editOnPaste.js":
false,

/***/ "./node_modules/draft-js/lib/editOnSelect.js":
false,

/***/ "./node_modules/draft-js/lib/encodeEntityRanges.js":
false,

/***/ "./node_modules/draft-js/lib/encodeInlineStyleRanges.js":
false,

/***/ "./node_modules/draft-js/lib/expandRangeToStartOfLine.js":
false,

/***/ "./node_modules/draft-js/lib/findAncestorOffsetKey.js":
false,

/***/ "./node_modules/draft-js/lib/findRangesImmutable.js":
false,

/***/ "./node_modules/draft-js/lib/generateRandomKey.js":
false,

/***/ "./node_modules/draft-js/lib/getCharacterRemovalRange.js":
false,

/***/ "./node_modules/draft-js/lib/getContentStateFragment.js":
false,

/***/ "./node_modules/draft-js/lib/getDefaultKeyBinding.js":
false,

/***/ "./node_modules/draft-js/lib/getDraftEditorSelection.js":
false,

/***/ "./node_modules/draft-js/lib/getDraftEditorSelectionWithNodes.js":
false,

/***/ "./node_modules/draft-js/lib/getEntityKeyForSelection.js":
false,

/***/ "./node_modules/draft-js/lib/getFragmentFromSelection.js":
false,

/***/ "./node_modules/draft-js/lib/getNextDelimiterBlockKey.js":
false,

/***/ "./node_modules/draft-js/lib/getRangeBoundingClientRect.js":
false,

/***/ "./node_modules/draft-js/lib/getRangeClientRects.js":
false,

/***/ "./node_modules/draft-js/lib/getRangesForDraftEntity.js":
false,

/***/ "./node_modules/draft-js/lib/getSafeBodyFromHTML.js":
false,

/***/ "./node_modules/draft-js/lib/getSelectionOffsetKeyForNode.js":
false,

/***/ "./node_modules/draft-js/lib/getTextContentFromFiles.js":
false,

/***/ "./node_modules/draft-js/lib/getUpdatedSelectionState.js":
false,

/***/ "./node_modules/draft-js/lib/getVisibleSelectionRect.js":
false,

/***/ "./node_modules/draft-js/lib/insertFragmentIntoContentState.js":
false,

/***/ "./node_modules/draft-js/lib/insertIntoList.js":
false,

/***/ "./node_modules/draft-js/lib/insertTextIntoContentState.js":
false,

/***/ "./node_modules/draft-js/lib/isEventHandled.js":
false,

/***/ "./node_modules/draft-js/lib/isSelectionAtLeafStart.js":
false,

/***/ "./node_modules/draft-js/lib/keyCommandBackspaceToStartOfLine.js":
false,

/***/ "./node_modules/draft-js/lib/keyCommandBackspaceWord.js":
false,

/***/ "./node_modules/draft-js/lib/keyCommandDeleteWord.js":
false,

/***/ "./node_modules/draft-js/lib/keyCommandInsertNewline.js":
false,

/***/ "./node_modules/draft-js/lib/keyCommandMoveSelectionToEndOfBlock.js":
false,

/***/ "./node_modules/draft-js/lib/keyCommandMoveSelectionToStartOfBlock.js":
false,

/***/ "./node_modules/draft-js/lib/keyCommandPlainBackspace.js":
false,

/***/ "./node_modules/draft-js/lib/keyCommandPlainDelete.js":
false,

/***/ "./node_modules/draft-js/lib/keyCommandTransposeCharacters.js":
false,

/***/ "./node_modules/draft-js/lib/keyCommandUndo.js":
false,

/***/ "./node_modules/draft-js/lib/modifyBlockForContentState.js":
false,

/***/ "./node_modules/draft-js/lib/moveBlockInContentState.js":
false,

/***/ "./node_modules/draft-js/lib/moveSelectionBackward.js":
false,

/***/ "./node_modules/draft-js/lib/moveSelectionForward.js":
false,

/***/ "./node_modules/draft-js/lib/randomizeBlockMapKeys.js":
false,

/***/ "./node_modules/draft-js/lib/removeEntitiesAtEdges.js":
false,

/***/ "./node_modules/draft-js/lib/removeRangeFromContentState.js":
false,

/***/ "./node_modules/draft-js/lib/removeTextWithStrategy.js":
false,

/***/ "./node_modules/draft-js/lib/sanitizeDraftText.js":
false,

/***/ "./node_modules/draft-js/lib/setDraftEditorSelection.js":
false,

/***/ "./node_modules/draft-js/lib/splitBlockInContentState.js":
false,

/***/ "./node_modules/draft-js/lib/splitTextIntoTextBlocks.js":
false,

/***/ "./node_modules/extend/index.js":
false,

/***/ "./node_modules/fbjs/lib/DataTransfer.js":
false,

/***/ "./node_modules/fbjs/lib/Keys.js":
false,

/***/ "./node_modules/fbjs/lib/PhotosMimeType.js":
false,

/***/ "./node_modules/fbjs/lib/Scroll.js":
false,

/***/ "./node_modules/fbjs/lib/Style.js":
false,

/***/ "./node_modules/fbjs/lib/TokenizeUtil.js":
false,

/***/ "./node_modules/fbjs/lib/URI.js":
false,

/***/ "./node_modules/fbjs/lib/UnicodeBidi.js":
false,

/***/ "./node_modules/fbjs/lib/UnicodeBidiDirection.js":
false,

/***/ "./node_modules/fbjs/lib/UnicodeBidiService.js":
false,

/***/ "./node_modules/fbjs/lib/UnicodeUtils.js":
false,

/***/ "./node_modules/fbjs/lib/UserAgent.js":
false,

/***/ "./node_modules/fbjs/lib/UserAgentData.js":
false,

/***/ "./node_modules/fbjs/lib/VersionRange.js":
false,

/***/ "./node_modules/fbjs/lib/camelize.js":
false,

/***/ "./node_modules/fbjs/lib/containsNode.js":
false,

/***/ "./node_modules/fbjs/lib/createArrayFromMixed.js":
false,

/***/ "./node_modules/fbjs/lib/cx.js":
false,

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
false,

/***/ "./node_modules/fbjs/lib/getActiveElement.js":
false,

/***/ "./node_modules/fbjs/lib/getDocumentScrollElement.js":
false,

/***/ "./node_modules/fbjs/lib/getElementPosition.js":
false,

/***/ "./node_modules/fbjs/lib/getElementRect.js":
false,

/***/ "./node_modules/fbjs/lib/getScrollPosition.js":
false,

/***/ "./node_modules/fbjs/lib/getStyleProperty.js":
false,

/***/ "./node_modules/fbjs/lib/getUnboundedScrollPosition.js":
false,

/***/ "./node_modules/fbjs/lib/getViewportDimensions.js":
false,

/***/ "./node_modules/fbjs/lib/invariant.js":
false,

/***/ "./node_modules/fbjs/lib/isNode.js":
false,

/***/ "./node_modules/fbjs/lib/isTextNode.js":
false,

/***/ "./node_modules/fbjs/lib/joinClasses.js":
false,

/***/ "./node_modules/fbjs/lib/mapObject.js":
false,

/***/ "./node_modules/fbjs/lib/memoizeStringOnly.js":
false,

/***/ "./node_modules/fbjs/lib/nullthrows.js":
false,

/***/ "./node_modules/fbjs/lib/setImmediate.js":
false,

/***/ "./node_modules/immutable/dist/immutable.js":
false,

/***/ "./node_modules/inherits/inherits_browser.js":
false,

/***/ "./node_modules/is-alphabetical/index.js":
false,

/***/ "./node_modules/is-alphanumerical/index.js":
false,

/***/ "./node_modules/is-buffer/index.js":
false,

/***/ "./node_modules/is-decimal/index.js":
false,

/***/ "./node_modules/is-hexadecimal/index.js":
false,

/***/ "./node_modules/is-plain-obj/index.js":
false,

/***/ "./node_modules/is-whitespace-character/index.js":
false,

/***/ "./node_modules/is-word-character/index.js":
false,

/***/ "./node_modules/lodash.escaperegexp/index.js":
false,

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "./node_modules/lodash/_arrayEach.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayEach.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseAssign.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseAssign.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseAssignIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseClone.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseClone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssign = __webpack_require__(/*! ./_baseAssign */ "./node_modules/lodash/_baseAssign.js"),
    baseAssignIn = __webpack_require__(/*! ./_baseAssignIn */ "./node_modules/lodash/_baseAssignIn.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    copySymbols = __webpack_require__(/*! ./_copySymbols */ "./node_modules/lodash/_copySymbols.js"),
    copySymbolsIn = __webpack_require__(/*! ./_copySymbolsIn */ "./node_modules/lodash/_copySymbolsIn.js"),
    getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "./node_modules/lodash/_getAllKeysIn.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    initCloneArray = __webpack_require__(/*! ./_initCloneArray */ "./node_modules/lodash/_initCloneArray.js"),
    initCloneByTag = __webpack_require__(/*! ./_initCloneByTag */ "./node_modules/lodash/_initCloneByTag.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isMap = __webpack_require__(/*! ./isMap */ "./node_modules/lodash/isMap.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSet = __webpack_require__(/*! ./isSet */ "./node_modules/lodash/isSet.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });

    return result;
  }

  if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });

    return result;
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "./node_modules/lodash/_baseFlatten.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseFlatten.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isFlattenable = __webpack_require__(/*! ./_isFlattenable */ "./node_modules/lodash/_isFlattenable.js");

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "./node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "./node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "./node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMap.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsMap.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsSet.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsSet.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(/*! ./constant */ "./node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "./node_modules/lodash/_baseSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_baseUnset.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnset.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    last = __webpack_require__(/*! ./last */ "./node_modules/lodash/last.js"),
    parent = __webpack_require__(/*! ./_parent */ "./node_modules/lodash/_parent.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;


/***/ }),

/***/ "./node_modules/lodash/_baseValues.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseValues.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js");

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;


/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_cloneDataView.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_cloneDataView.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ "./node_modules/lodash/_cloneRegExp.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneRegExp.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ "./node_modules/lodash/_cloneSymbol.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneSymbol.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "./node_modules/lodash/_copySymbols.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_copySymbols.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js");

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ "./node_modules/lodash/_copySymbolsIn.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_copySymbolsIn.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js");

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_customOmitClone.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_customOmitClone.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPlainObject = __webpack_require__(/*! ./isPlainObject */ "./node_modules/lodash/isPlainObject.js");

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return isPlainObject(value) ? undefined : value;
}

module.exports = customOmitClone;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "./node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "./node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "./node_modules/lodash/_flatRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_flatRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__(/*! ./flatten */ "./node_modules/lodash/flatten.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getAllKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getSymbolsIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getSymbolsIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_initCloneArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneArray.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ "./node_modules/lodash/_initCloneByTag.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneByTag.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js"),
    cloneDataView = __webpack_require__(/*! ./_cloneDataView */ "./node_modules/lodash/_cloneDataView.js"),
    cloneRegExp = __webpack_require__(/*! ./_cloneRegExp */ "./node_modules/lodash/_cloneRegExp.js"),
    cloneSymbol = __webpack_require__(/*! ./_cloneSymbol */ "./node_modules/lodash/_cloneSymbol.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js");

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "./node_modules/lodash/_isFlattenable.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_isFlattenable.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "./node_modules/lodash/_parent.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_parent.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js"),
    baseSlice = __webpack_require__(/*! ./_baseSlice */ "./node_modules/lodash/_baseSlice.js");

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;


/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "./node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/escapeRegExp.js":
false,

/***/ "./node_modules/lodash/flatten.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/flatten.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "./node_modules/lodash/_baseFlatten.js");

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isEqual.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isEqual.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),

/***/ "./node_modules/lodash/isFinite.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isFinite.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsFinite = root.isFinite;

/**
 * Checks if `value` is a finite primitive number.
 *
 * **Note:** This method is based on
 * [`Number.isFinite`](https://mdn.io/Number/isFinite).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
 * @example
 *
 * _.isFinite(3);
 * // => true
 *
 * _.isFinite(Number.MIN_VALUE);
 * // => true
 *
 * _.isFinite(Infinity);
 * // => false
 *
 * _.isFinite('3');
 * // => false
 */
function isFinite(value) {
  return typeof value == 'number' && nativeIsFinite(value);
}

module.exports = isFinite;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isMap.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isMap.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__(/*! ./_baseIsMap */ "./node_modules/lodash/_baseIsMap.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ "./node_modules/lodash/isNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && baseGetTag(value) == numberTag);
}

module.exports = isNumber;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/isPlainObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ "./node_modules/lodash/isSet.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isSet.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__(/*! ./_baseIsSet */ "./node_modules/lodash/_baseIsSet.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "./node_modules/lodash/last.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/last.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/lodash/omit.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/omit.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseClone = __webpack_require__(/*! ./_baseClone */ "./node_modules/lodash/_baseClone.js"),
    baseUnset = __webpack_require__(/*! ./_baseUnset */ "./node_modules/lodash/_baseUnset.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    customOmitClone = __webpack_require__(/*! ./_customOmitClone */ "./node_modules/lodash/_customOmitClone.js"),
    flatRest = __webpack_require__(/*! ./_flatRest */ "./node_modules/lodash/_flatRest.js"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "./node_modules/lodash/_getAllKeysIn.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});

module.exports = omit;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/values.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/values.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseValues = __webpack_require__(/*! ./_baseValues */ "./node_modules/lodash/_baseValues.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;


/***/ }),

/***/ "./node_modules/markdown-escapes/index.js":
false,

/***/ "./node_modules/mdast-add-list-metadata/index.js":
false,

/***/ "./node_modules/parse-entities/decode-entity.browser.js":
false,

/***/ "./node_modules/parse-entities/index.js":
false,

/***/ "./node_modules/path-browserify/index.js":
false,

/***/ "./node_modules/react-input-trigger/build/es/react-input-trigger.js":
false,

/***/ "./node_modules/react-markdown/lib/ast-to-react.js":
false,

/***/ "./node_modules/react-markdown/lib/get-definitions.js":
false,

/***/ "./node_modules/react-markdown/lib/plugins/disallow-node.js":
false,

/***/ "./node_modules/react-markdown/lib/plugins/naive-html.js":
false,

/***/ "./node_modules/react-markdown/lib/react-markdown.js":
false,

/***/ "./node_modules/react-markdown/lib/renderers.js":
false,

/***/ "./node_modules/react-markdown/lib/symbols.js":
false,

/***/ "./node_modules/react-markdown/lib/uri-transformer.js":
false,

/***/ "./node_modules/react-markdown/lib/wrap-table-rows.js":
false,

/***/ "./node_modules/react-mentions/es/Highlighter.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-mentions/es/Highlighter.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var substyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! substyle */ "./node_modules/substyle/lib/index.js");
/* harmony import */ var substyle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(substyle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/isNumber */ "./node_modules/lodash/isNumber.js");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/react-mentions/es/utils.js");
/* harmony import */ var _Mention__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Mention */ "./node_modules/react-mentions/es/Mention.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var _generateComponentKey = function _generateComponentKey(usedKeys, id) {
  if (!usedKeys.hasOwnProperty(id)) {
    usedKeys[id] = 0;
  } else {
    usedKeys[id]++;
  }
  return id + '_' + usedKeys[id];
};

var Highlighter = (_temp = _class = function (_Component) {
  _inherits(Highlighter, _Component);

  function Highlighter() {
    _classCallCheck(this, Highlighter);

    var _this = _possibleConstructorReturn(this, _Component.apply(this, arguments));

    _this.state = { lastPosition: {} };
    return _this;
  }

  Highlighter.prototype.componentDidMount = function componentDidMount() {
    this.notifyCaretPosition();
  };

  Highlighter.prototype.componentDidUpdate = function componentDidUpdate() {
    this.notifyCaretPosition();
  };

  Highlighter.prototype.notifyCaretPosition = function notifyCaretPosition() {
    if (!this.caretRef) {
      return;
    }

    var position = {
      left: this.caretRef.offsetLeft,
      top: this.caretRef.offsetTop
    };

    var lastPosition = this.state.lastPosition;


    if (lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default()(lastPosition, position)) {
      return;
    }

    this.setState({
      lastPosition: position
    });

    this.props.onCaretPositionChange(position);
  };

  Highlighter.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        selection = _props.selection,
        value = _props.value,
        markup = _props.markup,
        displayTransform = _props.displayTransform,
        style = _props.style,
        inputStyle = _props.inputStyle,
        regex = _props.regex;

    // If there's a caret (i.e. no range selection), map the caret position into the marked up value

    var caretPositionInMarkup = void 0;
    if (selection.start === selection.end) {
      caretPositionInMarkup = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["mapPlainTextIndex"])(value, markup, selection.start, 'START', displayTransform, regex);
    }

    var resultComponents = [];
    var componentKeys = {};

    // start by appending directly to the resultComponents
    var components = resultComponents;

    var substringComponentKey = 0;

    var textIteratee = function textIteratee(substr, index, indexInPlainText) {
      // check whether the caret element has to be inserted inside the current plain substring
      if (lodash_isNumber__WEBPACK_IMPORTED_MODULE_4___default()(caretPositionInMarkup) && caretPositionInMarkup >= index && caretPositionInMarkup <= index + substr.length) {
        // if yes, split substr at the caret position and insert the caret component
        var splitIndex = caretPositionInMarkup - index;
        components.push(_this2.renderSubstring(substr.substring(0, splitIndex), substringComponentKey));

        // add all following substrings and mention components as children of the caret component
        components = [_this2.renderSubstring(substr.substring(splitIndex), substringComponentKey)];
      } else {
        // otherwise just push the plain text substring
        components.push(_this2.renderSubstring(substr, substringComponentKey));
      }

      substringComponentKey++;
    };

    var mentionIteratee = function mentionIteratee(markup, index, indexInPlainText, id, display, type, lastMentionEndIndex) {
      // generate a component key based on the id
      var key = _generateComponentKey(componentKeys, id);
      components.push(_this2.getMentionComponentForMatch(id, display, type, key));
    };

    Object(_utils__WEBPACK_IMPORTED_MODULE_5__["iterateMentionsMarkup"])(value, markup, textIteratee, mentionIteratee, displayTransform, regex);

    // append a span containing a space, to ensure the last text line has the correct height
    components.push(' ');

    if (components !== resultComponents) {
      // if a caret component is to be rendered, add all components that followed as its children
      resultComponents.push(this.renderHighlighterCaret(components));
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'div',
      _extends({}, style, {
        style: _extends({}, inputStyle, style.style)
      }),
      resultComponents
    );
  };

  Highlighter.prototype.renderSubstring = function renderSubstring(string, key) {
    // set substring span to hidden, so that Emojis are not shown double in Mobile Safari
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'span',
      _extends({}, this.props.style('substring'), { key: key }),
      string
    );
  };

  // Returns a clone of the Mention child applicable for the specified type to be rendered inside the highlighter


  Highlighter.prototype.getMentionComponentForMatch = function getMentionComponentForMatch(id, display, type, key) {
    var childrenCount = react__WEBPACK_IMPORTED_MODULE_0__["Children"].count(this.props.children);
    var props = { id: id, display: display, key: key };

    if (childrenCount > 1) {
      if (!type) {
        throw new Error('Since multiple Mention components have been passed as children, the markup has to define the __type__ placeholder');
      }

      // detect the Mention child to be cloned
      var foundChild = null;
      react__WEBPACK_IMPORTED_MODULE_0__["Children"].forEach(this.props.children, function (child) {
        if (!child) {
          return;
        }

        if (child.props.type === type) {
          foundChild = child;
        }
      });

      // clone the Mention child that is applicable for the given type
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(foundChild, props);
    }

    if (childrenCount === 1) {
      // clone single Mention child
      var child = this.props.children.length ? this.props.children[0] : react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(this.props.children);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, props);
    }
    // no children, use default configuration
    return Object(_Mention__WEBPACK_IMPORTED_MODULE_6__["default"])(props);
  };

  // Renders an component to be inserted in the highlighter at the current caret position


  Highlighter.prototype.renderHighlighterCaret = function renderHighlighterCaret(children) {
    var _this3 = this;

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'span',
      _extends({}, this.props.style('caret'), {
        ref: function ref(el) {
          _this3.caretRef = el;
        },
        key: 'caret'
      }),
      children
    );
  };

  return Highlighter;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _class.defaultProps = {
  value: '',
  inputStyle: {}
}, _temp);
Highlighter.propTypes =  true ? {
  selection: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    start: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    end: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  }).isRequired,

  markup: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,

  displayTransform: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onCaretPositionChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  inputStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
} : undefined;


var styled = Object(substyle__WEBPACK_IMPORTED_MODULE_2__["defaultStyle"])({
  position: 'relative',
  width: 'inherit',
  color: 'transparent',

  overflow: 'hidden',

  whiteSpace: 'pre-wrap',
  wordWrap: 'break-word',

  '&singleLine': {
    whiteSpace: 'pre',
    wordWrap: null
  },

  substring: {
    visibility: 'hidden'
  }
}, function (props) {
  return {
    '&singleLine': props.singleLine
  };
});

/* harmony default export */ __webpack_exports__["default"] = (styled(Highlighter));

/***/ }),

/***/ "./node_modules/react-mentions/es/LoadingIndicator.js":
/*!************************************************************!*\
  !*** ./node_modules/react-mentions/es/LoadingIndicator.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var substyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! substyle */ "./node_modules/substyle/lib/index.js");
/* harmony import */ var substyle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(substyle__WEBPACK_IMPORTED_MODULE_1__);



function LoadingIndicator(_ref) {
  var style = _ref.style;

  var spinnerStyle = style('spinner');
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    style,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'div',
      spinnerStyle,
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', spinnerStyle(['element', 'element1'])),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', spinnerStyle(['element', 'element2'])),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', spinnerStyle(['element', 'element3'])),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', spinnerStyle(['element', 'element4'])),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', spinnerStyle(['element', 'element5']))
    )
  );
}

/* harmony default export */ __webpack_exports__["default"] = (substyle__WEBPACK_IMPORTED_MODULE_1___default()(LoadingIndicator));

/***/ }),

/***/ "./node_modules/react-mentions/es/Mention.js":
/*!***************************************************!*\
  !*** ./node_modules/react-mentions/es/Mention.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var substyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! substyle */ "./node_modules/substyle/lib/index.js");
/* harmony import */ var substyle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(substyle__WEBPACK_IMPORTED_MODULE_2__);




var styled = Object(substyle__WEBPACK_IMPORTED_MODULE_2__["defaultStyle"])({
  fontWeight: 'inherit'
});

var Mention = styled(function (_ref) {
  var display = _ref.display,
      style = _ref.style;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'strong',
    style,
    display
  );
});

Mention.propTypes = {
  /**
   * Called when a new mention is added in the input
   *
   * Example:
   *
   * ```js
   * function(id, display) {
   *   console.log("user " + display + " was mentioned!");
   * }
   * ```
   */
  onAdd: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onRemove: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  renderSuggestion: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  trigger: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(RegExp)]),

  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

Mention.defaultProps = {
  trigger: '@',

  onAdd: function onAdd() {
    return null;
  },
  onRemove: function onRemove() {
    return null;
  },
  renderSuggestion: null,
  isLoading: false,
  appendSpaceOnAdd: false
};

/* harmony default export */ __webpack_exports__["default"] = (Mention);

/***/ }),

/***/ "./node_modules/react-mentions/es/MentionsInput.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-mentions/es/MentionsInput.js ***!
  \*********************************************************/
/*! exports provided: _getTriggerRegex, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getTriggerRegex", function() { return _getTriggerRegex; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/keys */ "./node_modules/lodash/keys.js");
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_values__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/values */ "./node_modules/lodash/values.js");
/* harmony import */ var lodash_values__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_values__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/omit */ "./node_modules/lodash/omit.js");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/isNumber */ "./node_modules/lodash/isNumber.js");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var substyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! substyle */ "./node_modules/substyle/lib/index.js");
/* harmony import */ var substyle__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(substyle__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./node_modules/react-mentions/es/utils.js");
/* harmony import */ var _SuggestionsOverlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SuggestionsOverlay */ "./node_modules/react-mentions/es/SuggestionsOverlay.js");
/* harmony import */ var _Highlighter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Highlighter */ "./node_modules/react-mentions/es/Highlighter.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

















var _getTriggerRegex = function _getTriggerRegex(trigger) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (trigger instanceof RegExp) {
    return trigger;
  } else {
    var allowSpaceInQuery = options.allowSpaceInQuery;

    var escapedTriggerChar = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["escapeRegex"])(trigger);

    // first capture group is the part to be replaced on completion
    // second capture group is for extracting the search query
    return new RegExp('(?:^|\\s)(' + escapedTriggerChar + '([^' + (allowSpaceInQuery ? '' : '\\s') + escapedTriggerChar + ']*))$');
  }
};

var _getDataProvider = function _getDataProvider(data) {
  if (data instanceof Array) {
    // if data is an array, create a function to query that
    return function (query, callback) {
      var results = [];
      for (var i = 0, l = data.length; i < l; ++i) {
        var display = data[i].display || data[i].id;
        if (display.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
          results.push(data[i]);
        }
      }
      return results;
    };
  } else {
    // expect data to be a query function
    return data;
  }
};

var KEY = { TAB: 9, RETURN: 13, ESC: 27, UP: 38, DOWN: 40 };

var isComposing = false;

var propTypes = {
  /**
   * If set to `true` a regular text input element will be rendered
   * instead of a textarea
   */
  singleLine: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * If set to `true` spaces will not interrupt matching suggestions
   */
  allowSpaceInQuery: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  markup: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  displayTransform: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  suggestionsPortalHost: typeof Element === 'undefined' ? prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any : prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.PropTypes.instanceOf(Element),
  inputRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({ current: typeof Element === 'undefined' ? prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any : prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Element) })]),

  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element)]).isRequired
};

var MentionsInput = (_temp = _class = function (_React$Component) {
  _inherits(MentionsInput, _React$Component);

  function MentionsInput(props) {
    _classCallCheck(this, MentionsInput);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    _this.suggestions = {};

    _this.state = {
      focusIndex: 0,

      selectionStart: null,
      selectionEnd: null,

      suggestions: {},

      caretPosition: null,
      suggestionsPosition: null
    };
    return _this;
  }

  MentionsInput.prototype.render = function render() {
    var _this2 = this;

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'div',
      _extends({
        ref: function ref(el) {
          _this2.containerRef = el;
        }
      }, this.props.style),
      this.renderControl(),
      this.renderSuggestionsOverlay()
    );
  };

  // Returns the text to set as the value of the textarea with all markups removed


  // Handle input element's change event


  // Handle input element's select event


  MentionsInput.prototype.componentDidMount = function componentDidMount() {
    this.updateSuggestionsPosition();
  };

  MentionsInput.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    this.updateSuggestionsPosition();

    // maintain selection in case a mention is added/removed causing
    // the cursor to jump to the end
    if (this.state.setSelectionAfterMentionChange) {
      this.setState({ setSelectionAfterMentionChange: false });
      this.setSelection(this.state.selectionStart, this.state.selectionEnd);
    }
  };

  return MentionsInput;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component), _class.defaultProps = {
  markup: '@[__display__](__id__)',
  singleLine: false,
  displayTransform: function displayTransform(id, display, type) {
    return display;
  },
  onKeyDown: function onKeyDown() {
    return null;
  },
  onSelect: function onSelect() {
    return null;
  },
  onBlur: function onBlur() {
    return null;
  }
}, _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.getInputProps = function (isTextarea) {
    var _props = _this3.props,
        readOnly = _props.readOnly,
        disabled = _props.disabled,
        style = _props.style;

    // pass all props that we don't use through to the input control

    var props = lodash_omit__WEBPACK_IMPORTED_MODULE_5___default()(_this3.props, 'style', lodash_keys__WEBPACK_IMPORTED_MODULE_3___default()(propTypes));

    return _extends({}, props, style('input'), {

      value: _this3.getPlainText()

    }, !readOnly && !disabled && {
      onChange: _this3.handleChange,
      onSelect: _this3.handleSelect,
      onKeyDown: _this3.handleKeyDown,
      onBlur: _this3.handleBlur,
      onCompositionStart: _this3.handleCompositionStart,
      onCompositionEnd: _this3.handleCompositionEnd,
      onScroll: _this3.updateHighlighterScroll
    });
  };

  this.renderControl = function () {
    var _props2 = _this3.props,
        singleLine = _props2.singleLine,
        style = _props2.style;

    var inputProps = _this3.getInputProps(!singleLine);

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'div',
      style('control'),
      _this3.renderHighlighter(inputProps.style),
      singleLine ? _this3.renderInput(inputProps) : _this3.renderTextarea(inputProps)
    );
  };

  this.renderInput = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', _extends({ type: 'text', ref: _this3.setInputRef }, props));
  };

  this.renderTextarea = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('textarea', _extends({ ref: _this3.setInputRef }, props));
  };

  this.setInputRef = function (el) {
    _this3.inputRef = el;
    var inputRef = _this3.props.inputRef;

    if (typeof inputRef === 'function') {
      inputRef(el);
    } else if (inputRef) {
      inputRef.current = el;
    }
  };

  this.renderSuggestionsOverlay = function () {
    if (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_7___default()(_this3.state.selectionStart)) {
      // do not show suggestions when the input does not have the focus
      return null;
    }
    var suggestionsNode = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SuggestionsOverlay__WEBPACK_IMPORTED_MODULE_10__["default"], {
      style: _this3.props.style('suggestions'),
      position: _this3.state.suggestionsPosition,
      focusIndex: _this3.state.focusIndex,
      scrollFocusedIntoView: _this3.state.scrollFocusedIntoView,
      ref: function ref(el) {
        _this3.suggestionsRef = el;
      },
      suggestions: _this3.state.suggestions,
      onSelect: _this3.addMention,
      onMouseDown: _this3.handleSuggestionsMouseDown,
      onMouseEnter: function onMouseEnter(focusIndex) {
        return _this3.setState({
          focusIndex: focusIndex,
          scrollFocusedIntoView: false
        });
      },
      isLoading: _this3.isLoading()
    });
    if (_this3.props.suggestionsPortalHost) {
      return react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.createPortal(suggestionsNode, _this3.props.suggestionsPortalHost);
    } else {
      return suggestionsNode;
    }
  };

  this.renderHighlighter = function (inputStyle) {
    var _state = _this3.state,
        selectionStart = _state.selectionStart,
        selectionEnd = _state.selectionEnd;
    var _props3 = _this3.props,
        markup = _props3.markup,
        displayTransform = _props3.displayTransform,
        singleLine = _props3.singleLine,
        children = _props3.children,
        value = _props3.value,
        style = _props3.style,
        regex = _props3.regex;


    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      _Highlighter__WEBPACK_IMPORTED_MODULE_11__["default"],
      {
        ref: function ref(el) {
          _this3.highlighterRef = el;
        },
        style: style('highlighter'),
        inputStyle: inputStyle,
        value: value,
        markup: markup,
        displayTransform: displayTransform,
        singleLine: singleLine,
        selection: {
          start: selectionStart,
          end: selectionEnd
        },
        onCaretPositionChange: function onCaretPositionChange(position) {
          return _this3.setState({ caretPosition: position });
        },
        regex: regex
      },
      children
    );
  };

  this.getPlainText = function () {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getPlainText"])(_this3.props.value || '', _this3.props.markup, _this3.props.displayTransform, _this3.props.regex);
  };

  this.executeOnChange = function (event) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (_this3.props.onChange) {
      var _props4;

      return (_props4 = _this3.props).onChange.apply(_props4, [event].concat(args));
    }

    if (_this3.props.valueLink) {
      var _props$valueLink;

      return (_props$valueLink = _this3.props.valueLink).requestChange.apply(_props$valueLink, [event.target.value].concat(args));
    }
  };

  this.handleChange = function (ev) {
    // if we are inside iframe, we need to find activeElement within its contentDocument
    var currentDocument = document.activeElement && document.activeElement.contentDocument || document;
    if (currentDocument.activeElement !== ev.target) {
      // fix an IE bug (blur from empty input element with placeholder attribute trigger "input" event)
      return;
    }

    var value = _this3.props.value || '';
    var _props5 = _this3.props,
        markup = _props5.markup,
        displayTransform = _props5.displayTransform,
        regex = _props5.regex;


    var newPlainTextValue = ev.target.value;

    // Derive the new value to set by applying the local change in the textarea's plain text
    var newValue = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["applyChangeToValue"])(value, markup, newPlainTextValue, _this3.state.selectionStart, _this3.state.selectionEnd, ev.target.selectionEnd, displayTransform, regex);

    // In case a mention is deleted, also adjust the new plain text value
    newPlainTextValue = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getPlainText"])(newValue, markup, displayTransform, regex);

    // Save current selection after change to be able to restore caret position after rerendering
    var selectionStart = ev.target.selectionStart;
    var selectionEnd = ev.target.selectionEnd;
    var setSelectionAfterMentionChange = false;

    // Adjust selection range in case a mention will be deleted by the characters outside of the
    // selection range that are automatically deleted
    var startOfMention = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["findStartOfMentionInPlainText"])(value, markup, selectionStart, displayTransform, regex);

    if (startOfMention !== undefined && _this3.state.selectionEnd > startOfMention) {
      // only if a deletion has taken place
      selectionStart = startOfMention;
      selectionEnd = selectionStart;
      setSelectionAfterMentionChange = true;
    }

    _this3.setState({
      selectionStart: selectionStart,
      selectionEnd: selectionEnd,
      setSelectionAfterMentionChange: setSelectionAfterMentionChange
    });

    var mentions = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getMentions"])(newValue, markup, displayTransform, regex);

    // Propagate change
    // let handleChange = this.getOnChange(this.props) || emptyFunction;
    var eventMock = { target: { value: newValue }
      // this.props.onChange.call(this, eventMock, newValue, newPlainTextValue, mentions);
    };_this3.executeOnChange(eventMock, newValue, newPlainTextValue, mentions);
  };

  this.handleSelect = function (ev) {
    // keep track of selection range / caret position
    _this3.setState({
      selectionStart: ev.target.selectionStart,
      selectionEnd: ev.target.selectionEnd
    });

    // do nothing while a IME composition session is active
    if (isComposing) return;

    // refresh suggestions queries
    var el = _this3.inputRef;
    if (ev.target.selectionStart === ev.target.selectionEnd) {
      _this3.updateMentionsQueries(el.value, ev.target.selectionStart);
    } else {
      _this3.clearSuggestions();
    }

    // sync highlighters scroll position
    _this3.updateHighlighterScroll();

    _this3.props.onSelect(ev);
  };

  this.handleKeyDown = function (ev) {
    // do not intercept key events if the suggestions overlay is not shown
    var suggestionsCount = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["countSuggestions"])(_this3.state.suggestions);

    var suggestionsComp = _this3.suggestionsRef;
    if (suggestionsCount === 0 || !suggestionsComp) {
      _this3.props.onKeyDown(ev);

      return;
    }

    if (lodash_values__WEBPACK_IMPORTED_MODULE_4___default()(KEY).indexOf(ev.keyCode) >= 0) {
      ev.preventDefault();
    }

    switch (ev.keyCode) {
      case KEY.ESC:
        {
          _this3.clearSuggestions();
          return;
        }
      case KEY.DOWN:
        {
          _this3.shiftFocus(+1);
          return;
        }
      case KEY.UP:
        {
          _this3.shiftFocus(-1);
          return;
        }
      case KEY.RETURN:
        {
          _this3.selectFocused();
          return;
        }
      case KEY.TAB:
        {
          _this3.selectFocused();
          return;
        }
      default:
        {
          return;
        }
    }
  };

  this.shiftFocus = function (delta) {
    var suggestionsCount = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["countSuggestions"])(_this3.state.suggestions);

    _this3.setState({
      focusIndex: (suggestionsCount + _this3.state.focusIndex + delta) % suggestionsCount,
      scrollFocusedIntoView: true
    });
  };

  this.selectFocused = function () {
    var _state2 = _this3.state,
        suggestions = _state2.suggestions,
        focusIndex = _state2.focusIndex;

    var _getSuggestion = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getSuggestion"])(suggestions, focusIndex),
        suggestion = _getSuggestion.suggestion,
        descriptor = _getSuggestion.descriptor;

    _this3.addMention(suggestion, descriptor);

    _this3.setState({
      focusIndex: 0
    });
  };

  this.handleBlur = function (ev) {
    var clickedSuggestion = _this3._suggestionsMouseDown;
    _this3._suggestionsMouseDown = false;

    // only reset selection if the mousedown happened on an element
    // other than the suggestions overlay
    if (!clickedSuggestion) {
      _this3.setState({
        selectionStart: null,
        selectionEnd: null
      });
    }

    window.setTimeout(function () {
      _this3.updateHighlighterScroll();
    }, 1);

    _this3.props.onBlur(ev, clickedSuggestion);
  };

  this.handleSuggestionsMouseDown = function (ev) {
    _this3._suggestionsMouseDown = true;
  };

  this.updateSuggestionsPosition = function () {
    var caretPosition = _this3.state.caretPosition;


    if (!caretPosition || !_this3.suggestionsRef) {
      return;
    }

    var suggestions = react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.findDOMNode(_this3.suggestionsRef);
    var highlighter = react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.findDOMNode(_this3.highlighterRef);

    if (!suggestions) {
      return;
    }

    var position = {};

    // if suggestions menu is in a portal, update position to be releative to its portal node
    if (_this3.props.suggestionsPortalHost) {
      // first get viewport-relative position (highlighter is offsetParent of caret):
      var caretOffsetParentRect = highlighter.getBoundingClientRect();
      var caretHeight = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getComputedStyleLengthProp"])(highlighter, 'font-size');
      var viewportRelative = {
        left: caretOffsetParentRect.left + caretPosition.left,
        top: caretOffsetParentRect.top + caretPosition.top + caretHeight
      };
      position.position = 'fixed';
      var left = viewportRelative.left;
      position.top = viewportRelative.top;
      // absolute/fixed positioned elements are positioned according to their entire box including margins; so we remove margins here:
      left -= Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getComputedStyleLengthProp"])(suggestions, 'margin-left');
      position.top -= Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getComputedStyleLengthProp"])(suggestions, 'margin-top');
      // take into account highlighter/textinput scrolling:
      left -= highlighter.scrollLeft;
      position.top -= highlighter.scrollTop;
      // guard for mentions suggestions list clipped by right edge of window
      var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      if (left + suggestions.offsetWidth > viewportWidth) {
        position.left = Math.max(0, viewportWidth - suggestions.offsetWidth);
      } else {
        position.left = left;
      }
    } else {
      var _left = caretPosition.left - highlighter.scrollLeft;
      // guard for mentions suggestions list clipped by right edge of window
      if (_left + suggestions.offsetWidth > _this3.containerRef.offsetWidth) {
        position.right = 0;
      } else {
        position.left = _left;
      }
      position.top = caretPosition.top - highlighter.scrollTop;
    }

    if (lodash_isEqual__WEBPACK_IMPORTED_MODULE_6___default()(position, _this3.state.suggestionsPosition)) {
      return;
    }

    _this3.setState({
      suggestionsPosition: position
    });
  };

  this.updateHighlighterScroll = function () {
    if (!_this3.inputRef || !_this3.highlighterRef) {
      // since the invocation of this function is deferred,
      // the whole component may have been unmounted in the meanwhile
      return;
    }
    var input = _this3.inputRef;
    var highlighter = react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.findDOMNode(_this3.highlighterRef);
    highlighter.scrollLeft = input.scrollLeft;
    highlighter.scrollTop = input.scrollTop;
    highlighter.height = input.height;
  };

  this.handleCompositionStart = function () {
    isComposing = true;
  };

  this.handleCompositionEnd = function () {
    isComposing = false;
  };

  this.setSelection = function (selectionStart, selectionEnd) {
    if (selectionStart === null || selectionEnd === null) return;

    var el = _this3.inputRef;
    if (el.setSelectionRange) {
      el.setSelectionRange(selectionStart, selectionEnd);
    } else if (el.createTextRange) {
      var range = el.createTextRange();
      range.collapse(true);
      range.moveEnd('character', selectionEnd);
      range.moveStart('character', selectionStart);
      range.select();
    }
  };

  this.updateMentionsQueries = function (plainTextValue, caretPosition) {
    // Invalidate previous queries. Async results for previous queries will be neglected.
    _this3._queryId++;
    _this3.suggestions = {};
    _this3.setState({
      suggestions: {}
    });

    var value = _this3.props.value || '';
    var _props6 = _this3.props,
        markup = _props6.markup,
        displayTransform = _props6.displayTransform,
        children = _props6.children,
        regex = _props6.regex;

    var positionInValue = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["mapPlainTextIndex"])(value, markup, caretPosition, 'NULL', displayTransform, regex);

    // If caret is inside of mention, do not query
    if (positionInValue === null) {
      return;
    }

    // Extract substring in between the end of the previous mention and the caret
    var substringStartIndex = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getEndOfLastMention"])(value.substring(0, positionInValue), markup, displayTransform, regex);
    var substring = plainTextValue.substring(substringStartIndex, caretPosition);

    // Check if suggestions have to be shown:
    // Match the trigger patterns of all Mention children on the extracted substring
    react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.forEach(children, function (child) {
      if (!child) {
        return;
      }

      var regex = _getTriggerRegex(child.props.trigger, _this3.props);
      var match = substring.match(regex);
      if (match) {
        var querySequenceStart = substringStartIndex + substring.indexOf(match[1], match.index);
        _this3.queryData(match[2], child, querySequenceStart, querySequenceStart + match[1].length, plainTextValue);
      }
    });
  };

  this.clearSuggestions = function () {
    // Invalidate previous queries. Async results for previous queries will be neglected.
    _this3._queryId++;
    _this3.suggestions = {};
    _this3.setState({
      suggestions: {},
      focusIndex: 0
    });
  };

  this.queryData = function (query, mentionDescriptor, querySequenceStart, querySequenceEnd, plainTextValue) {
    var provideData = _getDataProvider(mentionDescriptor.props.data);
    var snycResult = provideData(query, _this3.updateSuggestions.bind(null, _this3._queryId, mentionDescriptor, query, querySequenceStart, querySequenceEnd, plainTextValue));
    if (snycResult instanceof Array) {
      _this3.updateSuggestions(_this3._queryId, mentionDescriptor, query, querySequenceStart, querySequenceEnd, plainTextValue, snycResult);
    }
  };

  this.updateSuggestions = function (queryId, mentionDescriptor, query, querySequenceStart, querySequenceEnd, plainTextValue, suggestions) {
    var _extends2;

    // neglect async results from previous queries
    if (queryId !== _this3._queryId) return;

    // save in property so that multiple sync state updates from different mentions sources
    // won't overwrite each other
    _this3.suggestions = _extends({}, _this3.suggestions, (_extends2 = {}, _extends2[mentionDescriptor.props.type] = {
      query: query,
      mentionDescriptor: mentionDescriptor,
      querySequenceStart: querySequenceStart,
      querySequenceEnd: querySequenceEnd,
      results: suggestions,
      plainTextValue: plainTextValue
    }, _extends2));

    var focusIndex = _this3.state.focusIndex;

    var suggestionsCount = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["countSuggestions"])(_this3.suggestions);
    _this3.setState({
      suggestions: _this3.suggestions,
      focusIndex: focusIndex >= suggestionsCount ? Math.max(suggestionsCount - 1, 0) : focusIndex
    });
  };

  this.addMention = function (suggestion, _ref) {
    var mentionDescriptor = _ref.mentionDescriptor,
        querySequenceStart = _ref.querySequenceStart,
        querySequenceEnd = _ref.querySequenceEnd,
        plainTextValue = _ref.plainTextValue;

    // Insert mention in the marked up value at the correct position
    var value = _this3.props.value || '';
    var _props7 = _this3.props,
        markup = _props7.markup,
        displayTransform = _props7.displayTransform,
        regex = _props7.regex;

    var start = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["mapPlainTextIndex"])(value, markup, querySequenceStart, 'START', displayTransform, regex);
    var end = start + querySequenceEnd - querySequenceStart;
    var insert = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["makeMentionsMarkup"])(markup, suggestion.id, suggestion.display, mentionDescriptor.props.type);
    if (mentionDescriptor.props.appendSpaceOnAdd) {
      insert = insert + ' ';
    }
    var newValue = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["spliceString"])(value, start, end, insert);

    // Refocus input and set caret position to end of mention
    _this3.inputRef.focus();

    var displayValue = displayTransform(suggestion.id, suggestion.display, mentionDescriptor.props.type);
    if (mentionDescriptor.props.appendSpaceOnAdd) {
      displayValue = displayValue + ' ';
    }
    var newCaretPosition = querySequenceStart + displayValue.length;
    _this3.setState({
      selectionStart: newCaretPosition,
      selectionEnd: newCaretPosition,
      setSelectionAfterMentionChange: true
    });

    // Propagate change
    var eventMock = { target: { value: newValue } };
    var mentions = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getMentions"])(newValue, markup, displayTransform, regex);
    var newPlainTextValue = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["spliceString"])(plainTextValue, querySequenceStart, querySequenceEnd, displayValue);

    _this3.executeOnChange(eventMock, newValue, newPlainTextValue, mentions);

    var onAdd = mentionDescriptor.props.onAdd;
    if (onAdd) {
      onAdd(suggestion.id, suggestion.display);
    }

    // Make sure the suggestions overlay is closed
    _this3.clearSuggestions();
  };

  this.isLoading = function () {
    var isLoading = false;
    react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.forEach(_this3.props.children, function (child) {
      isLoading = isLoading || child && child.props.isLoading;
    });
    return isLoading;
  };

  this._queryId = 0;
}, _temp);
MentionsInput.propTypes =  true ? propTypes : undefined;


var isMobileSafari = typeof navigator !== 'undefined' && /iPhone|iPad|iPod/i.test(navigator.userAgent);

var styled = Object(substyle__WEBPACK_IMPORTED_MODULE_8__["defaultStyle"])({
  position: 'relative',
  overflowY: 'visible',

  input: {
    display: 'block',
    position: 'absolute',
    top: 0,
    boxSizing: 'border-box',
    backgroundColor: 'transparent',
    width: 'inherit',
    fontFamily: 'inherit',
    fontSize: 'inherit'
  },

  '&multiLine': {
    input: _extends({
      width: '100%',
      height: '100%',
      bottom: 0,
      overflow: 'hidden',
      resize: 'none'

    }, isMobileSafari ? {
      marginTop: 1,
      marginLeft: -3
    } : null)
  }
}, function (_ref2) {
  var singleLine = _ref2.singleLine;
  return {
    '&singleLine': singleLine,
    '&multiLine': !singleLine
  };
});

/* harmony default export */ __webpack_exports__["default"] = (styled(MentionsInput));

/***/ }),

/***/ "./node_modules/react-mentions/es/Suggestion.js":
/*!******************************************************!*\
  !*** ./node_modules/react-mentions/es/Suggestion.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var substyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! substyle */ "./node_modules/substyle/lib/index.js");
/* harmony import */ var substyle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(substyle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/omit */ "./node_modules/lodash/omit.js");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/keys */ "./node_modules/lodash/keys.js");
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_keys__WEBPACK_IMPORTED_MODULE_4__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Suggestion = function (_Component) {
  _inherits(Suggestion, _Component);

  function Suggestion() {
    _classCallCheck(this, Suggestion);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Suggestion.prototype.render = function render() {
    var rest = lodash_omit__WEBPACK_IMPORTED_MODULE_3___default()(this.props, 'style', lodash_keys__WEBPACK_IMPORTED_MODULE_4___default()(Suggestion.propTypes));

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'li',
      _extends({}, rest, this.props.style),
      this.renderContent()
    );
  };

  Suggestion.prototype.renderContent = function renderContent() {
    var _props = this.props,
        query = _props.query,
        descriptor = _props.descriptor,
        suggestion = _props.suggestion,
        index = _props.index,
        focused = _props.focused;


    var display = this.getDisplay();
    var highlightedDisplay = this.renderHighlightedDisplay(display, query);

    if (descriptor.props.renderSuggestion) {
      return descriptor.props.renderSuggestion(suggestion, query, highlightedDisplay, index, focused);
    }

    return highlightedDisplay;
  };

  Suggestion.prototype.getDisplay = function getDisplay() {
    var suggestion = this.props.suggestion;


    if (suggestion instanceof String) {
      return suggestion;
    }

    var id = suggestion.id,
        display = suggestion.display;


    if (!id || !display) {
      return id;
    }

    return display;
  };

  Suggestion.prototype.renderHighlightedDisplay = function renderHighlightedDisplay(display) {
    var _props2 = this.props,
        query = _props2.query,
        style = _props2.style;


    var i = display.toLowerCase().indexOf(query.toLowerCase());

    if (i === -1) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'span',
        style('display'),
        display
      );
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'span',
      style('display'),
      display.substring(0, i),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'b',
        style('highlight'),
        display.substring(i, i + query.length)
      ),
      display.substring(i + query.length)
    );
  };

  return Suggestion;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Suggestion.propTypes =  true ? {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]).isRequired,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  index: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,

  suggestion: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]).isRequired,
    display: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })]).isRequired,
  descriptor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,

  focused: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
} : undefined;


var styled = Object(substyle__WEBPACK_IMPORTED_MODULE_2__["defaultStyle"])({
  cursor: 'pointer'
}, function (props) {
  return { '&focused': props.focused };
});

/* harmony default export */ __webpack_exports__["default"] = (styled(Suggestion));

/***/ }),

/***/ "./node_modules/react-mentions/es/SuggestionsOverlay.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-mentions/es/SuggestionsOverlay.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var substyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! substyle */ "./node_modules/substyle/lib/index.js");
/* harmony import */ var substyle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(substyle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/react-mentions/es/utils.js");
/* harmony import */ var _Suggestion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Suggestion */ "./node_modules/react-mentions/es/Suggestion.js");
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoadingIndicator */ "./node_modules/react-mentions/es/LoadingIndicator.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var SuggestionsOverlay = (_temp = _class = function (_Component) {
  _inherits(SuggestionsOverlay, _Component);

  function SuggestionsOverlay() {
    _classCallCheck(this, SuggestionsOverlay);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SuggestionsOverlay.prototype.componentDidUpdate = function componentDidUpdate() {
    if (!this.suggestionsRef || this.suggestionsRef.offsetHeight >= this.suggestionsRef.scrollHeight || !this.props.scrollFocusedIntoView) {
      return;
    }

    var scrollTop = this.suggestionsRef.scrollTop;

    var _suggestionsRef$child = this.suggestionsRef.children[this.props.focusIndex].getBoundingClientRect(),
        top = _suggestionsRef$child.top,
        bottom = _suggestionsRef$child.bottom;

    var _suggestionsRef$getBo = this.suggestionsRef.getBoundingClientRect(),
        topContainer = _suggestionsRef$getBo.top;

    top = top - topContainer + scrollTop;
    bottom = bottom - topContainer + scrollTop;

    if (top < scrollTop) {
      this.suggestionsRef.scrollTop = top;
    } else if (bottom > this.suggestionsRef.offsetHeight) {
      this.suggestionsRef.scrollTop = bottom - this.suggestionsRef.offsetHeight;
    }
  };

  SuggestionsOverlay.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        suggestions = _props.suggestions,
        isLoading = _props.isLoading,
        style = _props.style,
        onMouseDown = _props.onMouseDown;

    // do not show suggestions until there is some data

    if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["countSuggestions"])(suggestions) === 0 && !isLoading) {
      return null;
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'div',
      _extends({}, style, { onMouseDown: onMouseDown }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'ul',
        _extends({
          ref: function ref(el) {
            _this2.suggestionsRef = el;
          }
        }, style('list')),
        this.renderSuggestions()
      ),
      this.renderLoadingIndicator()
    );
  };

  SuggestionsOverlay.prototype.renderSuggestions = function renderSuggestions() {
    var _this3 = this;

    return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getSuggestions"])(this.props.suggestions).reduce(function (result, _ref) {
      var suggestions = _ref.suggestions,
          descriptor = _ref.descriptor;
      return [].concat(result, suggestions.map(function (suggestion, index) {
        return _this3.renderSuggestion(suggestion, descriptor, result.length + index);
      }));
    }, []);
  };

  SuggestionsOverlay.prototype.renderSuggestion = function renderSuggestion(suggestion, descriptor, index) {
    var _this4 = this;

    var id = this.getID(suggestion);
    var isFocused = index === this.props.focusIndex;

    var mentionDescriptor = descriptor.mentionDescriptor,
        query = descriptor.query;


    var type = mentionDescriptor.props.type;

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Suggestion__WEBPACK_IMPORTED_MODULE_4__["default"], {
      style: this.props.style('item'),
      key: type + '-' + id,
      id: id,
      query: query,
      index: index,
      descriptor: mentionDescriptor,
      suggestion: suggestion,
      focused: isFocused,
      onClick: function onClick() {
        return _this4.select(suggestion, descriptor);
      },
      onMouseEnter: function onMouseEnter() {
        return _this4.handleMouseEnter(index);
      }
    });
  };

  SuggestionsOverlay.prototype.getID = function getID(suggestion) {
    if (suggestion instanceof String) {
      return suggestion;
    }

    return suggestion.id;
  };

  SuggestionsOverlay.prototype.renderLoadingIndicator = function renderLoadingIndicator() {
    if (!this.props.isLoading) {
      return;
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__["default"], this.props.style('loadingIndicator'));
  };

  SuggestionsOverlay.prototype.handleMouseEnter = function handleMouseEnter(index, ev) {
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(index);
    }
  };

  SuggestionsOverlay.prototype.select = function select(suggestion, descriptor) {
    this.props.onSelect(suggestion, descriptor);
  };

  return SuggestionsOverlay;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _class.defaultProps = {
  suggestions: {},
  onSelect: function onSelect() {
    return null;
  }
}, _temp);
SuggestionsOverlay.propTypes =  true ? {
  suggestions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  focusIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  scrollFocusedIntoView: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
} : undefined;


var styled = Object(substyle__WEBPACK_IMPORTED_MODULE_2__["defaultStyle"])(function (_ref2) {
  var position = _ref2.position;
  return _extends({
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'white',
    marginTop: 14,
    minWidth: 100
  }, position, {

    list: {
      margin: 0,
      padding: 0,
      listStyleType: 'none'
    }
  });
});

/* harmony default export */ __webpack_exports__["default"] = (styled(SuggestionsOverlay));

/***/ }),

/***/ "./node_modules/react-mentions/es/index.js":
/*!*************************************************!*\
  !*** ./node_modules/react-mentions/es/index.js ***!
  \*************************************************/
/*! exports provided: MentionsInput, Mention */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MentionsInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MentionsInput */ "./node_modules/react-mentions/es/MentionsInput.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MentionsInput", function() { return _MentionsInput__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Mention__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mention */ "./node_modules/react-mentions/es/Mention.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mention", function() { return _Mention__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./node_modules/react-mentions/es/utils.js":
/*!*************************************************!*\
  !*** ./node_modules/react-mentions/es/utils.js ***!
  \*************************************************/
/*! exports provided: escapeRegex, spliceString, getComputedStyleLengthProp, getPositionOfCapturingGroup, iterateMentionsMarkup, mapPlainTextIndex, findStartOfMentionInPlainText, applyChangeToValue, getPlainText, getMentions, getEndOfLastMention, makeMentionsMarkup, countSuggestions, getSuggestions, getSuggestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeRegex", function() { return escapeRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spliceString", function() { return spliceString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComputedStyleLengthProp", function() { return getComputedStyleLengthProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPositionOfCapturingGroup", function() { return getPositionOfCapturingGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterateMentionsMarkup", function() { return iterateMentionsMarkup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapPlainTextIndex", function() { return mapPlainTextIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findStartOfMentionInPlainText", function() { return findStartOfMentionInPlainText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyChangeToValue", function() { return applyChangeToValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlainText", function() { return getPlainText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMentions", function() { return getMentions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEndOfLastMention", function() { return getEndOfLastMention; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeMentionsMarkup", function() { return makeMentionsMarkup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countSuggestions", function() { return countSuggestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuggestions", function() { return getSuggestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuggestion", function() { return getSuggestion; });
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isNumber */ "./node_modules/lodash/isNumber.js");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isFinite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isFinite */ "./node_modules/lodash/isFinite.js");
/* harmony import */ var lodash_isFinite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isFinite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/keys */ "./node_modules/lodash/keys.js");
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_keys__WEBPACK_IMPORTED_MODULE_2__);




var PLACEHOLDERS = {
  id: '__id__',
  display: '__display__',
  type: '__type__'
};

var numericComparator = function numericComparator(a, b) {
  a = a === null ? Number.MAX_VALUE : a;
  b = b === null ? Number.MAX_VALUE : b;
  return a - b;
};

var escapeRegex = function escapeRegex(str) {
  return str.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
};

var countCapturingGroups = function countCapturingGroups(regex) {
  return new RegExp(regex.toString() + '|').exec('').length - 1;
};

var markupToRegex = function markupToRegex(markup) {
  var markupPattern = escapeRegex(markup);
  markupPattern = markupPattern.replace(PLACEHOLDERS.display, '(.+?)');
  markupPattern = markupPattern.replace(PLACEHOLDERS.id, '(.+?)');
  markupPattern = markupPattern.replace(PLACEHOLDERS.type, '(.+?)');

  return new RegExp(markupPattern, 'g');
};

var spliceString = function spliceString(str, start, end, insert) {
  return str.substring(0, start) + insert + str.substring(end);
};

/**
 * Returns the computed length property value for the provided element.
 * Note: According to spec and testing, can count on length values coming back in pixels. See https://developer.mozilla.org/en-US/docs/Web/CSS/used_value#Difference_from_computed_value
 */
var getComputedStyleLengthProp = function getComputedStyleLengthProp(forElement, propertyName) {
  var length = parseFloat(window.getComputedStyle(forElement, null).getPropertyValue(propertyName));
  return lodash_isFinite__WEBPACK_IMPORTED_MODULE_1___default()(length) ? length : 0;
};

/**
 * parameterName: "id", "display", or "type"
 * TODO: This is currently only exported for testing
 */
var getPositionOfCapturingGroup = function getPositionOfCapturingGroup(markup, parameterName, regex) {
  if (parameterName !== 'id' && parameterName !== 'display' && parameterName !== 'type') {
    throw new Error("parameterName must be 'id', 'display', or 'type'");
  }

  // calculate positions of placeholders in the markup
  var indexDisplay = markup.indexOf(PLACEHOLDERS.display);
  var indexId = markup.indexOf(PLACEHOLDERS.id);
  var indexType = markup.indexOf(PLACEHOLDERS.type);

  // set indices to null if not found
  if (indexDisplay < 0) indexDisplay = null;
  if (indexId < 0) indexId = null;
  if (indexType < 0) indexType = null;

  if (indexDisplay === null && indexId === null) {
    // markup contains none of the mandatory placeholders
    throw new Error('The markup `' + markup + '` must contain at least one of the placeholders `__id__` or `__display__`');
  }

  if (indexType === null && parameterName === 'type') {
    // markup does not contain optional __type__ placeholder
    return null;
  }

  // sort indices in ascending order (null values will always be at the end)
  var sortedIndices = [indexDisplay, indexId, indexType].sort(numericComparator);

  // If only one the placeholders __id__ and __display__ is present,
  // use the captured string for both parameters, id and display
  if (indexDisplay === null) indexDisplay = indexId;
  if (indexId === null) indexId = indexDisplay;

  if (regex && countCapturingGroups(regex) === 0) {
    // custom regex does not use any capturing groups, so use the full match for ID and display
    return parameterName === 'type' ? null : 0;
  }

  if (parameterName === 'id') return sortedIndices.indexOf(indexId);
  if (parameterName === 'display') return sortedIndices.indexOf(indexDisplay);
  if (parameterName === 'type') return indexType === null ? null : sortedIndices.indexOf(indexType);
};

// Finds all occurences of the markup in the value and iterates the plain text sub strings
// in between those markups using `textIteratee` and the markup occurrences using the
// `markupIteratee`.
var iterateMentionsMarkup = function iterateMentionsMarkup(value, markup, textIteratee, markupIteratee, displayTransform, regex) {
  regex = regex || markupToRegex(markup);
  var displayPos = getPositionOfCapturingGroup(markup, 'display', regex);
  var idPos = getPositionOfCapturingGroup(markup, 'id', regex);
  var typePos = getPositionOfCapturingGroup(markup, 'type', regex);

  var match = void 0;
  var start = 0;
  var currentPlainTextIndex = 0;

  // detect all mention markup occurences in the value and iterate the matches
  while ((match = regex.exec(value)) !== null) {
    // first argument is the whole match, capturing groups are following
    var id = match[idPos + 1];
    var display = match[displayPos + 1];
    var type = typePos !== null ? match[typePos + 1] : null;

    if (displayTransform) display = displayTransform(id, display, type);

    var substr = value.substring(start, match.index);
    textIteratee(substr, start, currentPlainTextIndex);
    currentPlainTextIndex += substr.length;

    markupIteratee(match[0], match.index, currentPlainTextIndex, id, display, type, start);
    currentPlainTextIndex += display.length;

    start = regex.lastIndex;
  }

  if (start < value.length) {
    textIteratee(value.substring(start), start, currentPlainTextIndex);
  }
};

// For the passed character index in the plain text string, returns the corresponding index
// in the marked up value string.
// If the passed character index lies inside a mention, the value of `inMarkupCorrection` defines the
// correction to apply:
//   - 'START' to return the index of the mention markup's first char (default)
//   - 'END' to return the index after its last char
//   - 'NULL' to return null
var mapPlainTextIndex = function mapPlainTextIndex(value, markup, indexInPlainText) {
  var inMarkupCorrection = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'START';
  var displayTransform = arguments[4];
  var regex = arguments[5];

  if (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(indexInPlainText)) {
    return indexInPlainText;
  }

  var result = void 0;
  var textIteratee = function textIteratee(substr, index, substrPlainTextIndex) {
    if (result !== undefined) return;

    if (substrPlainTextIndex + substr.length >= indexInPlainText) {
      // found the corresponding position in the current plain text range
      result = index + indexInPlainText - substrPlainTextIndex;
    }
  };
  var markupIteratee = function markupIteratee(markup, index, mentionPlainTextIndex, id, display, type, lastMentionEndIndex) {
    if (result !== undefined) return;

    if (mentionPlainTextIndex + display.length > indexInPlainText) {
      // found the corresponding position inside current match,
      // return the index of the first or after the last char of the matching markup
      // depending on whether the `inMarkupCorrection`
      if (inMarkupCorrection === 'NULL') {
        result = null;
      } else {
        result = index + (inMarkupCorrection === 'END' ? markup.length : 0);
      }
    }
  };

  iterateMentionsMarkup(value, markup, textIteratee, markupIteratee, displayTransform, regex);

  // when a mention is at the end of the value and we want to get the caret position
  // at the end of the string, result is undefined
  return result === undefined ? value.length : result;
};

// For a given indexInPlainText that lies inside a mention,
// returns a the index of of the first char of the mention in the plain text.
// If indexInPlainText does not lie inside a mention, returns indexInPlainText.
var findStartOfMentionInPlainText = function findStartOfMentionInPlainText(value, markup, indexInPlainText, displayTransform, regex) {
  var result = indexInPlainText;
  var foundMention = false;

  var markupIteratee = function markupIteratee(markup, index, mentionPlainTextIndex, id, display, type, lastMentionEndIndex) {
    if (mentionPlainTextIndex <= indexInPlainText && mentionPlainTextIndex + display.length > indexInPlainText) {
      result = mentionPlainTextIndex;
      foundMention = true;
    }
  };
  iterateMentionsMarkup(value, markup, function () {}, markupIteratee, displayTransform, regex);

  if (foundMention) {
    return result;
  }
};

// Applies a change from the plain text textarea to the underlying marked up value
// guided by the textarea text selection ranges before and after the change
var applyChangeToValue = function applyChangeToValue(value, markup, plainTextValue, selectionStartBeforeChange, selectionEndBeforeChange, selectionEndAfterChange, displayTransform, regex) {
  var oldPlainTextValue = getPlainText(value, markup, displayTransform, regex);

  var lengthDelta = oldPlainTextValue.length - plainTextValue.length;
  if (selectionStartBeforeChange === 'undefined') {
    selectionStartBeforeChange = selectionEndAfterChange + lengthDelta;
  }

  if (selectionEndBeforeChange === 'undefined') {
    selectionEndBeforeChange = selectionStartBeforeChange;
  }

  // Fixes an issue with replacing combined characters for complex input. Eg like acented letters on OSX
  if (selectionStartBeforeChange === selectionEndBeforeChange && selectionEndBeforeChange === selectionEndAfterChange && oldPlainTextValue.length === plainTextValue.length) {
    selectionStartBeforeChange = selectionStartBeforeChange - 1;
  }

  // extract the insertion from the new plain text value
  var insert = plainTextValue.slice(selectionStartBeforeChange, selectionEndAfterChange);

  // handling for Backspace key with no range selection
  var spliceStart = Math.min(selectionStartBeforeChange, selectionEndAfterChange);

  var spliceEnd = selectionEndBeforeChange;
  if (selectionStartBeforeChange === selectionEndAfterChange) {
    // handling for Delete key with no range selection
    spliceEnd = Math.max(selectionEndBeforeChange, selectionStartBeforeChange + lengthDelta);
  }

  var mappedSpliceStart = mapPlainTextIndex(value, markup, spliceStart, 'START', displayTransform, regex);
  var mappedSpliceEnd = mapPlainTextIndex(value, markup, spliceEnd, 'END', displayTransform, regex);

  var controlSpliceStart = mapPlainTextIndex(value, markup, spliceStart, 'NULL', displayTransform, regex);
  var controlSpliceEnd = mapPlainTextIndex(value, markup, spliceEnd, 'NULL', displayTransform, regex);
  var willRemoveMention = controlSpliceStart === null || controlSpliceEnd === null;

  var newValue = spliceString(value, mappedSpliceStart, mappedSpliceEnd, insert);

  if (!willRemoveMention) {
    // test for auto-completion changes
    var controlPlainTextValue = getPlainText(newValue, markup, displayTransform, regex);
    if (controlPlainTextValue !== plainTextValue) {
      // some auto-correction is going on

      // find start of diff
      spliceStart = 0;
      while (plainTextValue[spliceStart] === controlPlainTextValue[spliceStart]) {
        spliceStart++;
      } // extract auto-corrected insertion
      insert = plainTextValue.slice(spliceStart, selectionEndAfterChange);

      // find index of the unchanged remainder
      spliceEnd = oldPlainTextValue.lastIndexOf(plainTextValue.substring(selectionEndAfterChange));

      // re-map the corrected indices
      mappedSpliceStart = mapPlainTextIndex(value, markup, spliceStart, 'START', displayTransform, regex);
      mappedSpliceEnd = mapPlainTextIndex(value, markup, spliceEnd, 'END', displayTransform, regex);
      newValue = spliceString(value, mappedSpliceStart, mappedSpliceEnd, insert);
    }
  }

  return newValue;
};

var getPlainText = function getPlainText(value, markup, displayTransform, regex) {
  regex = regex || markupToRegex(markup);
  var idPos = getPositionOfCapturingGroup(markup, 'id', regex);
  var displayPos = getPositionOfCapturingGroup(markup, 'display', regex);
  var typePos = getPositionOfCapturingGroup(markup, 'type', regex);
  return value.replace(regex, function () {
    // first argument is the whole match, capturing groups are following
    var id = arguments[idPos + 1];
    var display = arguments[displayPos + 1];
    var type = typePos !== null ? arguments[typePos + 1] : null;
    if (displayTransform) display = displayTransform(id, display, type);
    return display;
  });
};

var getMentions = function getMentions(value, markup, displayTransform, regex) {
  var mentions = [];
  iterateMentionsMarkup(value, markup, function () {}, function (match, index, plainTextIndex, id, display, type, start) {
    mentions.push({
      id: id,
      display: display,
      type: type,
      index: index,
      plainTextIndex: plainTextIndex
    });
  }, displayTransform, regex);
  return mentions;
};

var getEndOfLastMention = function getEndOfLastMention(value, markup, displayTransform, regex) {
  var mentions = getMentions(value, markup, displayTransform, regex);
  var lastMention = mentions[mentions.length - 1];
  return lastMention ? lastMention.plainTextIndex + lastMention.display.length : 0;
};

var makeMentionsMarkup = function makeMentionsMarkup(markup, id, display, type) {
  var result = markup.replace(PLACEHOLDERS.id, id);
  result = result.replace(PLACEHOLDERS.display, display);
  result = result.replace(PLACEHOLDERS.type, type);
  return result;
};

var countSuggestions = function countSuggestions(suggestions) {
  return lodash_keys__WEBPACK_IMPORTED_MODULE_2___default()(suggestions).reduce(function (acc, prop) {
    return acc + suggestions[prop].results.length;
  }, 0);
};

var getSuggestions = function getSuggestions(suggestions) {
  return lodash_keys__WEBPACK_IMPORTED_MODULE_2___default()(suggestions).reduce(function (acc, mentionType) {
    return [].concat(acc, [{
      suggestions: suggestions[mentionType].results,
      descriptor: suggestions[mentionType]
    }]);
  }, []);
};

var getSuggestion = function getSuggestion(suggestions, index) {
  return getSuggestions(suggestions).reduce(function (result, _ref) {
    var suggestions = _ref.suggestions,
        descriptor = _ref.descriptor;
    return [].concat(result, suggestions.map(function (suggestion) {
      return {
        suggestion: suggestion,
        descriptor: descriptor
      };
    }));
  }, [])[index];
};

/***/ }),

/***/ "./node_modules/reactjs-popup/reactjs-popup.es.js":
false,

/***/ "./node_modules/remark-parse/index.js":
false,

/***/ "./node_modules/remark-parse/lib/block-elements.json":
false,

/***/ "./node_modules/remark-parse/lib/decode.js":
false,

/***/ "./node_modules/remark-parse/lib/defaults.js":
false,

/***/ "./node_modules/remark-parse/lib/locate/break.js":
false,

/***/ "./node_modules/remark-parse/lib/locate/code-inline.js":
false,

/***/ "./node_modules/remark-parse/lib/locate/delete.js":
false,

/***/ "./node_modules/remark-parse/lib/locate/emphasis.js":
false,

/***/ "./node_modules/remark-parse/lib/locate/escape.js":
false,

/***/ "./node_modules/remark-parse/lib/locate/link.js":
false,

/***/ "./node_modules/remark-parse/lib/locate/strong.js":
false,

/***/ "./node_modules/remark-parse/lib/locate/tag.js":
false,

/***/ "./node_modules/remark-parse/lib/locate/url.js":
false,

/***/ "./node_modules/remark-parse/lib/parse.js":
false,

/***/ "./node_modules/remark-parse/lib/parser.js":
false,

/***/ "./node_modules/remark-parse/lib/set-options.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/auto-link.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/blockquote.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/break.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/code-fenced.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/code-indented.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/code-inline.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/definition.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/delete.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/emphasis.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/escape.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/footnote-definition.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/heading-atx.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/heading-setext.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/html-block.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/html-inline.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/link.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/list.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/newline.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/paragraph.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/reference.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/strong.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/table.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/text.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/thematic-break.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/url.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenizer.js":
false,

/***/ "./node_modules/remark-parse/lib/unescape.js":
false,

/***/ "./node_modules/remark-parse/lib/util/get-indentation.js":
false,

/***/ "./node_modules/remark-parse/lib/util/html.js":
false,

/***/ "./node_modules/remark-parse/lib/util/interrupt.js":
false,

/***/ "./node_modules/remark-parse/lib/util/normalize.js":
false,

/***/ "./node_modules/remark-parse/lib/util/remove-indentation.js":
false,

/***/ "./node_modules/repeat-string/index.js":
false,

/***/ "./node_modules/replace-ext/index.js":
false,

/***/ "./node_modules/setimmediate/setImmediate.js":
false,

/***/ "./node_modules/state-toggle/index.js":
false,

/***/ "./node_modules/substyle/lib/EnhancerProvider.js":
/*!*******************************************************!*\
  !*** ./node_modules/substyle/lib/EnhancerProvider.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _types = __webpack_require__(/*! ./types */ "./node_modules/substyle/lib/types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EnhancerProvider = function (_React$Component) {
  _inherits(EnhancerProvider, _React$Component);

  function EnhancerProvider() {
    _classCallCheck(this, EnhancerProvider);

    return _possibleConstructorReturn(this, (EnhancerProvider.__proto__ || Object.getPrototypeOf(EnhancerProvider)).apply(this, arguments));
  }

  _createClass(EnhancerProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _ref;

      return _ref = {}, _defineProperty(_ref, _types.ENHANCER_CONTEXT_NAME, this.props.enhancer), _defineProperty(_ref, _types.PROPS_DECORATOR_CONTEXT_NAME, this.props.propsDecorator), _ref;
    }
  }, {
    key: 'render',
    value: function render() {
      return React.Children.only(this.props.children);
    }
  }]);

  return EnhancerProvider;
}(React.Component);

exports.default = EnhancerProvider;


EnhancerProvider.propTypes = {
  enhancer: _propTypes2.default.func,
  propsDecorator: _propTypes2.default.func,
  children: _propTypes2.default.element.isRequired
};

EnhancerProvider.childContextTypes = _types.ContextTypes;

EnhancerProvider.displayName = 'EnhancerProvider';
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/substyle/lib/coerceSelection.js":
/*!******************************************************!*\
  !*** ./node_modules/substyle/lib/coerceSelection.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/substyle/lib/utils.js");

var coerceSelection = function coerceSelection(select) {
  if (!select) {
    return [];
  } else if (typeof select === 'string') {
    return [select];
  } else if (!Array.isArray(select)) {
    var objSelect = select; // workaround for https://github.com/facebook/flow/issues/5781
    return (0, _utils.keys)(select).reduce(function (acc, key) {
      return acc.concat(objSelect[key] ? [key] : []);
    }, []);
  }
  return select;
};
exports.default = coerceSelection;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/substyle/lib/createSubstyle.js":
/*!*****************************************************!*\
  !*** ./node_modules/substyle/lib/createSubstyle.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");

var _invariant2 = _interopRequireDefault(_invariant);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/substyle/lib/utils.js");

var _defaultPropsDecorator = __webpack_require__(/*! ./defaultPropsDecorator */ "./node_modules/substyle/lib/defaultPropsDecorator.js");

var _defaultPropsDecorator2 = _interopRequireDefault(_defaultPropsDecorator);

var _pickStyles = __webpack_require__(/*! ./pickStyles */ "./node_modules/substyle/lib/pickStyles.js");

var _filterKeys = __webpack_require__(/*! ./filterKeys */ "./node_modules/substyle/lib/filterKeys.js");

var _coerceSelection = __webpack_require__(/*! ./coerceSelection */ "./node_modules/substyle/lib/coerceSelection.js");

var _coerceSelection2 = _interopRequireDefault(_coerceSelection);

var _memoize = __webpack_require__(/*! ./memoize */ "./node_modules/substyle/lib/memoize.js");

var _memoize2 = _interopRequireDefault(_memoize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var guessBaseClassName = function guessBaseClassName(classNames) {
  // all class names must start with the same prefix: the component's base class name
  // which will finally go to the container element
  var firstKey = classNames && (0, _utils.keys)(classNames)[0];
  return firstKey && firstKey.split('__')[0].split('--')[0];
};

var deriveClassNames = function deriveClassNames(className, elementKeys, modifierKeys) {
  // do not derive class names, if the user did not specify any class name
  if (!className) {
    return undefined;
  }

  // derive class names based using the passed modifier/element keys
  var firstClassName = className.split(' ')[0];
  var derivedClassNames = [].concat(_toConsumableArray(elementKeys.length === 0 ? modifierKeys.map(function (key) {
    return firstClassName + '--' + key.substring(1);
  }) : []), _toConsumableArray(elementKeys.map(function (key) {
    return firstClassName + '__' + key;
  })));

  // also use the provided `className` if there is no sub-element selection
  return elementKeys.length === 0 ? [className].concat(_toConsumableArray(derivedClassNames)) : derivedClassNames;
};

function createSubstyle(_ref) {
  var style = _ref.style,
      className = _ref.className,
      classNames = _ref.classNames;
  var propsDecorator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaultPropsDecorator2.default;

  var baseClassName = className || guessBaseClassName(classNames);

  var substyle = typeof style === 'function' ? style : (0, _memoize2.default)(function (select, defaultStyle) {
    var selectedKeys = (0, _coerceSelection2.default)(select);

    (0, _invariant2.default)(Array.isArray(selectedKeys), 'First parameter must be a string, an array of strings, ' + 'a plain object with boolean values, or a falsy value.');

    (0, _invariant2.default)(!defaultStyle || (0, _utils.isPlainObject)(defaultStyle), 'Optional second parameter must be a plain object.');

    var modifierKeys = selectedKeys.filter(_filterKeys.isModifier);
    var elementKeys = selectedKeys.filter(_filterKeys.isElement);

    var collectElementStyles = elementKeys.length > 0 ? function (fromStyle) {
      return (0, _utils.values)((0, _pickStyles.pickNestedStyles)(fromStyle, elementKeys));
    } : function (fromStyle) {
      return [fromStyle];
    };

    var collectSelectedStyles = function collectSelectedStyles() {
      var fromStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return collectElementStyles((0, _pickStyles.hoistModifierStylesRecursive)(fromStyle, modifierKeys));
    };

    var derivedClassNames = deriveClassNames(baseClassName, elementKeys, modifierKeys);

    return createSubstyle(_extends({}, (style || defaultStyle) && {
      style: _utils.merge.apply(undefined, [{}].concat(_toConsumableArray(collectSelectedStyles(defaultStyle)), _toConsumableArray(collectSelectedStyles(style))))
    }, derivedClassNames && {
      className: derivedClassNames.join(' ')
    }, classNames && { classNames: classNames }), propsDecorator);
  });

  // $FlowFixMe Flow does not believe that also a function can be spread
  var styleProps = _extends({}, typeof style === 'function' ? style : { style: style });

  var classNameSplit = [].concat(_toConsumableArray(styleProps.className ? styleProps.className.split(' ') : []), _toConsumableArray(baseClassName ? baseClassName.split(' ') : []));
  var mappedClassNames = classNames ? (0, _utils.compact)(classNameSplit.map(function (singleClassName) {
    return classNames[singleClassName];
  })) : classNameSplit;

  var propsForSpread = propsDecorator(_extends({}, styleProps, mappedClassNames.length > 0 ? {
    className: mappedClassNames.join(' ')
  } : {}));

  // assign `style` and/or `className` props to the return function object
  (0, _utils.assign)(substyle, propsForSpread);
  return substyle;
}

exports.default = createSubstyle;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/substyle/lib/defaultPropsDecorator.js":
/*!************************************************************!*\
  !*** ./node_modules/substyle/lib/defaultPropsDecorator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _pickStyles = __webpack_require__(/*! ./pickStyles */ "./node_modules/substyle/lib/pickStyles.js");

// many css-in-js libs process keyframes objects as the value for `animationName`
var defaultObjectPropsWhitelist = ['animationName'];

var defaultPropsDecorator = function defaultPropsDecorator(_ref) {
  var style = _ref.style,
      className = _ref.className;
  return _extends({}, style ? { style: (0, _pickStyles.pickDirectStyles)(style, defaultObjectPropsWhitelist) } : {}, className ? { className: className } : {});
};

exports.default = defaultPropsDecorator;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/substyle/lib/defaultStyle.js":
/*!***************************************************!*\
  !*** ./node_modules/substyle/lib/defaultStyle.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _hoistNonReactStatics = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/substyle/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/substyle/lib/utils.js");

var _createSubstyle = __webpack_require__(/*! ./createSubstyle */ "./node_modules/substyle/lib/createSubstyle.js");

var _createSubstyle2 = _interopRequireDefault(_createSubstyle);

var _types = __webpack_require__(/*! ./types */ "./node_modules/substyle/lib/types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isStatelessFunction = function isStatelessFunction(Component
// $FlowFixMe
) {
  return Component.prototype && !Component.prototype.render;
};

var createDefaultStyle = function createDefaultStyle(defaultStyle, getModifiers) {
  var shouldUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
    return true;
  };
  return function (WrappedComponent) {
    var WithDefaultStyle = function (_Component) {
      _inherits(WithDefaultStyle, _Component);

      function WithDefaultStyle(props, context) {
        _classCallCheck(this, WithDefaultStyle);

        var _this = _possibleConstructorReturn(this, (WithDefaultStyle.__proto__ || Object.getPrototypeOf(WithDefaultStyle)).call(this, props, context));

        _this.setWrappedInstance = function (ref) {
          _this.wrappedInstance = ref;
          var innerRef = _this.props.innerRef;

          if (typeof innerRef === 'function') {
            innerRef(ref);
          } else if (innerRef && typeof innerRef !== 'string') {
            innerRef.current = ref;
          }
        };

        var style = props.style,
            className = props.className,
            classNames = props.classNames,
            _ = props.innerRef,
            rest = _objectWithoutProperties(props, ['style', 'className', 'classNames', 'innerRef']);

        _this.substyle = (0, _createSubstyle2.default)({ style: style, className: className, classNames: classNames }, _this.context[_types.PROPS_DECORATOR_CONTEXT_NAME]);

        if (typeof defaultStyle === 'function') {
          _this.defaultStyle = defaultStyle(rest);
        }
        return _this;
      }

      _createClass(WithDefaultStyle, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(_ref) {
          var style = _ref.style,
              className = _ref.className,
              classNames = _ref.classNames,
              rest = _objectWithoutProperties(_ref, ['style', 'className', 'classNames']);

          var _props = this.props,
              prevStyle = _props.style,
              prevClassName = _props.className,
              prevClassNames = _props.classNames,
              _ = _props.innerRef,
              prevRest = _objectWithoutProperties(_props, ['style', 'className', 'classNames', 'innerRef']);

          if (style !== prevStyle || className !== prevClassName || classNames !== prevClassNames) {
            this.substyle = (0, _createSubstyle2.default)({ style: style, className: className, classNames: classNames }, this.context[_types.PROPS_DECORATOR_CONTEXT_NAME]);
          }

          if (typeof defaultStyle === 'function') {
            if (shouldUpdate(rest, prevRest)) {
              this.defaultStyle = defaultStyle(rest);
            }
          }

          return true;
        }
      }, {
        key: 'render',
        value: function render() {
          var _props2 = this.props,
              innerRef = _props2.innerRef,
              _0 = _props2.style,
              _1 = _props2.className,
              _2 = _props2.classNames,
              rest = _objectWithoutProperties(_props2, ['innerRef', 'style', 'className', 'classNames']);

          var EnhancedWrappedComponent = this.getWrappedComponent();
          var modifiers = getModifiers ? getModifiers(rest) : [];
          return (0, _react.createElement)(EnhancedWrappedComponent, _extends({
            style: this.substyle(modifiers, this.defaultStyle || defaultStyle),
            ref: isStatelessFunction(EnhancedWrappedComponent) ? undefined : // $FlowFixMe
            this.setWrappedInstance
          }, rest));
        }
      }, {
        key: 'getWrappedComponent',
        value: function getWrappedComponent() {
          var _context$ENHANCER_CON = this.context[_types.ENHANCER_CONTEXT_NAME],
              enhance = _context$ENHANCER_CON === undefined ? _utils.identity : _context$ENHANCER_CON;


          if (this.memoizedEnhance !== enhance) {
            this.memoizedEnhance = enhance;
            this.enhancedWrappedComponent = enhance(WrappedComponent);
            if (this.enhancedWrappedComponent.propTypes) {
              this.enhancedWrappedComponent.propTypes = _extends({}, this.enhancedWrappedComponent.propTypes, {
                style: _types.PropTypes.style
              });
            }
          }

          return this.enhancedWrappedComponent || WrappedComponent;
        }
      }, {
        key: 'getWrappedInstance',
        value: function getWrappedInstance() {
          (0, _warning2.default)(true, '`getWrappedInstance()` is deprecated and will be removed with the next major release. ' + 'Instead, use the `innerRef` prop to get a ref to the wrapped instance.');
          return this.wrappedInstance;
        }
      }]);

      return WithDefaultStyle;
    }(_react.Component);

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name;
    WithDefaultStyle.displayName = 'withDefaultStyle(' + wrappedComponentName + ')';

    // define prop types based on WrappedComponent's prop types
    WithDefaultStyle.propTypes = _extends({}, WrappedComponent.propTypes, _types.PropTypes);

    WithDefaultStyle.contextTypes = _types.ContextTypes;

    // expose WrappedComponent, e.g., for testing purposes
    WithDefaultStyle.WrappedComponent = WrappedComponent;

    return (0, _hoistNonReactStatics2.default)(WithDefaultStyle, WrappedComponent);
  };
};

exports.default = createDefaultStyle;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/substyle/lib/filterKeys.js":
/*!*************************************************!*\
  !*** ./node_modules/substyle/lib/filterKeys.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isModifier = exports.isModifier = function isModifier(key) {
  return key[0] === '&';
};
var isElement = exports.isElement = function isElement(key) {
  return !isModifier(key);
};

/***/ }),

/***/ "./node_modules/substyle/lib/index.js":
/*!********************************************!*\
  !*** ./node_modules/substyle/lib/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultPropsDecorator = exports.defaultStyle = exports.EnhancerProvider = exports.createSubstyle = undefined;

var _createSubstyle = __webpack_require__(/*! ./createSubstyle */ "./node_modules/substyle/lib/createSubstyle.js");

var _createSubstyle2 = _interopRequireDefault(_createSubstyle);

var _defaultStyle = __webpack_require__(/*! ./defaultStyle */ "./node_modules/substyle/lib/defaultStyle.js");

var _defaultStyle2 = _interopRequireDefault(_defaultStyle);

var _EnhancerProvider = __webpack_require__(/*! ./EnhancerProvider */ "./node_modules/substyle/lib/EnhancerProvider.js");

var _EnhancerProvider2 = _interopRequireDefault(_EnhancerProvider);

var _defaultPropsDecorator = __webpack_require__(/*! ./defaultPropsDecorator */ "./node_modules/substyle/lib/defaultPropsDecorator.js");

var _defaultPropsDecorator2 = _interopRequireDefault(_defaultPropsDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createSubstyle = _createSubstyle2.default;
exports.EnhancerProvider = _EnhancerProvider2.default;
exports.defaultStyle = _defaultStyle2.default;
exports.defaultPropsDecorator = _defaultPropsDecorator2.default;
exports.default = (0, _defaultStyle2.default)();

/***/ }),

/***/ "./node_modules/substyle/lib/memoize.js":
/*!**********************************************!*\
  !*** ./node_modules/substyle/lib/memoize.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _coerceSelection = __webpack_require__(/*! ./coerceSelection */ "./node_modules/substyle/lib/coerceSelection.js");

var _coerceSelection2 = _interopRequireDefault(_coerceSelection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EMPTY = {};


var memoize = function memoize(substyle) {
  return function (select, defaultStyle) {
    var cacheKey = defaultStyle || EMPTY;
    substyle.memoize = substyle.memoize || new WeakMap();
    var mapEntry = void 0;
    if (!substyle.memoize.has(cacheKey)) {
      mapEntry = {};
      substyle.memoize.set(cacheKey, mapEntry);
    } else {
      mapEntry = substyle.memoize.get(cacheKey);
    }
    var selectHash = (0, _coerceSelection2.default)(select).join(' ');
    return selectHash in mapEntry ? mapEntry[selectHash] : mapEntry[selectHash] = substyle(select || [], defaultStyle);
  };
};

exports.default = memoize;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/substyle/lib/pickStyles.js":
/*!*************************************************!*\
  !*** ./node_modules/substyle/lib/pickStyles.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hoistModifierStylesRecursive = exports.pickNestedStyles = exports.pickDirectStyles = undefined;

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/substyle/lib/utils.js");

var _filterKeys = __webpack_require__(/*! ./filterKeys */ "./node_modules/substyle/lib/filterKeys.js");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var camelize = function camelize(key) {
  return key.replace(/-(\w)/g, function (m, c) {
    return c.toUpperCase();
  });
};

var pickDirectStyles = exports.pickDirectStyles = function pickDirectStyles(style) {
  var objectPropertiesWhitelist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var styleKeys = (0, _utils.keys)(style);
  var result = {};
  for (var i = 0, l = styleKeys.length; i < l; i += 1) {
    var key = styleKeys[i];
    var isDirect = Object.prototype.toString.call(style[key]) !== '[object Object]' || // style defs
    key[0] === ':' || // pseudo selectors
    key[0] === '@' || // @media / @keyframes / @supports / @font-face
    objectPropertiesWhitelist.indexOf(key) >= 0; // whitelisted object-type properties

    if (isDirect) {
      result[key] = style[key];
    }
  }
  return result;
};

var pickNestedStyles = exports.pickNestedStyles = function pickNestedStyles(style, keysToPick) {
  var camelizedKeysToPick = keysToPick.map(camelize);
  var styleKeys = (0, _utils.keys)(style);
  var result = {};
  for (var i = 0, l = styleKeys.length; i < l; i += 1) {
    var key = styleKeys[i];
    if (keysToPick.indexOf(key) >= 0 || camelizedKeysToPick.indexOf(camelize(key)) >= 0) {
      result[key] = style[key];
    }
  }
  return result;
};

// breadth-first hoisting of selected modifier style subtrees
// does not traverse into element, :pseudo-selector or @directive subtrees
var hoistModifierStylesRecursive = exports.hoistModifierStylesRecursive = function hoistModifierStylesRecursive(style, modifierKeysToPick) {
  // hoist styles for selected modifiers on current level
  var result = _utils.merge.apply(undefined, [{}, (0, _utils.omit)(style, modifierKeysToPick)].concat(_toConsumableArray((0, _utils.values)(pickNestedStyles(style, modifierKeysToPick)))));

  // traverse nested styled for ALL modifiers
  var modifierKeys = (0, _utils.keys)(result).filter(_filterKeys.isModifier);
  for (var i = 0, l = modifierKeys.length; i < l; i += 1) {
    var key = modifierKeys[i];
    var subresult = hoistModifierStylesRecursive(result[key], modifierKeysToPick);
    if (modifierKeysToPick.indexOf(key) >= 0) {
      // selected modifier: hoist subresult
      delete result[key];
      result = (0, _utils.merge)({}, result, subresult);
    } else {
      // non-selected modifier: replace with subresult
      result[key] = subresult;
    }
  }

  return result;
};

/***/ }),

/***/ "./node_modules/substyle/lib/types.js":
/*!********************************************!*\
  !*** ./node_modules/substyle/lib/types.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContextTypes = exports.PropTypes = exports.PROPS_DECORATOR_CONTEXT_NAME = exports.ENHANCER_CONTEXT_NAME = undefined;

var _ContextTypes;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ENHANCER_CONTEXT_NAME = exports.ENHANCER_CONTEXT_NAME = '__substyle__enhancer';
var PROPS_DECORATOR_CONTEXT_NAME = exports.PROPS_DECORATOR_CONTEXT_NAME = '__substyle__propsDecorator';

var StylePT = _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object]);

var ClassNamesPT = _propTypes2.default.objectOf(_propTypes2.default.string);

var PropTypes = exports.PropTypes = {
  style: StylePT,
  className: _propTypes2.default.string,
  classNames: ClassNamesPT,
  innerRef: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.shape({
    current: typeof Element === 'undefined' ? _propTypes2.default.any : _propTypes2.default.instanceOf(Element)
  })])
};

var ContextTypes = exports.ContextTypes = (_ContextTypes = {}, _defineProperty(_ContextTypes, ENHANCER_CONTEXT_NAME, _propTypes2.default.func), _defineProperty(_ContextTypes, PROPS_DECORATOR_CONTEXT_NAME, _propTypes2.default.func), _ContextTypes);

/***/ }),

/***/ "./node_modules/substyle/lib/utils.js":
/*!********************************************!*\
  !*** ./node_modules/substyle/lib/utils.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var keys = exports.keys = function keys(obj) {
  return obj === Object(obj) ? Object.keys(obj) : [];
};

var values = exports.values = function values(obj) {
  return obj === Object(obj) ? Object.values(obj) : [];
};

function mergeDeep(target, source) {
  var output = assign({}, target);
  if (isPlainObject(target) && isPlainObject(source)) {
    keys(source).forEach(function (key) {
      if (isPlainObject(source[key])) {
        if (!(key in target)) assign(output, _defineProperty({}, key, source[key]));else output[key] = mergeDeep(target[key], source[key]);
      } else {
        assign(output, _defineProperty({}, key, source[key]));
      }
    });
  }
  return output;
}

var merge = exports.merge = function merge(target) {
  for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  return sources.reduce(function (t, s) {
    return mergeDeep(t, s);
  }, target);
};

var assign = exports.assign = function assign(target) {
  for (var _len2 = arguments.length, sources = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    sources[_key2 - 1] = arguments[_key2];
  }

  return Object.assign.apply(Object, [target].concat(sources));
};

var identity = exports.identity = function identity(value) {
  return value;
};

var omit = function omit(obj, keys) {
  var _obj = _extends({}, obj),
      other = _objectWithoutProperties(_obj, []);

  if (keys) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var key = _step.value;

        delete other[key];
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
  return other;
};

exports.omit = omit;
var isPlainObject = exports.isPlainObject = function isPlainObject(obj) {
  return obj === Object(obj) && !(obj instanceof Date) && !Array.isArray(obj);
};

var compact = exports.compact = function compact(arr) {
  return (arr || []).filter(Boolean);
};

/***/ }),

/***/ "./node_modules/substyle/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/substyle/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/textarea-caret/index.js":
false,

/***/ "./node_modules/trim-trailing-lines/index.js":
false,

/***/ "./node_modules/trim/index.js":
false,

/***/ "./node_modules/trough/index.js":
false,

/***/ "./node_modules/trough/wrap.js":
false,

/***/ "./node_modules/ua-parser-js/src/ua-parser.js":
false,

/***/ "./node_modules/unherit/index.js":
false,

/***/ "./node_modules/unified/index.js":
false,

/***/ "./node_modules/union-class-names/lib/index.js":
false,

/***/ "./node_modules/unist-util-is/index.js":
false,

/***/ "./node_modules/unist-util-remove-position/index.js":
false,

/***/ "./node_modules/unist-util-stringify-position/index.js":
false,

/***/ "./node_modules/unist-util-visit-parents/index.js":
false,

/***/ "./node_modules/unist-util-visit/index.js":
false,

/***/ "./node_modules/unist-util-visit/node_modules/unist-util-visit-parents/index.js":
false,

/***/ "./node_modules/vfile-location/index.js":
false,

/***/ "./node_modules/vfile-message/index.js":
false,

/***/ "./node_modules/vfile/core.js":
false,

/***/ "./node_modules/vfile/index.js":
false,

/***/ "./node_modules/warning/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (true) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
false,

/***/ "./node_modules/x-is-string/index.js":
false,

/***/ "./node_modules/xtend/immutable.js":
false

})
//# sourceMappingURL=createLearningCard.js.36965ae77d1965bf42f2.hot-update.js.map