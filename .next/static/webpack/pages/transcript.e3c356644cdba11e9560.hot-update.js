webpackHotUpdate_N_E("pages/transcript",{

/***/ "./components/Transcript/index.js":
/*!****************************************!*\
  !*** ./components/Transcript/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AddFilesBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddFilesBtn */ \"./components/Transcript/AddFilesBtn.js\");\n/* harmony import */ var _AddFiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddFiles */ \"./components/Transcript/AddFiles.js\");\n/* harmony import */ var _TranscriptionSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TranscriptionSettings */ \"./components/Transcript/TranscriptionSettings.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/bilal/dev/Scribbbe/components/Transcript/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // import components\n\n\n\n\n\nvar TranscriptContainer = function TranscriptContainer() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      hideAddFileBtn = _useState[0],\n      setHideFileBtn = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      hideAddFiles = _useState2[0],\n      setHideFiles = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      hideTranscriptionSettings = _useState3[0],\n      setTranscriptionSettings = _useState3[1];\n\n  var showAddFileBtn = function showAddFileBtn() {\n    setHideFileBtn(false);\n  };\n\n  var showTranscript = function showTranscript() {\n    setHideFiles(true);\n    setTranscriptionSettings(false);\n  };\n\n  var showTranscriptionSettings = function showTranscriptionSettings() {\n    setTranscriptionSettings(true);\n    setHideFiles(false);\n  };\n\n  var Close = function Close() {\n    setTranscriptionSettings(false);\n    setHideFiles(true);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"transcript-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, __jsx(_AddFilesBtn__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    showTranscript: showTranscript,\n    hideAddFileBtn: hideAddFileBtn,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }), __jsx(_AddFiles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    hideAddFilesBtn: hideAddFiles,\n    showTranscriptionSettings: showTranscriptionSettings,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }), __jsx(_TranscriptionSettings__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    hideTranscriptionSettings: hideTranscriptionSettings,\n    Close: Close,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(TranscriptContainer, \"1YxvH15k/g7mCGwY1FPXyQ1hr74=\");\n\n_c = TranscriptContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TranscriptContainer);\n\nvar _c;\n\n$RefreshReg$(_c, \"TranscriptContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UcmFuc2NyaXB0L2luZGV4LmpzPzBjN2QiXSwibmFtZXMiOlsiVHJhbnNjcmlwdENvbnRhaW5lciIsInVzZVN0YXRlIiwiaGlkZUFkZEZpbGVCdG4iLCJzZXRIaWRlRmlsZUJ0biIsImhpZGVBZGRGaWxlcyIsInNldEhpZGVGaWxlcyIsImhpZGVUcmFuc2NyaXB0aW9uU2V0dGluZ3MiLCJzZXRUcmFuc2NyaXB0aW9uU2V0dGluZ3MiLCJzaG93QWRkRmlsZUJ0biIsInNob3dUcmFuc2NyaXB0Iiwic2hvd1RyYW5zY3JpcHRpb25TZXR0aW5ncyIsIkNsb3NlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztDQUVBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFBQTs7QUFBQSxrQkFDU0Msc0RBQVEsQ0FBQyxJQUFELENBRGpCO0FBQUEsTUFDekJDLGNBRHlCO0FBQUEsTUFDVEMsY0FEUzs7QUFBQSxtQkFFS0Ysc0RBQVEsQ0FBQyxLQUFELENBRmI7QUFBQSxNQUV6QkcsWUFGeUI7QUFBQSxNQUVYQyxZQUZXOztBQUFBLG1CQUc4Qkosc0RBQVEsQ0FBQyxLQUFELENBSHRDO0FBQUEsTUFHekJLLHlCQUh5QjtBQUFBLE1BR0VDLHdCQUhGOztBQUtoQyxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0JMLGtCQUFjLENBQUUsS0FBRixDQUFkO0FBQ0QsR0FGRDs7QUFJQSxNQUFNTSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0JKLGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0FFLDRCQUF3QixDQUFDLEtBQUQsQ0FBeEI7QUFDRCxHQUhEOztBQUlBLE1BQU1HLHlCQUF5QixHQUFHLFNBQTVCQSx5QkFBNEIsR0FBTTtBQUN0Q0gsNEJBQXdCLENBQUMsSUFBRCxDQUF4QjtBQUNBRixnQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNELEdBSEQ7O0FBSUEsTUFBTU0sS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNsQkosNEJBQXdCLENBQUMsS0FBRCxDQUF4QjtBQUNBRixnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNELEdBSEQ7O0FBS0EsU0FDRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUNFLGtCQUFjLEVBQUVJLGNBRGxCO0FBRUUsa0JBQWMsRUFBRVAsY0FGbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBS0UsTUFBQyxpREFBRDtBQUNFLG1CQUFlLEVBQUVFLFlBRG5CO0FBRUUsNkJBQXlCLEVBQUVNLHlCQUY3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFTRSxNQUFDLDhEQUFEO0FBQ0UsNkJBQXlCLEVBQUVKLHlCQUQ3QjtBQUVFLFNBQUssRUFBRUssS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsQ0FERixDQURGO0FBa0JELENBeENEOztHQUFNWCxtQjs7S0FBQUEsbUI7QUEwQ1NBLGtGQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UcmFuc2NyaXB0L2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBpbXBvcnQgY29tcG9uZW50c1xuaW1wb3J0IEFkZEZpbGVzQnRuIGZyb20gXCIuL0FkZEZpbGVzQnRuXCI7XG5pbXBvcnQgQWRkRmlsZXMgZnJvbSBcIi4vQWRkRmlsZXNcIjtcbmltcG9ydCBUcmFuc2NyaXB0aW9uU2V0dGluZ3MgZnJvbSBcIi4vVHJhbnNjcmlwdGlvblNldHRpbmdzXCI7XG5cbmNvbnN0IFRyYW5zY3JpcHRDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtoaWRlQWRkRmlsZUJ0biwgc2V0SGlkZUZpbGVCdG5dID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtoaWRlQWRkRmlsZXMsIHNldEhpZGVGaWxlc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtoaWRlVHJhbnNjcmlwdGlvblNldHRpbmdzLCBzZXRUcmFuc2NyaXB0aW9uU2V0dGluZ3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHNob3dBZGRGaWxlQnRuID0gKCkgPT4ge1xuICAgIHNldEhpZGVGaWxlQnRuIChmYWxzZSlcbiAgfTtcblxuICBjb25zdCBzaG93VHJhbnNjcmlwdCA9ICgpID0+IHtcbiAgICBzZXRIaWRlRmlsZXModHJ1ZSk7XG4gICAgc2V0VHJhbnNjcmlwdGlvblNldHRpbmdzKGZhbHNlKTtcbiAgfTtcbiAgY29uc3Qgc2hvd1RyYW5zY3JpcHRpb25TZXR0aW5ncyA9ICgpID0+IHtcbiAgICBzZXRUcmFuc2NyaXB0aW9uU2V0dGluZ3ModHJ1ZSk7XG4gICAgc2V0SGlkZUZpbGVzKGZhbHNlKTtcbiAgfTtcbiAgY29uc3QgQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0VHJhbnNjcmlwdGlvblNldHRpbmdzKGZhbHNlKTtcbiAgICBzZXRIaWRlRmlsZXModHJ1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYW5zY3JpcHQtY29udGFpbmVyXCI+XG4gICAgICAgIDxBZGRGaWxlc0J0blxuICAgICAgICAgIHNob3dUcmFuc2NyaXB0PXtzaG93VHJhbnNjcmlwdH1cbiAgICAgICAgICBoaWRlQWRkRmlsZUJ0bj17aGlkZUFkZEZpbGVCdG59XG4gICAgICAgIC8+XG4gICAgICAgIDxBZGRGaWxlc1xuICAgICAgICAgIGhpZGVBZGRGaWxlc0J0bj17aGlkZUFkZEZpbGVzfVxuICAgICAgICAgIHNob3dUcmFuc2NyaXB0aW9uU2V0dGluZ3M9e3Nob3dUcmFuc2NyaXB0aW9uU2V0dGluZ3N9XG4gICAgICAgIC8+XG4gICAgICAgIDxUcmFuc2NyaXB0aW9uU2V0dGluZ3NcbiAgICAgICAgICBoaWRlVHJhbnNjcmlwdGlvblNldHRpbmdzPXtoaWRlVHJhbnNjcmlwdGlvblNldHRpbmdzfVxuICAgICAgICAgIENsb3NlPXtDbG9zZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2NyaXB0Q29udGFpbmVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Transcript/index.js\n");

/***/ })

})