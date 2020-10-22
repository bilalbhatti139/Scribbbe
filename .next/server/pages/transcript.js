module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/transcript.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Transcript/AddFiles.js":
/*!*******************************************!*\
  !*** ./components/Transcript/AddFiles.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/bilal/dev/Scribbbe/components/Transcript/AddFiles.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // import components\n\nconst AddFilesBtn = ({\n  hideAddFilesBtn,\n  showTranscriptionSettings\n}) => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, hideAddFilesBtn && __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 11\n    }\n  }, \"I am component two\"), __jsx(\"button\", {\n    onClick: showTranscriptionSettings,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 11\n    }\n  }, \"Transcript\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddFilesBtn);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RyYW5zY3JpcHQvQWRkRmlsZXMuanM/Nzg4YiJdLCJuYW1lcyI6WyJBZGRGaWxlc0J0biIsImhpZGVBZGRGaWxlc0J0biIsInNob3dUcmFuc2NyaXB0aW9uU2V0dGluZ3MiXSwibWFwcGluZ3MiOiI7Ozs7O0NBRUE7O0FBRUEsTUFBTUEsV0FBVyxHQUFHLENBQUM7QUFBRUMsaUJBQUY7QUFBbUJDO0FBQW5CLENBQUQsS0FBb0Q7QUFDdEUsU0FDRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QsZUFBZSxJQUNkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLEVBRUU7QUFBUSxXQUFPLEVBQUVDLHlCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLENBRkosQ0FERjtBQVVELENBWEQ7O0FBYWVGLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UcmFuc2NyaXB0L0FkZEZpbGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIGltcG9ydCBjb21wb25lbnRzXG5cbmNvbnN0IEFkZEZpbGVzQnRuID0gKHsgaGlkZUFkZEZpbGVzQnRuLCBzaG93VHJhbnNjcmlwdGlvblNldHRpbmdzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICB7aGlkZUFkZEZpbGVzQnRuICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+SSBhbSBjb21wb25lbnQgdHdvPC9oMT5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dUcmFuc2NyaXB0aW9uU2V0dGluZ3N9PlRyYW5zY3JpcHQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRGaWxlc0J0bjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Transcript/AddFiles.js\n");

/***/ }),

/***/ "./components/Transcript/AddFilesBtn.js":
/*!**********************************************!*\
  !*** ./components/Transcript/AddFilesBtn.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/bilal/dev/Scribbbe/components/Transcript/AddFilesBtn.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // import components\n\nconst AddFilesBtn = ({\n  showTranscript\n}) => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(\"button\", {\n    onClick: showTranscript,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, \"Add files\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddFilesBtn);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RyYW5zY3JpcHQvQWRkRmlsZXNCdG4uanM/Y2ZiNyJdLCJuYW1lcyI6WyJBZGRGaWxlc0J0biIsInNob3dUcmFuc2NyaXB0Il0sIm1hcHBpbmdzIjoiOzs7OztDQUVBOztBQUVBLE1BQU1BLFdBQVcsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUF3QjtBQUMxQyxTQUNFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsV0FBTyxFQUFFQSxjQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBREY7QUFLRCxDQU5EOztBQVFlRCwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVHJhbnNjcmlwdC9BZGRGaWxlc0J0bi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBpbXBvcnQgY29tcG9uZW50c1xuXG5jb25zdCBBZGRGaWxlc0J0biA9ICh7IHNob3dUcmFuc2NyaXB0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dUcmFuc2NyaXB0fT5BZGQgZmlsZXM8L2J1dHRvbj5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkRmlsZXNCdG47XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Transcript/AddFilesBtn.js\n");

/***/ }),

/***/ "./components/Transcript/TranscriptionSettings.js":
/*!********************************************************!*\
  !*** ./components/Transcript/TranscriptionSettings.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/bilal/dev/Scribbbe/components/Transcript/TranscriptionSettings.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // import components\n\nconst TranscriptionSettings = ({\n  hideTranscriptionSettings,\n  Close\n}) => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, hideTranscriptionSettings && __jsx(\"div\", {\n    className: \"mt-5\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    onClick: Close,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 11\n    }\n  }, \"x\"), __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 11\n    }\n  }, \"I am component three\"), __jsx(\"button\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 11\n    }\n  }, \"Confirm\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TranscriptionSettings);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RyYW5zY3JpcHQvVHJhbnNjcmlwdGlvblNldHRpbmdzLmpzPzNkMjIiXSwibmFtZXMiOlsiVHJhbnNjcmlwdGlvblNldHRpbmdzIiwiaGlkZVRyYW5zY3JpcHRpb25TZXR0aW5ncyIsIkNsb3NlIl0sIm1hcHBpbmdzIjoiOzs7OztDQUVBOztBQUVBLE1BQU1BLHFCQUFxQixHQUFHLENBQUM7QUFBRUMsMkJBQUY7QUFBNkJDO0FBQTdCLENBQUQsS0FBMEM7QUFDdEUsU0FDRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QseUJBQXlCLElBQ3hCO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssV0FBTyxFQUFFQyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsQ0FGSixDQURGO0FBV0QsQ0FaRDs7QUFjZUYsb0ZBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1RyYW5zY3JpcHQvVHJhbnNjcmlwdGlvblNldHRpbmdzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIGltcG9ydCBjb21wb25lbnRzXG5cbmNvbnN0IFRyYW5zY3JpcHRpb25TZXR0aW5ncyA9ICh7IGhpZGVUcmFuc2NyaXB0aW9uU2V0dGluZ3MsIENsb3NlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICB7aGlkZVRyYW5zY3JpcHRpb25TZXR0aW5ncyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNVwiPlxuICAgICAgICAgIDxkaXYgb25DbGljaz17Q2xvc2V9Png8L2Rpdj5cbiAgICAgICAgICA8aDE+SSBhbSBjb21wb25lbnQgdGhyZWU8L2gxPlxuICAgICAgICAgIDxidXR0b24+Q29uZmlybTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zY3JpcHRpb25TZXR0aW5ncztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Transcript/TranscriptionSettings.js\n");

/***/ }),

/***/ "./components/Transcript/index.js":
/*!****************************************!*\
  !*** ./components/Transcript/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AddFilesBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddFilesBtn */ \"./components/Transcript/AddFilesBtn.js\");\n/* harmony import */ var _AddFiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddFiles */ \"./components/Transcript/AddFiles.js\");\n/* harmony import */ var _TranscriptionSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TranscriptionSettings */ \"./components/Transcript/TranscriptionSettings.js\");\nvar _jsxFileName = \"/home/bilal/dev/Scribbbe/components/Transcript/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // import components\n\n\n\n\n\nconst TranscriptContainer = () => {\n  const {\n    0: hideAddFilesBtn,\n    1: setHideFilesBtn\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    0: hideTranscriptionSettings,\n    1: setTranscriptionSettings\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  const showTranscript = () => {\n    setHideFilesBtn(true);\n    setTranscriptionSettings(false);\n  };\n\n  const showTranscriptionSettings = () => {\n    setTranscriptionSettings(true);\n    setHideFilesBtn(false);\n  };\n\n  const Close = () => {\n    setTranscriptionSettings(false);\n    setHideFilesBtn(true);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, __jsx(_AddFilesBtn__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    showTranscript: showTranscript,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }), __jsx(_AddFiles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    hideAddFilesBtn: hideAddFilesBtn,\n    showTranscriptionSettings: showTranscriptionSettings,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }), __jsx(_TranscriptionSettings__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    hideTranscriptionSettings: hideTranscriptionSettings,\n    Close: Close,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TranscriptContainer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RyYW5zY3JpcHQvaW5kZXguanM/MGM3ZCJdLCJuYW1lcyI6WyJUcmFuc2NyaXB0Q29udGFpbmVyIiwiaGlkZUFkZEZpbGVzQnRuIiwic2V0SGlkZUZpbGVzQnRuIiwidXNlU3RhdGUiLCJoaWRlVHJhbnNjcmlwdGlvblNldHRpbmdzIiwic2V0VHJhbnNjcmlwdGlvblNldHRpbmdzIiwic2hvd1RyYW5zY3JpcHQiLCJzaG93VHJhbnNjcmlwdGlvblNldHRpbmdzIiwiQ2xvc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0NBRUE7O0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLG1CQUFtQixHQUFHLE1BQU07QUFDaEMsUUFBTTtBQUFBLE9BQUNDLGVBQUQ7QUFBQSxPQUFrQkM7QUFBbEIsTUFBcUNDLHNEQUFRLENBQUMsS0FBRCxDQUFuRDtBQUNBLFFBQU07QUFBQSxPQUFDQyx5QkFBRDtBQUFBLE9BQTRCQztBQUE1QixNQUF3REYsc0RBQVEsQ0FBQyxLQUFELENBQXRFOztBQUVBLFFBQU1HLGNBQWMsR0FBRyxNQUFNO0FBQzNCSixtQkFBZSxDQUFDLElBQUQsQ0FBZjtBQUNBRyw0QkFBd0IsQ0FBQyxLQUFELENBQXhCO0FBQ0QsR0FIRDs7QUFJQSxRQUFNRSx5QkFBeUIsR0FBRyxNQUFNO0FBQ3RDRiw0QkFBd0IsQ0FBQyxJQUFELENBQXhCO0FBQ0FILG1CQUFlLENBQUMsS0FBRCxDQUFmO0FBQ0QsR0FIRDs7QUFJQSxRQUFNTSxLQUFLLEdBQUcsTUFBTTtBQUNsQkgsNEJBQXdCLENBQUMsS0FBRCxDQUF4QjtBQUNBSCxtQkFBZSxDQUFDLElBQUQsQ0FBZjtBQUNELEdBSEQ7O0FBS0EsU0FDRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFEO0FBQWEsa0JBQWMsRUFBRUksY0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxpREFBRDtBQUNFLG1CQUFlLEVBQUVMLGVBRG5CO0FBRUUsNkJBQXlCLEVBQUVNLHlCQUY3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFNRSxNQUFDLDhEQUFEO0FBQ0UsNkJBQXlCLEVBQUVILHlCQUQ3QjtBQUVFLFNBQUssRUFBRUksS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0FERjtBQWFELENBOUJEOztBQWdDZVIsa0ZBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1RyYW5zY3JpcHQvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIGltcG9ydCBjb21wb25lbnRzXG5pbXBvcnQgQWRkRmlsZXNCdG4gZnJvbSBcIi4vQWRkRmlsZXNCdG5cIjtcbmltcG9ydCBBZGRGaWxlcyBmcm9tIFwiLi9BZGRGaWxlc1wiO1xuaW1wb3J0IFRyYW5zY3JpcHRpb25TZXR0aW5ncyBmcm9tIFwiLi9UcmFuc2NyaXB0aW9uU2V0dGluZ3NcIjtcblxuY29uc3QgVHJhbnNjcmlwdENvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgW2hpZGVBZGRGaWxlc0J0biwgc2V0SGlkZUZpbGVzQnRuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2hpZGVUcmFuc2NyaXB0aW9uU2V0dGluZ3MsIHNldFRyYW5zY3JpcHRpb25TZXR0aW5nc10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgc2hvd1RyYW5zY3JpcHQgPSAoKSA9PiB7XG4gICAgc2V0SGlkZUZpbGVzQnRuKHRydWUpO1xuICAgIHNldFRyYW5zY3JpcHRpb25TZXR0aW5ncyhmYWxzZSk7XG4gIH07XG4gIGNvbnN0IHNob3dUcmFuc2NyaXB0aW9uU2V0dGluZ3MgPSAoKSA9PiB7XG4gICAgc2V0VHJhbnNjcmlwdGlvblNldHRpbmdzKHRydWUpO1xuICAgIHNldEhpZGVGaWxlc0J0bihmYWxzZSk7XG4gIH07XG4gIGNvbnN0IENsb3NlID0gKCkgPT4ge1xuICAgIHNldFRyYW5zY3JpcHRpb25TZXR0aW5ncyhmYWxzZSk7XG4gICAgc2V0SGlkZUZpbGVzQnRuKHRydWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPEFkZEZpbGVzQnRuIHNob3dUcmFuc2NyaXB0PXtzaG93VHJhbnNjcmlwdH0gLz5cbiAgICAgIDxBZGRGaWxlc1xuICAgICAgICBoaWRlQWRkRmlsZXNCdG49e2hpZGVBZGRGaWxlc0J0bn1cbiAgICAgICAgc2hvd1RyYW5zY3JpcHRpb25TZXR0aW5ncz17c2hvd1RyYW5zY3JpcHRpb25TZXR0aW5nc31cbiAgICAgIC8+XG4gICAgICA8VHJhbnNjcmlwdGlvblNldHRpbmdzXG4gICAgICAgIGhpZGVUcmFuc2NyaXB0aW9uU2V0dGluZ3M9e2hpZGVUcmFuc2NyaXB0aW9uU2V0dGluZ3N9XG4gICAgICAgIENsb3NlPXtDbG9zZX1cbiAgICAgIC8+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zY3JpcHRDb250YWluZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Transcript/index.js\n");

/***/ }),

/***/ "./pages/transcript.js":
/*!*****************************!*\
  !*** ./pages/transcript.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Transcript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Transcript */ \"./components/Transcript/index.js\");\nvar _jsxFileName = \"/home/bilal/dev/Scribbbe/pages/transcript.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // import components\n\n\n\nconst Transcript = () => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Transcript__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Transcript);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90cmFuc2NyaXB0LmpzP2RhMmQiXSwibmFtZXMiOlsiVHJhbnNjcmlwdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0NBRUE7O0FBQ0E7O0FBRUEsTUFBTUEsVUFBVSxHQUFHLE1BQU07QUFDdkIsU0FDRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGO0FBS0QsQ0FORDs7QUFRZUEseUVBQWYiLCJmaWxlIjoiLi9wYWdlcy90cmFuc2NyaXB0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIGltcG9ydCBjb21wb25lbnRzXG5pbXBvcnQgVHJhbnNjcmlwdENvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9UcmFuc2NyaXB0XCI7XG5cbmNvbnN0IFRyYW5zY3JpcHQgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPFRyYW5zY3JpcHRDb250YWluZXIgLz5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNjcmlwdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/transcript.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });