module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CreateLearningCard.js":
/*!******************************************!*\
  !*** ./components/CreateLearningCard.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _MarkdownEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MarkdownEditor */ "./components/MarkdownEditor.js");
/* harmony import */ var _Mentions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Mentions */ "./components/Mentions.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _HomeLearning__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./HomeLearning */ "./components/HomeLearning.js");

var _jsxFileName = "/Users/travisgerrard/Dropbox/react-learning/VMIMRtake2/frontend/components/CreateLearningCard.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
  var data = _taggedTemplateLiteral(["\n  mutation CREATE_CARD_MUTATION(\n    $tags: [RotationTags]!\n    $title: String!\n    $whatWasLearned: String!\n    $taggedUser: [ID]!\n  ) {\n    createCard(\n      tags: $tags\n      title: $title\n      whatWasLearned: $whatWasLearned\n      taggedUser: $taggedUser\n    ) {\n      id\n    }\n  }\n"]);

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


 //import Select from 'react-select';









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
var ALL_USERS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
var CREATE_CARD_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject2());

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
      title: '',
      whatWasLearned: 'Learned with attending _ on date _',
      tags: [],
      taggedUser: [],
      preview: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "tagsAdded", function (id) {
      _this.setState({
        tags: _toConsumableArray(_this.state.tags).concat([id])
      }, function () {
        return console.log(_this.state.tags);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "usersAdded", function (id) {
      _this.setState({
        taggedUser: _toConsumableArray(_this.state.taggedUser).concat([id])
      }, function () {
        return console.log(_this.state.taggedUser);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "previewChange", function () {
      var currentPreview = _this.state.preview;

      _this.setState({
        preview: !currentPreview
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          type = _e$target.type,
          value = _e$target.value;
      var val = type === 'number' ? parseFloat(value) : value;

      _this.setState(_defineProperty({}, name, val));
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
          console.log(newText);

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
      console.log(value);
      var whatWasLearnedText = _this.state.whatWasLearned;
      var whatWasLearnedTextArea = document.getElementById('whatWasLearned');
      console.log(whatWasLearnedTextArea);
      var startPosition = whatWasLearnedTextArea.selectionStart;
      var endPosition = whatWasLearnedTextArea.selectionEnd;
      console.log(startPosition, endPosition);

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
        refetchQueries: [{
          query: _HomeLearning__WEBPACK_IMPORTED_MODULE_10__["ALL_LEARNING_QUERY"]
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        },
        __self: this
      }, function (createCard, _ref) {
        var loading = _ref.loading,
            error = _ref.error;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
          "data-test": "form",
          onSubmit:
          /*#__PURE__*/
          function () {
            var _ref2 = _asyncToGenerator(
            /*#__PURE__*/
            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
              var _this2$state, tags, taggedUser, whatWasLearned, title, res;

              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      e.preventDefault(); // call the mutation

                      _this2$state = _this2.state, tags = _this2$state.tags, taggedUser = _this2$state.taggedUser, whatWasLearned = _this2$state.whatWasLearned, title = _this2$state.title; //console.log(tags, taggedUser, whatWasLearned, title);

                      _context.next = 4;
                      return createCard({
                        variables: {
                          tags: tags,
                          taggedUser: taggedUser,
                          whatWasLearned: whatWasLearned,
                          title: title
                        }
                      }).catch(function (err) {
                        alert(err.message);
                      });

                    case 4:
                      res = _context.sent;
                      //console.log(res);
                      // change them to the home page.
                      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push({
                        pathname: '/'
                      });

                    case 6:
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
            lineNumber: 389
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 416
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
          disabled: loading,
          "aria-busy": loading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 417
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 418
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "text",
          id: "title",
          name: "title",
          placeholder: "Title",
          required: true,
          value: _this2.state.title,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 419
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "whatWasLearned",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 430
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
          query: ALL_USERS_QUERY,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 431
          },
          __self: this
        }, function (_ref3) {
          var data = _ref3.data,
              loading = _ref3.loading,
              error = _ref3.error;
          if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 433
            },
            __self: this
          }, "Loading...");
          var userArray = data.users.map(function (user) {
            return {
              id: user.id,
              display: "@".concat(user.name)
            };
          });
          var rotationArray = possibleRotationTypes.map(function (rotation) {
            return {
              id: rotation.value,
              display: "#".concat(rotation.label)
            };
          });
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MarkdownEditor__WEBPACK_IMPORTED_MODULE_7__["default"], {
            preview: _this2.state.preview,
            previewChange: _this2.previewChange,
            markdownButtonPressed: _this2.markdownButtonPressed,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 448
            },
            __self: this
          }), _this2.state.preview ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
            className: "markdownPreview",
            source: _this2.state.whatWasLearned,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 454
            },
            __self: this
          }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Mentions__WEBPACK_IMPORTED_MODULE_8__["default"], {
            users: userArray,
            rotations: rotationArray,
            whatWasLearned: _this2.state.whatWasLearned,
            handleChange: _this2.handleChange,
            tagsAdded: _this2.tagsAdded,
            usersAdded: _this2.usersAdded,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 459
            },
            __self: this
          }));
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 474
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

/***/ "./components/ErrorMessage.js":
/*!************************************!*\
  !*** ./components/ErrorMessage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/travisgerrard/Dropbox/react-learning/VMIMRtake2/frontend/components/ErrorMessage.js";



var ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "sc-11u5fgj-0"
})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]);

var DisplayError = function DisplayError(_ref) {
  var error = _ref.error;
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map(function (error, i) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        "data-test": "graphql-error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Shoot!"), error.message.replace('GraphQL error: ', '')));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    "data-test": "graphql-error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Shoot!"), error.message.replace('GraphQL error: ', '')));
};

DisplayError.defaultProps = {
  error: {}
};
DisplayError.propTypes = {
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (DisplayError);

/***/ }),

/***/ "./components/HomeLearning.js":
/*!************************************!*\
  !*** ./components/HomeLearning.js ***!
  \************************************/
/*! exports provided: default, ALL_LEARNING_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomeLearning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_LEARNING_QUERY", function() { return ALL_LEARNING_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/travisgerrard/Dropbox/react-learning/VMIMRtake2/frontend/components/HomeLearning.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query ALL_LEARNING_QUERY {\n    learnings(orderBy: createdAt_DESC) {\n      id\n      title\n      whatWasLearned\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var ALL_LEARNING_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var CardLayout = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "HomeLearning__CardLayout",
  componentId: "sc-12zs89m-0"
})(["display:grid;grid-template-columns:1fr;grid-gap:30px;max-width:", " margin:0 auto;"], function (props) {
  return props.theme.maxWidth;
});
var Card = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "HomeLearning__Card",
  componentId: "sc-12zs89m-1"
})(["background:white;box-shadow:", ";position:relative;display:flex;flex-direction:column;img{width:100%;height:400px;object-fit:cover;}p{font-size:12px;line-height:2;font-weight:300;flex-grow:1;padding:0 3rem;font-size:1.5rem;}"], function (props) {
  return props.theme.bs;
});
var CardTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "HomeLearning__CardTitle",
  componentId: "sc-12zs89m-2"
})(["font-size:2.5rem;font-weight:900;color:", ";padding-left:1rem;"], function (props) {
  return props.theme.darkerBlue;
});
var CardBody = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(react_markdown__WEBPACK_IMPORTED_MODULE_4___default.a).withConfig({
  displayName: "HomeLearning__CardBody",
  componentId: "sc-12zs89m-3"
})(["& > img{width:100%;height:400px;object-fit:cover;}& > p{padding-left:1rem;font-size:2rem;margin:0;a{color:", ";}a:hover{color:hotpink;}}"], function (props) {
  return props.theme.darkerBlue;
});

var HomeLearning =
/*#__PURE__*/
function (_Component) {
  _inherits(HomeLearning, _Component);

  function HomeLearning() {
    _classCallCheck(this, HomeLearning);

    return _possibleConstructorReturn(this, _getPrototypeOf(HomeLearning).apply(this, arguments));
  }

  _createClass(HomeLearning, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: ALL_LEARNING_QUERY,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data,
            loading = _ref.loading,
            error = _ref.error;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, "Loading...");
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, "Error : ", error.message);
        console.log(data);
        var learnings = data.learnings;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CardLayout, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, learnings.map(function (learning) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card, {
            key: learning.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CardTitle, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            },
            __self: this
          }, learning.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CardBody, {
            source: learning.whatWasLearned,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 89
            },
            __self: this
          }));
        }));
      });
    }
  }]);

  return HomeLearning;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);




/***/ }),

/***/ "./components/MarkdownEditor.js":
/*!**************************************!*\
  !*** ./components/MarkdownEditor.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactjs-popup */ "reactjs-popup");
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactjs_popup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/travisgerrard/Dropbox/react-learning/VMIMRtake2/frontend/components/MarkdownEditor.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var HeaderPopover = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "MarkdownEditor__HeaderPopover",
  componentId: "nhgaed-0"
})(["h1,h2,h3,h4{margin:0;&:hover{color:", ";cursor:pointer;}}"], function (props) {
  return props.theme.darkBlue;
});

var MarkdownEditor =
/*#__PURE__*/
function (_Component) {
  _inherits(MarkdownEditor, _Component);

  function MarkdownEditor() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MarkdownEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MarkdownEditor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (value) {
      _this.props.markdownButtonPressed(value);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showEditBar", function () {
      var preview = _this.props.preview;

      if (preview) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "markdown-header",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          type: "button",
          onClick: _this.props.previewChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, "write"));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "markdown-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        onClick: _this.props.previewChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "preview"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactjs_popup__WEBPACK_IMPORTED_MODULE_3___default.a, {
        trigger: function trigger(open) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            id: "header-button",
            name: "header-button",
            type: "button",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faHeading"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }));
        },
        position: "bottom center",
        closeOnDocumentClick: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, function (close) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderPopover, {
          className: "header-popover",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          onClick: function onClick() {
            _this.handleClick('headerTwo');

            close();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, "Header 1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
          onClick: function onClick(e) {
            _this.handleClick('headerThree');

            close();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, "Header 2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
          onClick: function onClick(e) {
            _this.handleClick('headerFour');

            close();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, "Header 3"));
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        id: "bold-button",
        name: "bold-button",
        onClick: function onClick(e) {
          e.preventDefault();

          _this.handleClick('bold');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBold"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        id: "italic-button",
        name: "italic-button",
        onClick: function onClick(e) {
          e.preventDefault();

          _this.handleClick('italic');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faItalic"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        id: "strikeThrough-button",
        name: "strikeThrough-button",
        onClick: function onClick(e) {
          e.preventDefault();

          _this.handleClick('strikeThrough');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faStrikethrough"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        id: "link-button",
        name: "link-button",
        onClick: function onClick(e) {
          e.preventDefault();

          _this.handleClick('link');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faLink"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        id: "quote-button",
        name: "quote-button",
        onClick: function onClick(e) {
          e.preventDefault();

          _this.handleClick('quote');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faQuoteRight"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        id: "code-button",
        name: "code-button",
        onClick: function onClick(e) {
          e.preventDefault();

          _this.handleClick('code');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCode"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        id: "image-button",
        name: "image-button",
        onClick: function onClick(e) {
          e.preventDefault();

          _this.handleClick('image');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faImage"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        id: "listUl-button",
        name: "listUl-button",
        onClick: function onClick(e) {
          e.preventDefault();

          _this.handleClick('listUl');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faListUl"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        id: "listOl-button",
        name: "listOl-button",
        onClick: function onClick(e) {
          e.preventDefault();

          _this.handleClick('listOl');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faListOl"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        id: "tasks-button",
        name: "tasks-button",
        onClick: function onClick(e) {
          e.preventDefault();

          _this.handleClick('tasks');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTasks"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      })));
    });

    return _this;
  }

  _createClass(MarkdownEditor, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, this.showEditBar());
    }
  }]);

  return MarkdownEditor;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MarkdownEditor);

/***/ }),

/***/ "./components/Mentions.js":
/*!********************************!*\
  !*** ./components/Mentions.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mentions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_mentions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-mentions */ "react-mentions");
/* harmony import */ var react_mentions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_mentions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultStyle */ "./components/defaultStyle.js");
/* harmony import */ var _defaultMentionStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultMentionStyle */ "./components/defaultMentionStyle.js");
var _jsxFileName = "/Users/travisgerrard/Dropbox/react-learning/VMIMRtake2/frontend/components/Mentions.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Mentions =
/*#__PURE__*/
function (_Component) {
  _inherits(Mentions, _Component);

  function Mentions() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Mentions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Mentions)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      value: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (e, value) {
      // console.log(e, value);
      // console.log(this.state.value);
      _this.setState({
        value: value
      });

      _this.props.handleChange({
        target: {
          value: value,
          type: 'text',
          name: 'whatWasLearned'
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onAddUser", function (id, display) {
      _this.props.usersAdded(id);

      console.log('added a new user, ', display);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onAddRotation", function (id, display) {
      _this.props.tagsAdded(id);

      console.log('added a new rotation, ', display);
    });

    return _this;
  }

  _createClass(Mentions, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          users = _this$props.users,
          rotations = _this$props.rotations,
          whatWasLearned = _this$props.whatWasLearned;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_mentions__WEBPACK_IMPORTED_MODULE_1__["MentionsInput"], {
        name: "whatWasLearned",
        id: "whatWasLearned",
        className: "mentionInput",
        value: whatWasLearned,
        onChange: this.onChange,
        style: _defaultStyle__WEBPACK_IMPORTED_MODULE_2__["default"],
        markup: "[__display__](/__type__/__id__)",
        allowSpaceInQuery: true,
        placeholder: 'Learned with attending _ on date _ \n\nUse @ to tag other users and # to tag a rotation',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_mentions__WEBPACK_IMPORTED_MODULE_1__["Mention"], {
        type: "user",
        trigger: "@",
        data: users,
        renderSuggestion: function renderSuggestion(suggestion, search, highlightedDisplay, index, focused) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "user ".concat(focused ? 'focused' : ''),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            },
            __self: this
          }, highlightedDisplay);
        },
        onAdd: this.onAddUser,
        style: _defaultMentionStyle__WEBPACK_IMPORTED_MODULE_3__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_mentions__WEBPACK_IMPORTED_MODULE_1__["Mention"], {
        type: "rotation",
        trigger: "#",
        data: rotations,
        renderSuggestion: function renderSuggestion(suggestion, search, highlightedDisplay, index, focused) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "user ".concat(focused ? 'focused' : ''),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            },
            __self: this
          }, highlightedDisplay);
        },
        onAdd: this.onAddRotation,
        style: {
          backgroundColor: '#FFEE58'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
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
      border: '1px solid black'
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

/***/ "./components/styles/Form.js":
/*!***********************************!*\
  !*** ./components/styles/Form.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "Form",
  componentId: "sc-1xszr8q-0"
})(["box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;line-height:1.5;label{display:block;margin-bottom:0.5rem;}input,textarea,select{width:100%;padding:0.5rem;margin-top:0.5rem;font-size:1rem;border:1px solid black;line-height:1em;&:focus{outline:0;border-color:", ";}}.markdownPreview{box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:white;border:5px solid white;line-height:1.5;p{margin:0;}}.markdown-header{}button,input[type='submit']{width:auto;background:", ";color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;cursor:pointer;&:hover{color:", ";background:white;}&:focus{outline:0px;}}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;background-image:linear-gradient( to right,#00b6de 0%,#479e65 50%,#00b6de 100% );}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}"], function (props) {
  return props.theme.darkBlue;
}, function (props) {
  return props.theme.darkBlue;
}, function (props) {
  return props.theme.darkBlue;
}, loading);
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./pages/createLearningCard.js":
/*!*************************************!*\
  !*** ./pages/createLearningCard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CreateLearningCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CreateLearningCard */ "./components/CreateLearningCard.js");
var _jsxFileName = "/Users/travisgerrard/Dropbox/react-learning/VMIMRtake2/frontend/pages/createLearningCard.js";



var createLearningCard = function createLearningCard(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CreateLearningCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (createLearningCard);

/***/ }),

/***/ 3:
/*!*******************************************!*\
  !*** multi ./pages/createLearningCard.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/createLearningCard.js */"./pages/createLearningCard.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "react-mentions":
/*!*********************************!*\
  !*** external "react-mentions" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-mentions");

/***/ }),

/***/ "reactjs-popup":
/*!********************************!*\
  !*** external "reactjs-popup" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactjs-popup");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=createLearningCard.js.map