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
    className: "jsx-2585484758",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-2585484758" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "LotR Clicker"), __jsx("p", {
    className: "jsx-2585484758" + " " + "score",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Score: ", state.score, " ", __jsx("span", {
    className: "jsx-2585484758" + " " + "spacer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "|"), " High Score:", " ", state.highScore), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2585484758",
    __self: this
  }, "@import url(\"https://fonts.googleapis.com/css?family=Forum&display=swap\");nav.jsx-2585484758{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background-color:#5d7c53;height:5rem;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0px 0px 50px 0px;}.title.jsx-2585484758{color:white;font-size:42px;margin-left:2rem;font-family:\"Forum\",cursive;}.score.jsx-2585484758{color:white;font-size:22px;margin-right:2rem;font-family:\"Forum\",cursive;}.spacer.jsx-2585484758{font-size:26px;margin:0px 1rem 0px 1rem;}@media only screen and (max-width:600px){.title.jsx-2585484758{color:white;font-size:32px;margin-left:2rem;font-family:\"Forum\",cursive;}.score.jsx-2585484758{color:white;font-size:14px;margin-right:2rem;font-family:\"Forum\",cursive;}.spacer.jsx-2585484758{display:block hidden;font-size:18px;margin:0px 1rem 0px 1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZHkvY29kZS9naXRodWIvbG90ci1jbGlja2VyL2NvbXBvbmVudHMvaGVhZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFha0IsQUFFa0YsQUFFMUQsQUFRRCxBQU1BLEFBTUcsQUFNRCxBQU1BLEFBTVMsWUE3QlIsQUFNQSxBQVlFLEFBTUEsR0FaUSxNQWtCUixNQTdCQSxBQU1DLEFBWUMsQUFNQyxTQU1PLElBbEI3QixJQVgrQixBQWtCRSxDQVpGLEFBa0JFLGdCQU0vQixXQTdCRixBQWtCRSxDQVpGLEFBa0JFLENBbkM4QixtSEFDTCx5QkFDYixZQUNPLDZGQUNLLHdCQUMxQiIsImZpbGUiOiIvaG9tZS9jb2R5L2NvZGUvZ2l0aHViL2xvdHItY2xpY2tlci9jb21wb25lbnRzL2hlYWRlci50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2NvcmVDb250ZXh0IH0gZnJvbSBcIi4uL2xpYi9TY29yZUNvbnRleHRcIjtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBzdGF0ZSA9IHVzZUNvbnRleHQoU2NvcmVDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxuYXY+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj5Mb3RSIENsaWNrZXI8L2gyPlxuICAgICAgPHAgY2xhc3NOYW1lPVwic2NvcmVcIj5cbiAgICAgICAgU2NvcmU6IHtzdGF0ZS5zY29yZX0gPHNwYW4gY2xhc3NOYW1lPVwic3BhY2VyXCI+fDwvc3Bhbj4gSGlnaCBTY29yZTp7XCIgXCJ9XG4gICAgICAgIHtzdGF0ZS5oaWdoU2NvcmV9XG4gICAgICA8L3A+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUZvcnVtJmRpc3BsYXk9c3dhcFwiKTtcbiAgICAgICAgbmF2IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWQ3YzUzO1xuICAgICAgICAgIGhlaWdodDogNXJlbTtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbjogMHB4IDBweCA1MHB4IDBweDtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBmb250LXNpemU6IDQycHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9ydW1cIiwgY3Vyc2l2ZTtcbiAgICAgICAgfVxuICAgICAgICAuc2NvcmUge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvcnVtXCIsIGN1cnNpdmU7XG4gICAgICAgIH1cbiAgICAgICAgLnNwYWNlciB7XG4gICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICAgIG1hcmdpbjogMHB4IDFyZW0gMHB4IDFyZW07XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9ydW1cIiwgY3Vyc2l2ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNjb3JlIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvcnVtXCIsIGN1cnNpdmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zcGFjZXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgaGlkZGVuO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggMXJlbSAwcHggMXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=/home/cody/code/github/lotr-clicker/components/header.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.3e011603e750762f97d2.hot-update.js.map