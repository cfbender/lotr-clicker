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

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(function (state, action) {
    switch (action.type) {
      case "score++":
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
      lineNumber: 38
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-3548604042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "LotR Clicker"), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png",
    className: "jsx-3548604042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
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
      lineNumber: 46
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
      lineNumber: 52
    },
    __self: this
  }), __jsx("link", {
    rel: "manifest",
    href: "/site.webmanifest",
    className: "jsx-3548604042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })), __jsx(ScoreContext.Provider, {
    value: state,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx(_components_gameContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    dispatch: dispatch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3548604042",
    __self: this
  }, "body{margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZHkvY29kZS9naXRodWIvbG90ci1jbGlja2VyL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRXlCLEFBR3lCLGNBQ2hCIiwiZmlsZSI6Ii9ob21lL2NvZHkvY29kZS9naXRodWIvbG90ci1jbGlja2VyL3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IEdhbWVDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lclwiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBTY29yZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcbiAgICBoaWdoU2NvcmU6IDAsXG4gICAgc2NvcmU6IDAsXG4gICAgd2luOiBmYWxzZVxuICB9KTtcblxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoXG4gICAgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcInNjb3JlKytcIjpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2NvcmU6IHN0YXRlLnNjb3JlICsgMSxcbiAgICAgICAgICAgIGhpZ2hTY29yZTogc3RhdGUuaGlnaFNjb3JlLFxuICAgICAgICAgICAgd2luOiBzdGF0ZS53aW5cbiAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFwic2V0SGlnaFwiOlxuICAgICAgICAgIHJldHVybiB7IHNjb3JlOiBzdGF0ZS5zY29yZSwgaGlnaFNjb3JlOiBzdGF0ZS5zY29yZSwgd2luOiBzdGF0ZS53aW4gfTtcbiAgICAgICAgY2FzZSBcInNldFdpblwiOlxuICAgICAgICAgIHJldHVybiB7IHNjb3JlOiAwLCBoaWdoU2NvcmU6IHN0YXRlLnNjb3JlLCB3aW46IHRydWUgfTtcbiAgICAgICAgY2FzZSBcInNldExvc3NcIjpcbiAgICAgICAgICByZXR1cm4geyBzY29yZTogMCwgaGlnaFNjb3JlOiBzdGF0ZS5oaWdoU2NvcmUsIHdpbjogZmFsc2UgfTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGhpZ2hTY29yZTogMCxcbiAgICAgIHNjb3JlOiAwLFxuICAgICAgd2luOiBmYWxzZVxuICAgIH1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkxvdFIgQ2xpY2tlcjwvdGl0bGU+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiXG4gICAgICAgICAgc2l6ZXM9XCIxODB4MTgwXCJcbiAgICAgICAgICBocmVmPVwiL2FwcGxlLXRvdWNoLWljb24ucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICBzaXplcz1cIjMyeDMyXCJcbiAgICAgICAgICBocmVmPVwiL2Zhdmljb24tMzJ4MzIucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICBzaXplcz1cIjE2eDE2XCJcbiAgICAgICAgICBocmVmPVwiL2Zhdmljb24tMTZ4MTYucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL3NpdGUud2VibWFuaWZlc3RcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFNjb3JlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxuICAgICAgICA8SGVhZGVyIC8+XG5cbiAgICAgICAgPEdhbWVDb250YWluZXIgZGlzcGF0Y2g9e2Rpc3BhdGNofSAvPlxuICAgICAgPC9TY29yZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/home/cody/code/github/lotr-clicker/pages/index.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.1b7baa4a6734ea982f9e.hot-update.js.map