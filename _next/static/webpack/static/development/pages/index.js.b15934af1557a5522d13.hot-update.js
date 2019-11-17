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
    className: "jsx-462082947",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-462082947" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "LotR Clicker"), __jsx("p", {
    className: "jsx-462082947",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Score: ", state.score, " | High Score: ", state.highScore), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "462082947",
    __self: this
  }, "@import url(\"https://fonts.googleapis.com/css?family=Forum&display=swap\");nav.jsx-462082947{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background-color:#5d7c53;width:100%;}.title.jsx-462082947{color:white;font-size:42px;padding:2rem;margin:0px 0px 50px 0px;font-family:\"Forum\",cursive;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZHkvY29kZS9naXRodWIvbG90ci1jbGlja2VyL2NvbXBvbmVudHMvaGVhZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZa0IsQUFFa0YsQUFFMUQsQUFPRCxZQUNHLGVBQ0YsYUFDVyx3QkFDSyxVQVZDLGtCQVdoQyxpR0FUMkIseUJBQ2QsV0FDYiIsImZpbGUiOiIvaG9tZS9jb2R5L2NvZGUvZ2l0aHViL2xvdHItY2xpY2tlci9jb21wb25lbnRzL2hlYWRlci50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2NvcmVDb250ZXh0IH0gZnJvbSBcIi4uL2xpYi9TY29yZUNvbnRleHRcIjtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBzdGF0ZSA9IHVzZUNvbnRleHQoU2NvcmVDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxuYXY+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj5Mb3RSIENsaWNrZXI8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIFNjb3JlOiB7c3RhdGUuc2NvcmV9IHwgSGlnaCBTY29yZToge3N0YXRlLmhpZ2hTY29yZX1cbiAgICAgIDwvcD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Rm9ydW0mZGlzcGxheT1zd2FwXCIpO1xuICAgICAgICBuYXYge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVkN2M1MztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBmb250LXNpemU6IDQycHg7XG4gICAgICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgICAgICBtYXJnaW46IDBweCAwcHggNTBweCAwcHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9ydW1cIiwgY3Vyc2l2ZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */\n/*@ sourceURL=/home/cody/code/github/lotr-clicker/components/header.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.b15934af1557a5522d13.hot-update.js.map