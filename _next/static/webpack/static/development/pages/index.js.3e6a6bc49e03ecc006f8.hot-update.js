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
    className: "jsx-3889300938",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-3889300938" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "LotR Clicker"), __jsx("p", {
    className: "jsx-3889300938" + " " + "score",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Score: ", state.score, " ", __jsx("span", {
    className: "jsx-3889300938" + " " + "spacer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "|"), " High Score:", " ", state.highScore), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3889300938",
    __self: this
  }, "@import url(\"https://fonts.googleapis.com/css?family=Forum&display=swap\");nav.jsx-3889300938{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background-color:#5d7c53;height:5rem;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0px 0px 50px 0px;}.title.jsx-3889300938{color:white;font-size:42px;margin-left:2rem;font-family:\"Forum\",cursive;}.score.jsx-3889300938{color:white;font-size:22px;margin-right:2rem;font-family:\"Forum\",cursive;}.spacer.jsx-3889300938{font-size:26px;margin:0px 1rem 0px 1rem;}@media only screen and (max-width:600px){.title.jsx-3889300938{color:white;font-size:32px;margin-left:2rem;font-family:\"Forum\",cursive;}.score.jsx-3889300938{color:white;font-size:18px;margin-right:2rem;font-family:\"Forum\",cursive;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZHkvY29kZS9naXRodWIvbG90ci1jbGlja2VyL2NvbXBvbmVudHMvaGVhZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFha0IsQUFFa0YsQUFFMUQsQUFRRCxBQU1BLEFBTUcsQUFNRCxBQU1BLFlBdkJDLEFBTUEsQUFZRSxBQU1BLEdBWlEsWUFYUixBQU1DLEFBWUMsQUFNQyxhQVp0QixJQVgrQixBQWtCRSxDQVpGLEFBa0JFLDJCQXZCakMsQUFrQkUsQ0FaRixBQWtCRSxDQW5DOEIsbUhBQ0wseUJBQ2IsWUFDTyw2RkFDSyx3QkFDMUIiLCJmaWxlIjoiL2hvbWUvY29keS9jb2RlL2dpdGh1Yi9sb3RyLWNsaWNrZXIvY29tcG9uZW50cy9oZWFkZXIudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNjb3JlQ29udGV4dCB9IGZyb20gXCIuLi9saWIvU2NvcmVDb250ZXh0XCI7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3Qgc3RhdGUgPSB1c2VDb250ZXh0KFNjb3JlQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2PlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+TG90UiBDbGlja2VyPC9oMj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInNjb3JlXCI+XG4gICAgICAgIFNjb3JlOiB7c3RhdGUuc2NvcmV9IDxzcGFuIGNsYXNzTmFtZT1cInNwYWNlclwiPnw8L3NwYW4+IEhpZ2ggU2NvcmU6e1wiIFwifVxuICAgICAgICB7c3RhdGUuaGlnaFNjb3JlfVxuICAgICAgPC9wPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Gb3J1bSZkaXNwbGF5PXN3YXBcIik7XG4gICAgICAgIG5hdiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVkN2M1MztcbiAgICAgICAgICBoZWlnaHQ6IDVyZW07XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW46IDBweCAwcHggNTBweCAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvcnVtXCIsIGN1cnNpdmU7XG4gICAgICAgIH1cbiAgICAgICAgLnNjb3JlIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJGb3J1bVwiLCBjdXJzaXZlO1xuICAgICAgICB9XG4gICAgICAgIC5zcGFjZXIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICBtYXJnaW46IDBweCAxcmVtIDBweCAxcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvcnVtXCIsIGN1cnNpdmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zY29yZSB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJGb3J1bVwiLCBjdXJzaXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */\n/*@ sourceURL=/home/cody/code/github/lotr-clicker/components/header.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.3e6a6bc49e03ecc006f8.hot-update.js.map