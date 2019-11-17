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
    className: "jsx-2189861805",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-2189861805",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Greetings, traveler. Click on each character once to get a point, if you click the same one twice you lose!"), state.win && __jsx("h2", {
    className: "jsx-2189861805" + " " + "win-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "You win! Congratulations!"), state.loss && __jsx("h2", {
    className: "jsx-2189861805" + " " + "loss-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "You lose! Try again."), __jsx("div", {
    className: "jsx-2189861805" + " " + "char-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
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
        lineNumber: 47
      },
      __self: this
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2189861805",
    __self: this
  }, "h2.jsx-2189861805{font-family:sans-serif;font-weight:lighter;font-size:18px;color:#666;text-align:center;}.char-container.jsx-2189861805{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.loss-text.jsx-2189861805,.win-text.jsx-2189861805{-webkit-transition:opacity 1s ease;transition:opacity 1s ease;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZHkvY29kZS9naXRodWIvbG90ci1jbGlja2VyL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdURrQixBQUdrQyxBQVFWLEFBT2MsdUJBZFAsb0JBQ0wsZUFDSixJQWFiLE9BWm9CLEtBS0MsYUFKckIsd0RBS3lCLG1HQUN6QiIsImZpbGUiOiIvaG9tZS9jb2R5L2NvZGUvZ2l0aHViL2xvdHItY2xpY2tlci9jb21wb25lbnRzL2dhbWVDb250YWluZXIudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNjb3JlQ29udGV4dCB9IGZyb20gXCIuLi9saWIvU2NvcmVDb250ZXh0XCI7XG5pbXBvcnQgY2hhcmFjdGVyRGF0YSBmcm9tIFwiLi4vcHVibGljL2NoYXJhY3RlcnMvY2hhcmFjdGVycy5qc29uXCI7XG5cbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSBcIi4vY2hhcmFjdGVyXCI7XG5cbmNvbnN0IEdhbWVDb250YWluZXIgPSAoeyBkaXNwYXRjaCB9KSA9PiB7XG4gIGNvbnN0IHN0YXRlID0gdXNlQ29udGV4dChTY29yZUNvbnRleHQpO1xuICBjb25zdCBbY2hhcmFjdGVycywgdXBkYXRlQ2hhcmFjdGVyc10gPSB1c2VTdGF0ZShjaGFyYWN0ZXJEYXRhKTtcbiAgY29uc3QgW3NlbGVjdGVkQ2hhcnMsIHNldFNlbGVjdGVkQ2hhcnNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IHNodWZmbGVDaGFyYWN0ZXJzID0gKCkgPT5cbiAgICB1cGRhdGVDaGFyYWN0ZXJzKGNoYXJhY3RlcnMuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBlID0+IHtcbiAgICBpZiAoc3RhdGUud2luIHx8IHN0YXRlLmxvc3MpIHtcbiAgICAgIGRpc3BhdGNoKFwicmVzZXRcIik7XG4gICAgfVxuICAgIGlmICghc2VsZWN0ZWRDaGFycy5pbmNsdWRlcyhlLnRhcmdldC5pZCkpIHtcbiAgICAgIHNldFNlbGVjdGVkQ2hhcnMoWy4uLnNlbGVjdGVkQ2hhcnMsIGUudGFyZ2V0LmlkXSk7XG4gICAgICBkaXNwYXRjaChcInNjb3JlKytcIik7XG4gICAgICBzdGF0ZS5zY29yZSA+PSBzdGF0ZS5oaWdoU2NvcmUgPyBkaXNwYXRjaChcInNldEhpZ2hcIikgOiBudWxsO1xuICAgICAgaWYgKHN0YXRlLnNjb3JlID09PSBjaGFyYWN0ZXJzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgZGlzcGF0Y2goXCJzZXRXaW5cIik7XG4gICAgICAgIHNldFNlbGVjdGVkQ2hhcnMoW10pO1xuICAgICAgfVxuICAgICAgc2h1ZmZsZUNoYXJhY3RlcnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGF0Y2goXCJzZXRMb3NzXCIpO1xuICAgICAgc2V0U2VsZWN0ZWRDaGFycyhbXSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2h1ZmZsZUNoYXJhY3RlcnMoKTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+XG4gICAgICAgIEdyZWV0aW5ncywgdHJhdmVsZXIuIENsaWNrIG9uIGVhY2ggY2hhcmFjdGVyIG9uY2UgdG8gZ2V0IGEgcG9pbnQsIGlmIHlvdVxuICAgICAgICBjbGljayB0aGUgc2FtZSBvbmUgdHdpY2UgeW91IGxvc2UhXG4gICAgICA8L2gyPlxuICAgICAge3N0YXRlLndpbiAmJiA8aDIgY2xhc3NOYW1lPVwid2luLXRleHRcIj5Zb3Ugd2luISBDb25ncmF0dWxhdGlvbnMhPC9oMj59XG4gICAgICB7c3RhdGUubG9zcyAmJiA8aDIgY2xhc3NOYW1lPVwibG9zcy10ZXh0XCI+WW91IGxvc2UhIFRyeSBhZ2Fpbi48L2gyPn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhci1jb250YWluZXJcIj5cbiAgICAgICAge2NoYXJhY3RlcnMubWFwKCh7IGlkLCBuYW1lLCBmaWxlIH0pID0+IChcbiAgICAgICAgICA8Q2hhcmFjdGVyXG4gICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgIGZpbGU9e2ZpbGV9XG4gICAgICAgICAgICBjbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDIge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hhci1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb3NzLXRleHQsXG4gICAgICAgIC53aW4tdGV4dCB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lQ29udGFpbmVyO1xuIl19 */\n/*@ sourceURL=/home/cody/code/github/lotr-clicker/components/gameContainer.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (GameContainer);

/***/ })

})
//# sourceMappingURL=index.js.dd5ba0b13c96fff50cb3.hot-update.js.map