webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./components/header.tsx");
/* harmony import */ var _components_gameContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/gameContainer */ "./components/gameContainer.tsx");
var _jsxFileName = "/home/cody/code/github/lotr-clicker/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Home = function Home() {
  var ScoreContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({
    highScore: 0,
    score: 0,
    win: false
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    highScore: 0,
    score: 0,
    win: false
  }),
      state = _useState[0],
      setState = _useState[1];

  return __jsx("div", {
    className: "jsx-3548604042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-3548604042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "LotR Clicker"), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png",
    className: "jsx-3548604042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png",
    className: "jsx-3548604042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png",
    className: "jsx-3548604042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("link", {
    rel: "manifest",
    href: "/site.webmanifest",
    className: "jsx-3548604042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), __jsx(ScoreContext.Provider, {
    value: state,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx(_components_gameContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setState: setState,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3548604042",
    __self: this
  }, "body{margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZHkvY29kZS9naXRodWIvbG90ci1jbGlja2VyL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Q3lCLEFBR3lCLGNBQ2hCIiwiZmlsZSI6Ii9ob21lL2NvZHkvY29kZS9naXRodWIvbG90ci1jbGlja2VyL3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcbmltcG9ydCBHYW1lQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWVDb250YWluZXJcIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgU2NvcmVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gICAgaGlnaFNjb3JlOiAwLFxuICAgIHNjb3JlOiAwLFxuICAgIHdpbjogZmFsc2VcbiAgfSk7XG5cbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgaGlnaFNjb3JlOiAwLFxuICAgIHNjb3JlOiAwLFxuICAgIHdpbjogZmFsc2VcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Mb3RSIENsaWNrZXI8L3RpdGxlPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIlxuICAgICAgICAgIHNpemVzPVwiMTgweDE4MFwiXG4gICAgICAgICAgaHJlZj1cIi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiaWNvblwiXG4gICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgICAgc2l6ZXM9XCIzMngzMlwiXG4gICAgICAgICAgaHJlZj1cIi9mYXZpY29uLTMyeDMyLnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiaWNvblwiXG4gICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgICAgc2l6ZXM9XCIxNngxNlwiXG4gICAgICAgICAgaHJlZj1cIi9mYXZpY29uLTE2eDE2LnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9zaXRlLndlYm1hbmlmZXN0XCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxTY29yZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT5cbiAgICAgICAgPEhlYWRlciAvPlxuXG4gICAgICAgIDxHYW1lQ29udGFpbmVyIHNldFN0YXRlPXtzZXRTdGF0ZX0gLz5cbiAgICAgIDwvU2NvcmVDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/home/cody/code/github/lotr-clicker/pages/index.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.79cd780a9c5184975a6a.hot-update.js.map