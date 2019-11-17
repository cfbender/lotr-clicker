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
    className: "jsx-3210726639",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-3210726639" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "LotR Clicker"), __jsx("p", {
    className: "jsx-3210726639" + " " + "score",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Score: ", state.score, " ", __jsx("span", {
    className: "jsx-3210726639" + " " + "spacer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "|"), " High Score:", " ", state.highScore), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3210726639",
    __self: this
  }, "@import url(\"https://fonts.googleapis.com/css?family=Forum&display=swap\");nav.jsx-3210726639{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background-color:#5d7c53;height:5rem;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0px 0px 50px 0px;}.title.jsx-3210726639{color:white;font-size:42px;margin-left:2rem;font-family:\"Forum\",cursive;}.score.jsx-3210726639{color:white;font-size:22px;margin-right:2rem;font-family:\"Forum\",cursive;}.spacer.jsx-3210726639{font-size:26px;margin:0px 1rem 0px 1rem;}@media only screen and (max-width:600px){.title.jsx-3210726639{color:white;font-size:32px;margin-left:2rem;font-family:\"Forum\",cursive;}.score.jsx-3210726639{color:white;font-size:18px;margin-right:2rem;font-family:\"Forum\",cursive;}.spacer.jsx-3210726639{font-size:18px;margin:0px 1rem 0px 1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZHkvY29kZS9naXRodWIvbG90ci1jbGlja2VyL2NvbXBvbmVudHMvaGVhZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFha0IsQUFFa0YsQUFFMUQsQUFRRCxBQU1BLEFBTUcsQUFNRCxBQU1BLEFBTUcsWUE3QkYsQUFNQSxBQVlFLEFBTUEsR0FaUSxBQWtCRSxZQTdCVixBQU1DLEFBWUMsQUFNQyxhQVp0QixBQWtCRSxJQTdCNkIsQUFrQkUsQ0FaRixBQWtCRSwyQkF2QmpDLEFBa0JFLENBWkYsQUFrQkUsQ0FuQzhCLG1IQUNMLHlCQUNiLFlBQ08sNkZBQ0ssd0JBQzFCIiwiZmlsZSI6Ii9ob21lL2NvZHkvY29kZS9naXRodWIvbG90ci1jbGlja2VyL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTY29yZUNvbnRleHQgfSBmcm9tIFwiLi4vbGliL1Njb3JlQ29udGV4dFwiO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXRlID0gdXNlQ29udGV4dChTY29yZUNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPkxvdFIgQ2xpY2tlcjwvaDI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJzY29yZVwiPlxuICAgICAgICBTY29yZToge3N0YXRlLnNjb3JlfSA8c3BhbiBjbGFzc05hbWU9XCJzcGFjZXJcIj58PC9zcGFuPiBIaWdoIFNjb3JlOntcIiBcIn1cbiAgICAgICAge3N0YXRlLmhpZ2hTY29yZX1cbiAgICAgIDwvcD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Rm9ydW0mZGlzcGxheT1zd2FwXCIpO1xuICAgICAgICBuYXYge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZDdjNTM7XG4gICAgICAgICAgaGVpZ2h0OiA1cmVtO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAwcHggMHB4IDUwcHggMHB4O1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJGb3J1bVwiLCBjdXJzaXZlO1xuICAgICAgICB9XG4gICAgICAgIC5zY29yZSB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9ydW1cIiwgY3Vyc2l2ZTtcbiAgICAgICAgfVxuICAgICAgICAuc3BhY2VyIHtcbiAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgbWFyZ2luOiAwcHggMXJlbSAwcHggMXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJGb3J1bVwiLCBjdXJzaXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2NvcmUge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9ydW1cIiwgY3Vyc2l2ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNwYWNlciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBtYXJnaW46IDBweCAxcmVtIDBweCAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */\n/*@ sourceURL=/home/cody/code/github/lotr-clicker/components/header.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.07558957e19d5e14debc.hot-update.js.map