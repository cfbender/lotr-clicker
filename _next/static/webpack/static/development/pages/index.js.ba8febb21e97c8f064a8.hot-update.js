webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/character.tsx":
/*!**********************************!*\
  !*** ./components/character.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/cody/code/github/lotr-clicker/components/character.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Character = function Character() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Character);

/***/ }),

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

  return __jsx("div", {
    className: "jsx-3659701861",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-3659701861",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Greetings, traveler. Click on each character once to get a point, if you click the same one twice you lose!"), state.win && __jsx("h2", {
    className: "jsx-3659701861",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "You win! Congratulations!"), characters.map(function (_char) {
    return __jsx(_character__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    });
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3659701861",
    __self: this
  }, "h2.jsx-3659701861{font-family:sans-serif;font-weight:lighter;font-size:18px;color:#666;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZHkvY29kZS9naXRodWIvbG90ci1jbGlja2VyL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJrQixBQUdrQyx1QkFDSCxvQkFDTCxlQUNKLFdBQ08sa0JBQ3BCIiwiZmlsZSI6Ii9ob21lL2NvZHkvY29kZS9naXRodWIvbG90ci1jbGlja2VyL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNjb3JlQ29udGV4dCB9IGZyb20gXCIuLi9saWIvU2NvcmVDb250ZXh0XCI7XG5pbXBvcnQgY2hhcmFjdGVyRGF0YSBmcm9tIFwiLi4vcHVibGljL2NoYXJhY3RlcnMvY2hhcmFjdGVycy5qc29uXCI7XG5cbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSBcIi4vY2hhcmFjdGVyXCI7XG5cbmNvbnN0IEdhbWVDb250YWluZXIgPSAoeyBkaXNwYXRjaCB9KSA9PiB7XG4gIGNvbnN0IHN0YXRlID0gdXNlQ29udGV4dChTY29yZUNvbnRleHQpO1xuICBjb25zdCBbY2hhcmFjdGVycywgdXBkYXRlQ2hhcmFjdGVyc10gPSB1c2VTdGF0ZShjaGFyYWN0ZXJEYXRhKTtcbiAgY29uc3QgW3NlbGVjdGVkQ2hhcnMsIHNldFNlbGVjdGVkQ2hhcnNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IHNodWZmbGVDaGFyYWN0ZXJzID0gKCkgPT5cbiAgICB1cGRhdGVDaGFyYWN0ZXJzKGNoYXJhY3RlcnMuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgyPlxuICAgICAgICBHcmVldGluZ3MsIHRyYXZlbGVyLiBDbGljayBvbiBlYWNoIGNoYXJhY3RlciBvbmNlIHRvIGdldCBhIHBvaW50LCBpZiB5b3VcbiAgICAgICAgY2xpY2sgdGhlIHNhbWUgb25lIHR3aWNlIHlvdSBsb3NlIVxuICAgICAgPC9oMj5cbiAgICAgIHtzdGF0ZS53aW4gJiYgPGgyPllvdSB3aW4hIENvbmdyYXR1bGF0aW9ucyE8L2gyPn1cblxuICAgICAge2NoYXJhY3RlcnMubWFwKGNoYXIgPT4gKFxuICAgICAgICA8Q2hhcmFjdGVyIC8+XG4gICAgICApKX1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDIge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVDb250YWluZXI7XG4iXX0= */\n/*@ sourceURL=/home/cody/code/github/lotr-clicker/components/gameContainer.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (GameContainer);

/***/ }),

/***/ "./public/characters/characters.json":
/*!*******************************************!*\
  !*** ./public/characters/characters.json ***!
  \*******************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":0,\"name\":\"aragorn\",\"file\":\"/characters/aragorn.png\"},{\"id\":1,\"name\":\"bilbo\",\"file\":\"/characters/bilbo.png\"},{\"id\":2,\"name\":\"boromir\",\"file\":\"/characters/boromir.png\"},{\"id\":3,\"name\":\"elrond\",\"file\":\"/characters/elrond.png\"},{\"id\":4,\"name\":\"eomer\",\"file\":\"/characters/eomer.png\"},{\"id\":5,\"name\":\"eowyn\",\"file\":\"/characters/eowyn.png\"},{\"id\":6,\"name\":\"faramir\",\"file\":\"/characters/faramir.png\"},{\"id\":7,\"name\":\"frodo\",\"file\":\"/characters/frodo.png\"},{\"id\":8,\"name\":\"galadriel\",\"file\":\"/characters/galadriel.png\"},{\"id\":9,\"name\":\"gandalf\",\"file\":\"/characters/gandalf.png\"},{\"id\":10,\"name\":\"gimli\",\"file\":\"/characters/gimli.png\"},{\"id\":11,\"name\":\"gollum\",\"file\":\"/characters/gollum.png\"},{\"id\":12,\"name\":\"legolas\",\"file\":\"/characters/legolas.png\"},{\"id\":13,\"name\":\"merry\",\"file\":\"/characters/merry.png\"},{\"id\":14,\"name\":\"pippin\",\"file\":\"/characters/pippin.png\"},{\"id\":15,\"name\":\"sam\",\"file\":\"/characters/sam.png\"},{\"id\":16,\"name\":\"sarumon\",\"file\":\"/characters/sarumon.png\"},{\"id\":17,\"name\":\"theoden\",\"file\":\"/characters/theoden.png\"},{\"id\":18,\"name\":\"thorin\",\"file\":\"/characters/thorin.png\"},{\"id\":19,\"name\":\"treebeard\",\"file\":\"/characters/treebeard.png\"}]");

/***/ })

})
//# sourceMappingURL=index.js.ba8febb21e97c8f064a8.hot-update.js.map