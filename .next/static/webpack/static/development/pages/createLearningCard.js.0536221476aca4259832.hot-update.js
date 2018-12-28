webpackHotUpdate("static/development/pages/createLearningCard.js",{

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

    return _this;
  }

  _createClass(Mentions, [{
    key: "render",
    value: function render() {
      var value = this.state.value;
      var data = this.props.data;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_mentions__WEBPACK_IMPORTED_MODULE_1__["MentionsInput"], {
        value: value,
        onChange: onChange,
        style: _defaultStyle__WEBPACK_IMPORTED_MODULE_2__["default"],
        markup: "@[__display__](__type__:__id__)",
        placeholder: "Mention people using '@'",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
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
              lineNumber: 35
            },
            __self: this
          }, highlightedDisplay);
        },
        onAdd: onAdd,
        style: _defaultMentionStyle__WEBPACK_IMPORTED_MODULE_3__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }));
    }
  }]);

  return Mentions;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

})
//# sourceMappingURL=createLearningCard.js.0536221476aca4259832.hot-update.js.map