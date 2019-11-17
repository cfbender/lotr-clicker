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






function reducer(state, action) {
  switch (action) {
    case "score++":
      return {
        score: state.score + 1,
        highScore: state.highScore,
        win: state.win,
        loss: state.loss
      };

    case "setHigh":
      return {
        score: state.score,
        highScore: state.score,
        win: state.win,
        loss: state.loss
      };

    case "setWin":
      return {
        score: 0,
        highScore: state.score,
        win: true,
        loss: false
      };

    case "reset":
      return {
        highScore: state.highScore,
        vscore: 0,
        win: false,
        loss: false
      };

    case "setLoss":
      return {
        score: 0,
        highScore: state.highScore,
        win: false,
        loss: true
      };

    default:
      throw new Error("Action ".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(action), " not available in reducer"));
  }
}

var Home = function Home() {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(reducer, {
    highScore: 0,
    score: 0,
    win: false,
    loss: false
  }),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  return __jsx("div", {
    className: "jsx-3548604042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-3548604042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "LotR Clicker"), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png",
    className: "jsx-3548604042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
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
      lineNumber: 53
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
      lineNumber: 59
    },
    __self: this
  }), __jsx("link", {
    rel: "manifest",
    href: "/site.webmanifest",
    className: "jsx-3548604042",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })), __jsx(_lib_ScoreContext__WEBPACK_IMPORTED_MODULE_6__["ScoreContext"].Provider, {
    value: state,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx(_components_gameContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    dispatch: dispatch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3548604042",
    __self: this
  }, "body{margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZHkvY29kZS9naXRodWIvbG90ci1jbGlja2VyL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RXlCLEFBR3lCLGNBQ2hCIiwiZmlsZSI6Ii9ob21lL2NvZHkvY29kZS9naXRodWIvbG90ci1jbGlja2VyL3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IEdhbWVDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lclwiO1xuaW1wb3J0IHsgU2NvcmVDb250ZXh0IH0gZnJvbSBcIi4uL2xpYi9TY29yZUNvbnRleHRcIjtcblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgY2FzZSBcInNjb3JlKytcIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNjb3JlOiBzdGF0ZS5zY29yZSArIDEsXG4gICAgICAgIGhpZ2hTY29yZTogc3RhdGUuaGlnaFNjb3JlLFxuICAgICAgICB3aW46IHN0YXRlLndpbixcbiAgICAgICAgbG9zczogc3RhdGUubG9zc1xuICAgICAgfTtcbiAgICBjYXNlIFwic2V0SGlnaFwiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2NvcmU6IHN0YXRlLnNjb3JlLFxuICAgICAgICBoaWdoU2NvcmU6IHN0YXRlLnNjb3JlLFxuICAgICAgICB3aW46IHN0YXRlLndpbixcbiAgICAgICAgbG9zczogc3RhdGUubG9zc1xuICAgICAgfTtcbiAgICBjYXNlIFwic2V0V2luXCI6XG4gICAgICByZXR1cm4geyBzY29yZTogMCwgaGlnaFNjb3JlOiBzdGF0ZS5zY29yZSwgd2luOiB0cnVlLCBsb3NzOiBmYWxzZSB9O1xuICAgIGNhc2UgXCJyZXNldFwiOlxuICAgICAgcmV0dXJuIHsgaGlnaFNjb3JlOiBzdGF0ZS5oaWdoU2NvcmUsIHZzY29yZTogMCwgd2luOiBmYWxzZSwgbG9zczogZmFsc2UgfTtcbiAgICBjYXNlIFwic2V0TG9zc1wiOlxuICAgICAgcmV0dXJuIHsgc2NvcmU6IDAsIGhpZ2hTY29yZTogc3RhdGUuaGlnaFNjb3JlLCB3aW46IGZhbHNlLCBsb3NzOiB0cnVlIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEFjdGlvbiAke0pTT04uc3RyaW5naWZ5KGFjdGlvbil9IG5vdCBhdmFpbGFibGUgaW4gcmVkdWNlcmBcbiAgICAgICk7XG4gIH1cbn1cblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIHtcbiAgICBoaWdoU2NvcmU6IDAsXG4gICAgc2NvcmU6IDAsXG4gICAgd2luOiBmYWxzZSxcbiAgICBsb3NzOiBmYWxzZVxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkxvdFIgQ2xpY2tlcjwvdGl0bGU+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiXG4gICAgICAgICAgc2l6ZXM9XCIxODB4MTgwXCJcbiAgICAgICAgICBocmVmPVwiL2FwcGxlLXRvdWNoLWljb24ucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICBzaXplcz1cIjMyeDMyXCJcbiAgICAgICAgICBocmVmPVwiL2Zhdmljb24tMzJ4MzIucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICBzaXplcz1cIjE2eDE2XCJcbiAgICAgICAgICBocmVmPVwiL2Zhdmljb24tMTZ4MTYucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL3NpdGUud2VibWFuaWZlc3RcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFNjb3JlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxuICAgICAgICA8SGVhZGVyIC8+XG5cbiAgICAgICAgPEdhbWVDb250YWluZXIgZGlzcGF0Y2g9e2Rpc3BhdGNofSAvPlxuICAgICAgPC9TY29yZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/home/cody/code/github/lotr-clicker/pages/index.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.d3baee10f275259d5cfb.hot-update.js.map