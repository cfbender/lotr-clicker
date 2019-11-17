webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/header.tsx":
/*!*******************************!*\
  !*** ./components/header.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_ScoreContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/ScoreContext */ "./lib/ScoreContext.tsx");
var _jsxFileName = "/home/cody/code/github/lotr-clicker/components/header.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Header = function Header() {
  var state = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_lib_ScoreContext__WEBPACK_IMPORTED_MODULE_2__["ScoreContext"]);
  return __jsx("nav", {
    className: "jsx-2370476562",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-2370476562" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "LotR Clicker"), __jsx("p", {
    className: "jsx-2370476562",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Score: ", state.score, " | High Score: ", state.highScore), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2370476562",
    __self: this
  }, "@import url(\"https://fonts.googleapis.com/css?family=Forum&display=swap\");nav.jsx-2370476562{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background-color:#5d7c53;height:5rem;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0px 0px 50px 0px;}.title.jsx-2370476562{color:white;font-size:42px;margin-left:2rem;font-family:\"Forum\",cursive;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZHkvY29kZS9naXRodWIvbG90ci1jbGlja2VyL2NvbXBvbmVudHMvaGVhZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZa0IsQUFFa0YsQUFFMUQsQUFRRCxZQUNHLGVBQ0UsaUJBQ1ksNEJBQy9CLEVBWGdDLG1IQUNMLHlCQUNiLFlBQ08sNkZBQ0ssd0JBQzFCIiwiZmlsZSI6Ii9ob21lL2NvZHkvY29kZS9naXRodWIvbG90ci1jbGlja2VyL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTY29yZUNvbnRleHQgfSBmcm9tIFwiLi4vbGliL1Njb3JlQ29udGV4dFwiO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXRlID0gdXNlQ29udGV4dChTY29yZUNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPkxvdFIgQ2xpY2tlcjwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgU2NvcmU6IHtzdGF0ZS5zY29yZX0gfCBIaWdoIFNjb3JlOiB7c3RhdGUuaGlnaFNjb3JlfVxuICAgICAgPC9wPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Gb3J1bSZkaXNwbGF5PXN3YXBcIik7XG4gICAgICAgIG5hdiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVkN2M1MztcbiAgICAgICAgICBoZWlnaHQ6IDVyZW07XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW46IDBweCAwcHggNTBweCAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvcnVtXCIsIGN1cnNpdmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=/home/cody/code/github/lotr-clicker/components/header.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.df8827fd787b1eb0666c.hot-update.js.map