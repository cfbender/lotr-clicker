webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/gameContainer.tsx":
/*!**************************************!*\
  !*** ./components/gameContainer.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_ScoreContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/ScoreContext */ "./lib/ScoreContext.tsx");
/* harmony import */ var _public_characters_characters_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/characters/characters.json */ "./public/characters/characters.json");
var _public_characters_characters_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/characters/characters.json */ "./public/characters/characters.json", 1);
/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./character */ "./components/character.tsx");
var _jsxFileName = "/home/cody/code/github/lotr-clicker/components/gameContainer.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var GameContainer = function GameContainer(_ref) {
  var dispatch = _ref.dispatch;
  var state = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_lib_ScoreContext__WEBPACK_IMPORTED_MODULE_2__["ScoreContext"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_public_characters_characters_json__WEBPACK_IMPORTED_MODULE_3__),
      characters = _useState[0],
      updateCharacters = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      selectedChars = _useState2[0],
      setSelectedChars = _useState2[1];

  var shuffleCharacters = function shuffleCharacters() {
    return updateCharacters(characters.sort(function () {
      return Math.random() - 0.5;
    }));
  };

  var handleClick = function handleClick(e) {};

  return __jsx("div", {
    className: "jsx-3659701861",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-3659701861",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Greetings, traveler. Click on each character once to get a point, if you click the same one twice you lose!"), state.win && __jsx("h2", {
    className: "jsx-3659701861",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "You win! Congratulations!"), characters.map(function (_ref2) {
    var id = _ref2.id,
        name = _ref2.name,
        file = _ref2.file;
    return __jsx(_character__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: id,
      id: id,
      name: name,
      file: file,
      shuffle: shuffleCharacters,
      click: handleClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    });
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3659701861",
    __self: this
  }, "h2.jsx-3659701861{font-family:sans-serif;font-weight:lighter;font-size:18px;color:#666;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZHkvY29kZS9naXRodWIvbG90ci1jbGlja2VyL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NrQixBQUdrQyx1QkFDSCxvQkFDTCxlQUNKLFdBQ08sa0JBQ3BCIiwiZmlsZSI6Ii9ob21lL2NvZHkvY29kZS9naXRodWIvbG90ci1jbGlja2VyL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNjb3JlQ29udGV4dCB9IGZyb20gXCIuLi9saWIvU2NvcmVDb250ZXh0XCI7XG5pbXBvcnQgY2hhcmFjdGVyRGF0YSBmcm9tIFwiLi4vcHVibGljL2NoYXJhY3RlcnMvY2hhcmFjdGVycy5qc29uXCI7XG5cbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSBcIi4vY2hhcmFjdGVyXCI7XG5cbmNvbnN0IEdhbWVDb250YWluZXIgPSAoeyBkaXNwYXRjaCB9KSA9PiB7XG4gIGNvbnN0IHN0YXRlID0gdXNlQ29udGV4dChTY29yZUNvbnRleHQpO1xuICBjb25zdCBbY2hhcmFjdGVycywgdXBkYXRlQ2hhcmFjdGVyc10gPSB1c2VTdGF0ZShjaGFyYWN0ZXJEYXRhKTtcbiAgY29uc3QgW3NlbGVjdGVkQ2hhcnMsIHNldFNlbGVjdGVkQ2hhcnNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IHNodWZmbGVDaGFyYWN0ZXJzID0gKCkgPT5cbiAgICB1cGRhdGVDaGFyYWN0ZXJzKGNoYXJhY3RlcnMuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBlID0+IHt9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMj5cbiAgICAgICAgR3JlZXRpbmdzLCB0cmF2ZWxlci4gQ2xpY2sgb24gZWFjaCBjaGFyYWN0ZXIgb25jZSB0byBnZXQgYSBwb2ludCwgaWYgeW91XG4gICAgICAgIGNsaWNrIHRoZSBzYW1lIG9uZSB0d2ljZSB5b3UgbG9zZSFcbiAgICAgIDwvaDI+XG4gICAgICB7c3RhdGUud2luICYmIDxoMj5Zb3Ugd2luISBDb25ncmF0dWxhdGlvbnMhPC9oMj59XG5cbiAgICAgIHtjaGFyYWN0ZXJzLm1hcCgoeyBpZCwgbmFtZSwgZmlsZSB9KSA9PiAoXG4gICAgICAgIDxDaGFyYWN0ZXJcbiAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIGZpbGU9e2ZpbGV9XG4gICAgICAgICAgc2h1ZmZsZT17c2h1ZmZsZUNoYXJhY3RlcnN9XG4gICAgICAgICAgY2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgyIHtcbiAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lQ29udGFpbmVyO1xuIl19 */\n/*@ sourceURL=/home/cody/code/github/lotr-clicker/components/gameContainer.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (GameContainer);

/***/ })

})
//# sourceMappingURL=index.js.1fad8b9bce64a8a16415.hot-update.js.map