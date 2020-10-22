webpackHotUpdate_N_E("pages/transcript",{

/***/ "./components/Transcript/index.js":
/*!****************************************!*\
  !*** ./components/Transcript/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AddFilesBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddFilesBtn */ \"./components/Transcript/AddFilesBtn.js\");\n/* harmony import */ var _AddFiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddFiles */ \"./components/Transcript/AddFiles.js\");\n/* harmony import */ var _TranscriptionSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TranscriptionSettings */ \"./components/Transcript/TranscriptionSettings.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/bilal/dev/Scribbbe/components/Transcript/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // import components\n\n\n\n\n\nvar TranscriptContainer = function TranscriptContainer() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      hideAddFilesBtn = _useState[0],\n      setHideFilesBtn = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      hideTranscriptionSettings = _useState2[0],\n      setTranscriptionSettings = _useState2[1];\n\n  var showTranscript = function showTranscript() {\n    setHideFilesBtn(true);\n    setTranscriptionSettings(false);\n  };\n\n  var showTranscriptionSettings = function showTranscriptionSettings() {\n    setTranscriptionSettings(true);\n    setHideFilesBtn(false);\n  };\n\n  var Close = function Close() {\n    setTranscriptionSettings(false);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(_AddFilesBtn__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    showTranscript: showTranscript,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }), __jsx(_AddFiles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    hideAddFilesBtn: hideAddFilesBtn,\n    showTranscriptionSettings: showTranscriptionSettings,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }), __jsx(_TranscriptionSettings__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    hideTranscriptionSettings: hideTranscriptionSettings,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(TranscriptContainer, \"x2Ji8JARUplGE1+tm1HSIjqHqDo=\");\n\n_c = TranscriptContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TranscriptContainer);\n\nvar _c;\n\n$RefreshReg$(_c, \"TranscriptContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UcmFuc2NyaXB0L2luZGV4LmpzPzBjN2QiXSwibmFtZXMiOlsiVHJhbnNjcmlwdENvbnRhaW5lciIsInVzZVN0YXRlIiwiaGlkZUFkZEZpbGVzQnRuIiwic2V0SGlkZUZpbGVzQnRuIiwiaGlkZVRyYW5zY3JpcHRpb25TZXR0aW5ncyIsInNldFRyYW5zY3JpcHRpb25TZXR0aW5ncyIsInNob3dUcmFuc2NyaXB0Iiwic2hvd1RyYW5zY3JpcHRpb25TZXR0aW5ncyIsIkNsb3NlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztDQUVBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFBQTs7QUFBQSxrQkFDV0Msc0RBQVEsQ0FBQyxLQUFELENBRG5CO0FBQUEsTUFDekJDLGVBRHlCO0FBQUEsTUFDUkMsZUFEUTs7QUFBQSxtQkFFOEJGLHNEQUFRLENBQUMsS0FBRCxDQUZ0QztBQUFBLE1BRXpCRyx5QkFGeUI7QUFBQSxNQUVFQyx3QkFGRjs7QUFJaEMsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCSCxtQkFBZSxDQUFDLElBQUQsQ0FBZjtBQUNBRSw0QkFBd0IsQ0FBQyxLQUFELENBQXhCO0FBQ0QsR0FIRDs7QUFJQSxNQUFNRSx5QkFBeUIsR0FBRyxTQUE1QkEseUJBQTRCLEdBQU07QUFDdENGLDRCQUF3QixDQUFDLElBQUQsQ0FBeEI7QUFDQUYsbUJBQWUsQ0FBQyxLQUFELENBQWY7QUFDRCxHQUhEOztBQUlBLE1BQU1LLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFDbEJILDRCQUF3QixDQUFDLEtBQUQsQ0FBeEI7QUFDRCxHQUZEOztBQUlBLFNBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUFhLGtCQUFjLEVBQUVDLGNBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsaURBQUQ7QUFDRSxtQkFBZSxFQUFFSixlQURuQjtBQUVFLDZCQUF5QixFQUFFSyx5QkFGN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBTUUsTUFBQyw4REFBRDtBQUNFLDZCQUF5QixFQUFFSCx5QkFEN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBREY7QUFZRCxDQTVCRDs7R0FBTUosbUI7O0tBQUFBLG1CO0FBOEJTQSxrRkFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVHJhbnNjcmlwdC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuLy8gaW1wb3J0IGNvbXBvbmVudHNcbmltcG9ydCBBZGRGaWxlc0J0biBmcm9tIFwiLi9BZGRGaWxlc0J0blwiO1xuaW1wb3J0IEFkZEZpbGVzIGZyb20gXCIuL0FkZEZpbGVzXCI7XG5pbXBvcnQgVHJhbnNjcmlwdGlvblNldHRpbmdzIGZyb20gXCIuL1RyYW5zY3JpcHRpb25TZXR0aW5nc1wiO1xuXG5jb25zdCBUcmFuc2NyaXB0Q29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBbaGlkZUFkZEZpbGVzQnRuLCBzZXRIaWRlRmlsZXNCdG5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaGlkZVRyYW5zY3JpcHRpb25TZXR0aW5ncywgc2V0VHJhbnNjcmlwdGlvblNldHRpbmdzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBzaG93VHJhbnNjcmlwdCA9ICgpID0+IHtcbiAgICBzZXRIaWRlRmlsZXNCdG4odHJ1ZSk7XG4gICAgc2V0VHJhbnNjcmlwdGlvblNldHRpbmdzKGZhbHNlKTtcbiAgfTtcbiAgY29uc3Qgc2hvd1RyYW5zY3JpcHRpb25TZXR0aW5ncyA9ICgpID0+IHtcbiAgICBzZXRUcmFuc2NyaXB0aW9uU2V0dGluZ3ModHJ1ZSk7XG4gICAgc2V0SGlkZUZpbGVzQnRuKGZhbHNlKTtcbiAgfTtcbiAgY29uc3QgQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0VHJhbnNjcmlwdGlvblNldHRpbmdzKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxBZGRGaWxlc0J0biBzaG93VHJhbnNjcmlwdD17c2hvd1RyYW5zY3JpcHR9IC8+XG4gICAgICA8QWRkRmlsZXNcbiAgICAgICAgaGlkZUFkZEZpbGVzQnRuPXtoaWRlQWRkRmlsZXNCdG59XG4gICAgICAgIHNob3dUcmFuc2NyaXB0aW9uU2V0dGluZ3M9e3Nob3dUcmFuc2NyaXB0aW9uU2V0dGluZ3N9XG4gICAgICAvPlxuICAgICAgPFRyYW5zY3JpcHRpb25TZXR0aW5nc1xuICAgICAgICBoaWRlVHJhbnNjcmlwdGlvblNldHRpbmdzPXtoaWRlVHJhbnNjcmlwdGlvblNldHRpbmdzfVxuICAgICAgLz5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNjcmlwdENvbnRhaW5lcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Transcript/index.js\n");

/***/ })

})