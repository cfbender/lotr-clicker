webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/gameContainer.tsx":
/*!**************************************!*\
  !*** ./components/gameContainer.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_ScoreContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/ScoreContext */ "./lib/ScoreContext.tsx");
/* harmony import */ var _public_characters_characters_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/characters/characters.json */ "./public/characters/characters.json");
var _public_characters_characters_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/characters/characters.json */ "./public/characters/characters.json", 1);
/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./character */ "./components/character.tsx");

var _jsxFileName = "/home/cody/code/github/lotr-clicker/components/gameContainer.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var GameContainer = function GameContainer(_ref) {
  var dispatch = _ref.dispatch;
  var state = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_lib_ScoreContext__WEBPACK_IMPORTED_MODULE_3__["ScoreContext"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(_public_characters_characters_json__WEBPACK_IMPORTED_MODULE_4__),
      characters = _useState[0],
      updateCharacters = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      selectedChars = _useState2[0],
      setSelectedChars = _useState2[1];

  var shuffleCharacters = function shuffleCharacters() {
    return updateCharacters(characters.sort(function () {
      return Math.random() - 0.5;
    }));
  };

  var handleClick = function handleClick(e) {
    //if just won or lost, reset
    if (state.win || state.loss) {
      dispatch("reset");
    }

    if (!selectedChars.includes(e.target.id)) {
      setSelectedChars([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(selectedChars), [e.target.id]));
      dispatch("score++");
      state.score >= state.highScore ? dispatch("setHigh") : null;

      if (state.score === characters.length - 1) {
        dispatch("setWin");
        setSelectedChars([]);
      }

      shuffleCharacters();
    } else {
      dispatch("setLoss");
      setSelectedChars([]);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    shuffleCharacters();
  }, []);
  return __jsx("div", {
    className: "jsx-1068463583",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-1068463583",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Greetings, traveler. Click on each character once to get a point, if you click the same one twice you lose!"), state.win && __jsx("h2", {
    className: "jsx-1068463583" + " " + "win-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "You win! Congratulations!"), state.loss && __jsx("h2", {
    className: "jsx-1068463583" + " " + "loss-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "You lose! Try again."), __jsx("div", {
    className: "jsx-1068463583" + " " + "char-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, characters.map(function (_ref2) {
    var id = _ref2.id,
        name = _ref2.name,
        file = _ref2.file;
    return __jsx(_character__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: id,
      id: id,
      name: name,
      file: file,
      click: handleClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1068463583",
    __self: this
  }, "h2.jsx-1068463583{font-family:sans-serif;font-weight:lighter;font-size:18px;color:#666;text-align:center;}.char-container.jsx-1068463583{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZHkvY29kZS9naXRodWIvbG90ci1jbGlja2VyL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0RrQixBQUdrQyxBQVFWLHVCQVBPLG9CQUNMLGVBQ0osV0FDTyxLQUtDLGFBSnJCLHdEQUt5QixtR0FDVCxjQUNoQiIsImZpbGUiOiIvaG9tZS9jb2R5L2NvZGUvZ2l0aHViL2xvdHItY2xpY2tlci9jb21wb25lbnRzL2dhbWVDb250YWluZXIudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNjb3JlQ29udGV4dCB9IGZyb20gXCIuLi9saWIvU2NvcmVDb250ZXh0XCI7XG5pbXBvcnQgY2hhcmFjdGVyRGF0YSBmcm9tIFwiLi4vcHVibGljL2NoYXJhY3RlcnMvY2hhcmFjdGVycy5qc29uXCI7XG5cbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSBcIi4vY2hhcmFjdGVyXCI7XG5cbmNvbnN0IEdhbWVDb250YWluZXIgPSAoeyBkaXNwYXRjaCB9KSA9PiB7XG4gIGNvbnN0IHN0YXRlID0gdXNlQ29udGV4dChTY29yZUNvbnRleHQpO1xuICBjb25zdCBbY2hhcmFjdGVycywgdXBkYXRlQ2hhcmFjdGVyc10gPSB1c2VTdGF0ZShjaGFyYWN0ZXJEYXRhKTtcbiAgY29uc3QgW3NlbGVjdGVkQ2hhcnMsIHNldFNlbGVjdGVkQ2hhcnNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IHNodWZmbGVDaGFyYWN0ZXJzID0gKCkgPT5cbiAgICB1cGRhdGVDaGFyYWN0ZXJzKGNoYXJhY3RlcnMuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBlID0+IHtcbiAgICAvL2lmIGp1c3Qgd29uIG9yIGxvc3QsIHJlc2V0XG4gICAgaWYgKHN0YXRlLndpbiB8fCBzdGF0ZS5sb3NzKSB7XG4gICAgICBkaXNwYXRjaChcInJlc2V0XCIpO1xuICAgIH1cbiAgICBpZiAoIXNlbGVjdGVkQ2hhcnMuaW5jbHVkZXMoZS50YXJnZXQuaWQpKSB7XG4gICAgICBzZXRTZWxlY3RlZENoYXJzKFsuLi5zZWxlY3RlZENoYXJzLCBlLnRhcmdldC5pZF0pO1xuICAgICAgZGlzcGF0Y2goXCJzY29yZSsrXCIpO1xuICAgICAgc3RhdGUuc2NvcmUgPj0gc3RhdGUuaGlnaFNjb3JlID8gZGlzcGF0Y2goXCJzZXRIaWdoXCIpIDogbnVsbDtcbiAgICAgIGlmIChzdGF0ZS5zY29yZSA9PT0gY2hhcmFjdGVycy5sZW5ndGggLSAxKSB7XG4gICAgICAgIGRpc3BhdGNoKFwic2V0V2luXCIpO1xuICAgICAgICBzZXRTZWxlY3RlZENoYXJzKFtdKTtcbiAgICAgIH1cbiAgICAgIHNodWZmbGVDaGFyYWN0ZXJzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BhdGNoKFwic2V0TG9zc1wiKTtcbiAgICAgIHNldFNlbGVjdGVkQ2hhcnMoW10pO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNodWZmbGVDaGFyYWN0ZXJzKCk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgyPlxuICAgICAgICBHcmVldGluZ3MsIHRyYXZlbGVyLiBDbGljayBvbiBlYWNoIGNoYXJhY3RlciBvbmNlIHRvIGdldCBhIHBvaW50LCBpZiB5b3VcbiAgICAgICAgY2xpY2sgdGhlIHNhbWUgb25lIHR3aWNlIHlvdSBsb3NlIVxuICAgICAgPC9oMj5cbiAgICAgIHtzdGF0ZS53aW4gJiYgPGgyIGNsYXNzTmFtZT1cIndpbi10ZXh0XCI+WW91IHdpbiEgQ29uZ3JhdHVsYXRpb25zITwvaDI+fVxuICAgICAge3N0YXRlLmxvc3MgJiYgPGgyIGNsYXNzTmFtZT1cImxvc3MtdGV4dFwiPllvdSBsb3NlISBUcnkgYWdhaW4uPC9oMj59XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXItY29udGFpbmVyXCI+XG4gICAgICAgIHtjaGFyYWN0ZXJzLm1hcCgoeyBpZCwgbmFtZSwgZmlsZSB9KSA9PiAoXG4gICAgICAgICAgPENoYXJhY3RlclxuICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICBmaWxlPXtmaWxlfVxuICAgICAgICAgICAgY2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgyIHtcbiAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoYXItY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVDb250YWluZXI7XG4iXX0= */\n/*@ sourceURL=/home/cody/code/github/lotr-clicker/components/gameContainer.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (GameContainer);

/***/ })

})
//# sourceMappingURL=index.js.20db07ebc817fea62f19.hot-update.js.map