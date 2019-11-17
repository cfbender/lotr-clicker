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
    console.log(state.score, characters.length);
    console.log(state.score == characters.length);

    if (!selectedChars.includes(e.target.id)) {
      setSelectedChars([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(selectedChars), [e.target.id]));
      dispatch("score++");
      state.score >= state.highScore ? dispatch("setHigh") : null;

      if (state.score === characters.length) {
        console.log("in block");
        dispatch("setWin");
        setTimeout(function () {
          return dispatch("setLoss");
        }, 2000);
        setSelectedChars([]);
      }

      shuffleCharacters();
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    shuffleCharacters();
  }, []);
  return __jsx("div", {
    className: "jsx-2460390408",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-2460390408",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Greetings, traveler. Click on each character once to get a point, if you click the same one twice you lose!"), state.win && __jsx("h2", {
    className: "jsx-2460390408",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "You win! Congratulations!"), __jsx("div", {
    className: "jsx-2460390408" + " " + "char-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
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
        lineNumber: 45
      },
      __self: this
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2460390408",
    __self: this
  }, "h2.jsx-2460390408{font-family:sans-serif;font-weight:lighter;font-size:18px;color:#666;text-align:center;}.char-container.jsx-2460390408{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZHkvY29kZS9naXRodWIvbG90ci1jbGlja2VyL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURrQixBQUdrQyxBQVFWLHVCQVBPLG9CQUNMLGVBQ0osV0FDTyxLQUtDLGFBSnJCLHdEQUt5QixtR0FDekIiLCJmaWxlIjoiL2hvbWUvY29keS9jb2RlL2dpdGh1Yi9sb3RyLWNsaWNrZXIvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTY29yZUNvbnRleHQgfSBmcm9tIFwiLi4vbGliL1Njb3JlQ29udGV4dFwiO1xuaW1wb3J0IGNoYXJhY3RlckRhdGEgZnJvbSBcIi4uL3B1YmxpYy9jaGFyYWN0ZXJzL2NoYXJhY3RlcnMuanNvblwiO1xuXG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gXCIuL2NoYXJhY3RlclwiO1xuXG5jb25zdCBHYW1lQ29udGFpbmVyID0gKHsgZGlzcGF0Y2ggfSkgPT4ge1xuICBjb25zdCBzdGF0ZSA9IHVzZUNvbnRleHQoU2NvcmVDb250ZXh0KTtcbiAgY29uc3QgW2NoYXJhY3RlcnMsIHVwZGF0ZUNoYXJhY3RlcnNdID0gdXNlU3RhdGUoY2hhcmFjdGVyRGF0YSk7XG4gIGNvbnN0IFtzZWxlY3RlZENoYXJzLCBzZXRTZWxlY3RlZENoYXJzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBzaHVmZmxlQ2hhcmFjdGVycyA9ICgpID0+XG4gICAgdXBkYXRlQ2hhcmFjdGVycyhjaGFyYWN0ZXJzLnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSkpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gZSA9PiB7XG4gICAgY29uc29sZS5sb2coc3RhdGUuc2NvcmUsIGNoYXJhY3RlcnMubGVuZ3RoKTtcbiAgICBjb25zb2xlLmxvZyhzdGF0ZS5zY29yZSA9PSBjaGFyYWN0ZXJzLmxlbmd0aCk7XG4gICAgaWYgKCFzZWxlY3RlZENoYXJzLmluY2x1ZGVzKGUudGFyZ2V0LmlkKSkge1xuICAgICAgc2V0U2VsZWN0ZWRDaGFycyhbLi4uc2VsZWN0ZWRDaGFycywgZS50YXJnZXQuaWRdKTtcbiAgICAgIGRpc3BhdGNoKFwic2NvcmUrK1wiKTtcbiAgICAgIHN0YXRlLnNjb3JlID49IHN0YXRlLmhpZ2hTY29yZSA/IGRpc3BhdGNoKFwic2V0SGlnaFwiKSA6IG51bGw7XG4gICAgICBpZiAoc3RhdGUuc2NvcmUgPT09IGNoYXJhY3RlcnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW4gYmxvY2tcIik7XG4gICAgICAgIGRpc3BhdGNoKFwic2V0V2luXCIpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRpc3BhdGNoKFwic2V0TG9zc1wiKSwgMjAwMCk7XG4gICAgICAgIHNldFNlbGVjdGVkQ2hhcnMoW10pO1xuICAgICAgfVxuXG4gICAgICBzaHVmZmxlQ2hhcmFjdGVycygpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNodWZmbGVDaGFyYWN0ZXJzKCk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgyPlxuICAgICAgICBHcmVldGluZ3MsIHRyYXZlbGVyLiBDbGljayBvbiBlYWNoIGNoYXJhY3RlciBvbmNlIHRvIGdldCBhIHBvaW50LCBpZiB5b3VcbiAgICAgICAgY2xpY2sgdGhlIHNhbWUgb25lIHR3aWNlIHlvdSBsb3NlIVxuICAgICAgPC9oMj5cbiAgICAgIHtzdGF0ZS53aW4gJiYgPGgyPllvdSB3aW4hIENvbmdyYXR1bGF0aW9ucyE8L2gyPn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhci1jb250YWluZXJcIj5cbiAgICAgICAge2NoYXJhY3RlcnMubWFwKCh7IGlkLCBuYW1lLCBmaWxlIH0pID0+IChcbiAgICAgICAgICA8Q2hhcmFjdGVyXG4gICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgIGZpbGU9e2ZpbGV9XG4gICAgICAgICAgICBjbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDIge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hhci1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZUNvbnRhaW5lcjtcbiJdfQ== */\n/*@ sourceURL=/home/cody/code/github/lotr-clicker/components/gameContainer.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (GameContainer);

/***/ })

})
//# sourceMappingURL=index.js.21b30652e135a51c707b.hot-update.js.map