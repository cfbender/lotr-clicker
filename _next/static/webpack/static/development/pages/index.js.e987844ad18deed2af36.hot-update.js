webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header */ "./components/header.tsx");
/* harmony import */ var _components_gameContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/gameContainer */ "./components/gameContainer.tsx");
/* harmony import */ var _lib_ScoreContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/ScoreContext */ "./lib/ScoreContext.tsx");

var _jsxFileName = "/home/cody/code/github/lotr-clicker/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var Home = function Home() {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(function (state, action) {
    console.log("action: ".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(action)));

    switch (action) {
      case "score++":
        console.log("In score++");
        return {
          score: state.score + 1,
          highScore: state.highScore,
          win: state.win
        };

      case "setHigh":
        return {
          score: state.score,
          highScore: state.score,
          win: state.win
        };

      case "setWin":
        return {
          score: 0,
          highScore: state.score,
          win: true
        };

      case "setLoss":
        return {
          score: 0,
          highScore: state.highScore,
          win: false
        };

      default:
        throw new Error("Action ".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(action), " not available in reducer"));
    }
  }, {
    highScore: 0,
    score: 0,
    win: false
  }),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  return __jsx("div", {
    className: "jsx-3548604042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-3548604042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "LotR Clicker"), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png",
    className: "jsx-3548604042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
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
      lineNumber: 47
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
      lineNumber: 53
    },
    __self: this
  }), __jsx("link", {
    rel: "manifest",
    href: "/site.webmanifest",
    className: "jsx-3548604042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })), __jsx(_lib_ScoreContext__WEBPACK_IMPORTED_MODULE_6__["ScoreContext"].Provider, {
    value: state,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), __jsx(_components_gameContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    dispatch: dispatch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3548604042",
    __self: this
  }, "body{margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZHkvY29kZS9naXRodWIvbG90ci1jbGlja2VyL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRXlCLEFBR3lCLGNBQ2hCIiwiZmlsZSI6Ii9ob21lL2NvZHkvY29kZS9naXRodWIvbG90ci1jbGlja2VyL3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IEdhbWVDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lclwiO1xuaW1wb3J0IHsgU2NvcmVDb250ZXh0IH0gZnJvbSBcIi4uL2xpYi9TY29yZUNvbnRleHRcIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKFxuICAgIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgYWN0aW9uOiAke0pTT04uc3RyaW5naWZ5KGFjdGlvbil9YCk7XG4gICAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgICBjYXNlIFwic2NvcmUrK1wiOlxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW4gc2NvcmUrK1wiKTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2NvcmU6IHN0YXRlLnNjb3JlICsgMSxcbiAgICAgICAgICAgIGhpZ2hTY29yZTogc3RhdGUuaGlnaFNjb3JlLFxuICAgICAgICAgICAgd2luOiBzdGF0ZS53aW5cbiAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFwic2V0SGlnaFwiOlxuICAgICAgICAgIHJldHVybiB7IHNjb3JlOiBzdGF0ZS5zY29yZSwgaGlnaFNjb3JlOiBzdGF0ZS5zY29yZSwgd2luOiBzdGF0ZS53aW4gfTtcbiAgICAgICAgY2FzZSBcInNldFdpblwiOlxuICAgICAgICAgIHJldHVybiB7IHNjb3JlOiAwLCBoaWdoU2NvcmU6IHN0YXRlLnNjb3JlLCB3aW46IHRydWUgfTtcbiAgICAgICAgY2FzZSBcInNldExvc3NcIjpcbiAgICAgICAgICByZXR1cm4geyBzY29yZTogMCwgaGlnaFNjb3JlOiBzdGF0ZS5oaWdoU2NvcmUsIHdpbjogZmFsc2UgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgQWN0aW9uICR7SlNPTi5zdHJpbmdpZnkoYWN0aW9uKX0gbm90IGF2YWlsYWJsZSBpbiByZWR1Y2VyYFxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBoaWdoU2NvcmU6IDAsXG4gICAgICBzY29yZTogMCxcbiAgICAgIHdpbjogZmFsc2VcbiAgICB9XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Mb3RSIENsaWNrZXI8L3RpdGxlPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIlxuICAgICAgICAgIHNpemVzPVwiMTgweDE4MFwiXG4gICAgICAgICAgaHJlZj1cIi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiaWNvblwiXG4gICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgICAgc2l6ZXM9XCIzMngzMlwiXG4gICAgICAgICAgaHJlZj1cIi9mYXZpY29uLTMyeDMyLnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiaWNvblwiXG4gICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgICAgc2l6ZXM9XCIxNngxNlwiXG4gICAgICAgICAgaHJlZj1cIi9mYXZpY29uLTE2eDE2LnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9zaXRlLndlYm1hbmlmZXN0XCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxTY29yZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT5cbiAgICAgICAgPEhlYWRlciAvPlxuXG4gICAgICAgIDxHYW1lQ29udGFpbmVyIGRpc3BhdGNoPXtkaXNwYXRjaH0gLz5cbiAgICAgIDwvU2NvcmVDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/home/cody/code/github/lotr-clicker/pages/index.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.e987844ad18deed2af36.hot-update.js.map