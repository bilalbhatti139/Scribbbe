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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/bilal/dev/Scribbbe/components/Transcript/AddFiles.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // import components\n\nconst AddFilesBtn = ({\n  hideAddFilesBtn,\n  showTranscriptionSettings\n}) => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, hideAddFilesBtn && __jsx(\"div\", {\n    className: \"add-file-container scale-in-top\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, __jsx(\"button\", {\n    className: \"upload-document\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 11\n    }\n  }, \"Add files \", __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 23\n    }\n  }, \"Supported formats: mp3, flac, wav\")), __jsx(\"div\", {\n    className: \"files-list\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"file\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 15\n    }\n  }, \"AntoineFaitDeLaTrompette.mp3\"), __jsx(\"img\", {\n    src: \"../../static/assets/images/delete.svg\",\n    className: \"img-fluid\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 15\n    }\n  })), __jsx(\"div\", {\n    className: \"file\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 15\n    }\n  }, \"AntoineFaitDeLaTrompette.mp3\"), __jsx(\"img\", {\n    src: \"../../static/assets/images/delete.svg\",\n    className: \"img-fluid\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 15\n    }\n  })), __jsx(\"div\", {\n    className: \"file\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 15\n    }\n  }, \"AntoineFaitDeLaTrompette.mp3\"), __jsx(\"img\", {\n    src: \"../../static/assets/images/delete.svg\",\n    className: \"img-fluid\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 15\n    }\n  }))), __jsx(\"button\", {\n    className: \"transcript-btn\",\n    onClick: showTranscriptionSettings,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }, \"Transcript\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddFilesBtn);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RyYW5zY3JpcHQvQWRkRmlsZXMuanM/Nzg4YiJdLCJuYW1lcyI6WyJBZGRGaWxlc0J0biIsImhpZGVBZGRGaWxlc0J0biIsInNob3dUcmFuc2NyaXB0aW9uU2V0dGluZ3MiXSwibWFwcGluZ3MiOiI7Ozs7O0NBRUE7O0FBRUEsTUFBTUEsV0FBVyxHQUFHLENBQUM7QUFBRUMsaUJBQUY7QUFBbUJDO0FBQW5CLENBQUQsS0FBb0Q7QUFDdEUsU0FDRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QsZUFBZSxJQUNkO0FBQUssYUFBUyxFQUFDLGlDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLGFBQVMsRUFBQyxpQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlDQURaLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQURGLEVBRUU7QUFDRSxPQUFHLEVBQUMsdUNBRE47QUFFRSxhQUFTLEVBQUMsV0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQVFFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBREYsRUFFRTtBQUNFLE9BQUcsRUFBQyx1Q0FETjtBQUVFLGFBQVMsRUFBQyxXQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQVJGLEVBZUU7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FERixFQUVFO0FBQ0UsT0FBRyxFQUFDLHVDQUROO0FBRUUsYUFBUyxFQUFDLFdBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBZkYsQ0FKRixFQTJCRTtBQUNFLGFBQVMsRUFBQyxnQkFEWjtBQUVFLFdBQU8sRUFBRUMseUJBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkEzQkYsQ0FGSixDQURGO0FBd0NELENBekNEOztBQTJDZUYsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1RyYW5zY3JpcHQvQWRkRmlsZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuLy8gaW1wb3J0IGNvbXBvbmVudHNcblxuY29uc3QgQWRkRmlsZXNCdG4gPSAoeyBoaWRlQWRkRmlsZXNCdG4sIHNob3dUcmFuc2NyaXB0aW9uU2V0dGluZ3MgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIHtoaWRlQWRkRmlsZXNCdG4gJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC1maWxlLWNvbnRhaW5lciBzY2FsZS1pbi10b3BcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInVwbG9hZC1kb2N1bWVudFwiPlxuICAgICAgICAgICAgQWRkIGZpbGVzIDxzcGFuPlN1cHBvcnRlZCBmb3JtYXRzOiBtcDMsIGZsYWMsIHdhdjwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGVzLWxpc3RcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZVwiPlxuICAgICAgICAgICAgICA8cD5BbnRvaW5lRmFpdERlTGFUcm9tcGV0dGUubXAzPC9wPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vc3RhdGljL2Fzc2V0cy9pbWFnZXMvZGVsZXRlLnN2Z1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlXCI+XG4gICAgICAgICAgICAgIDxwPkFudG9pbmVGYWl0RGVMYVRyb21wZXR0ZS5tcDM8L3A+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9zdGF0aWMvYXNzZXRzL2ltYWdlcy9kZWxldGUuc3ZnXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGVcIj5cbiAgICAgICAgICAgICAgPHA+QW50b2luZUZhaXREZUxhVHJvbXBldHRlLm1wMzwvcD5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uL3N0YXRpYy9hc3NldHMvaW1hZ2VzL2RlbGV0ZS5zdmdcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFuc2NyaXB0LWJ0blwiXG4gICAgICAgICAgICBvbkNsaWNrPXtzaG93VHJhbnNjcmlwdGlvblNldHRpbmdzfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFRyYW5zY3JpcHRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRGaWxlc0J0bjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Transcript/AddFiles.js\n");

/***/ }),

/***/ "./components/Transcript/AddFilesBtn.js":
/*!**********************************************!*\
  !*** ./components/Transcript/AddFilesBtn.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/bilal/dev/Scribbbe/components/Transcript/AddFilesBtn.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // import components\n\nconst AddFilesBtn = ({\n  showTranscript,\n  hideAddFileBtn\n}) => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, hideAddFileBtn && __jsx(\"div\", {\n    className: \"add-files-btn-container\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, __jsx(\"button\", {\n    onClick: showTranscript,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 11\n    }\n  }, \"Add files \", __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 23\n    }\n  }, \"Supported formats: mp3, flac, wav\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddFilesBtn);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RyYW5zY3JpcHQvQWRkRmlsZXNCdG4uanM/Y2ZiNyJdLCJuYW1lcyI6WyJBZGRGaWxlc0J0biIsInNob3dUcmFuc2NyaXB0IiwiaGlkZUFkZEZpbGVCdG4iXSwibWFwcGluZ3MiOiI7Ozs7O0NBRUE7O0FBRUEsTUFBTUEsV0FBVyxHQUFHLENBQUM7QUFBRUMsZ0JBQUY7QUFBa0JDO0FBQWxCLENBQUQsS0FBd0M7QUFDMUQsU0FDRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsY0FBYyxJQUNiO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLFdBQU8sRUFBRUQsY0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlDQURaLENBREYsQ0FGSixDQURGO0FBV0QsQ0FaRDs7QUFjZUQsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1RyYW5zY3JpcHQvQWRkRmlsZXNCdG4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuLy8gaW1wb3J0IGNvbXBvbmVudHNcblxuY29uc3QgQWRkRmlsZXNCdG4gPSAoeyBzaG93VHJhbnNjcmlwdCwgaGlkZUFkZEZpbGVCdG4gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIHtoaWRlQWRkRmlsZUJ0biAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLWZpbGVzLWJ0bi1jb250YWluZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dUcmFuc2NyaXB0fT5cbiAgICAgICAgICAgIEFkZCBmaWxlcyA8c3Bhbj5TdXBwb3J0ZWQgZm9ybWF0czogbXAzLCBmbGFjLCB3YXY8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkRmlsZXNCdG47XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Transcript/AddFilesBtn.js\n");

/***/ }),

/***/ "./components/Transcript/TranscriptionSettings.js":
/*!********************************************************!*\
  !*** ./components/Transcript/TranscriptionSettings.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/bilal/dev/Scribbbe/components/Transcript/TranscriptionSettings.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // import components\n\nconst TranscriptionSettings = ({\n  hideTranscriptionSettings,\n  Close\n}) => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, hideTranscriptionSettings && __jsx(\"div\", {\n    className: \"add-file-container scale-in-top\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    onClick: Close,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 11\n    }\n  }, \"x\"), __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 11\n    }\n  }, \"I am component three\"), __jsx(\"button\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 11\n    }\n  }, \"Confirm\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TranscriptionSettings);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RyYW5zY3JpcHQvVHJhbnNjcmlwdGlvblNldHRpbmdzLmpzPzNkMjIiXSwibmFtZXMiOlsiVHJhbnNjcmlwdGlvblNldHRpbmdzIiwiaGlkZVRyYW5zY3JpcHRpb25TZXR0aW5ncyIsIkNsb3NlIl0sIm1hcHBpbmdzIjoiOzs7OztDQUVBOztBQUVBLE1BQU1BLHFCQUFxQixHQUFHLENBQUM7QUFBRUMsMkJBQUY7QUFBNkJDO0FBQTdCLENBQUQsS0FBMEM7QUFDdEUsU0FDRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QseUJBQXlCLElBQ3hCO0FBQUssYUFBUyxFQUFDLGlDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLFdBQU8sRUFBRUMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLENBRkosQ0FERjtBQVdELENBWkQ7O0FBY2VGLG9GQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UcmFuc2NyaXB0L1RyYW5zY3JpcHRpb25TZXR0aW5ncy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBpbXBvcnQgY29tcG9uZW50c1xuXG5jb25zdCBUcmFuc2NyaXB0aW9uU2V0dGluZ3MgPSAoeyBoaWRlVHJhbnNjcmlwdGlvblNldHRpbmdzLCBDbG9zZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge2hpZGVUcmFuc2NyaXB0aW9uU2V0dGluZ3MgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC1maWxlLWNvbnRhaW5lciBzY2FsZS1pbi10b3BcIj5cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e0Nsb3NlfT54PC9kaXY+XG4gICAgICAgICAgPGgxPkkgYW0gY29tcG9uZW50IHRocmVlPC9oMT5cbiAgICAgICAgICA8YnV0dG9uPkNvbmZpcm08L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2NyaXB0aW9uU2V0dGluZ3M7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Transcript/TranscriptionSettings.js\n");

/***/ }),

/***/ "./components/Transcript/index.js":
/*!****************************************!*\
  !*** ./components/Transcript/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AddFilesBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddFilesBtn */ \"./components/Transcript/AddFilesBtn.js\");\n/* harmony import */ var _AddFiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddFiles */ \"./components/Transcript/AddFiles.js\");\n/* harmony import */ var _TranscriptionSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TranscriptionSettings */ \"./components/Transcript/TranscriptionSettings.js\");\nvar _jsxFileName = \"/home/bilal/dev/Scribbbe/components/Transcript/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // import components\n\n\n\n\n\nconst TranscriptContainer = () => {\n  const {\n    0: hideAddFileBtn,\n    1: setHideFileBtn\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true);\n  const {\n    0: hideAddFiles,\n    1: setHideFiles\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    0: hideTranscriptionSettings,\n    1: setTranscriptionSettings\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  const showTranscript = () => {\n    setHideFileBtn(false);\n    setHideFiles(true);\n    setTranscriptionSettings(false);\n  };\n\n  const showTranscriptionSettings = () => {\n    setTranscriptionSettings(true);\n    setHideFiles(false);\n  };\n\n  const Close = () => {\n    setTranscriptionSettings(false);\n    setHideFiles(true);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"transcript-container\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(_AddFilesBtn__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    showTranscript: showTranscript,\n    hideAddFileBtn: hideAddFileBtn,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }), __jsx(_AddFiles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    hideAddFilesBtn: hideAddFiles,\n    showTranscriptionSettings: showTranscriptionSettings,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }), __jsx(_TranscriptionSettings__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    hideTranscriptionSettings: hideTranscriptionSettings,\n    Close: Close,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TranscriptContainer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RyYW5zY3JpcHQvaW5kZXguanM/MGM3ZCJdLCJuYW1lcyI6WyJUcmFuc2NyaXB0Q29udGFpbmVyIiwiaGlkZUFkZEZpbGVCdG4iLCJzZXRIaWRlRmlsZUJ0biIsInVzZVN0YXRlIiwiaGlkZUFkZEZpbGVzIiwic2V0SGlkZUZpbGVzIiwiaGlkZVRyYW5zY3JpcHRpb25TZXR0aW5ncyIsInNldFRyYW5zY3JpcHRpb25TZXR0aW5ncyIsInNob3dUcmFuc2NyaXB0Iiwic2hvd1RyYW5zY3JpcHRpb25TZXR0aW5ncyIsIkNsb3NlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztDQUVBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxtQkFBbUIsR0FBRyxNQUFNO0FBQ2hDLFFBQU07QUFBQSxPQUFDQyxjQUFEO0FBQUEsT0FBaUJDO0FBQWpCLE1BQW1DQyxzREFBUSxDQUFDLElBQUQsQ0FBakQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBK0JGLHNEQUFRLENBQUMsS0FBRCxDQUE3QztBQUNBLFFBQU07QUFBQSxPQUFDRyx5QkFBRDtBQUFBLE9BQTRCQztBQUE1QixNQUF3REosc0RBQVEsQ0FBQyxLQUFELENBQXRFOztBQUVBLFFBQU1LLGNBQWMsR0FBRyxNQUFNO0FBQzNCTixrQkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUNBRyxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNBRSw0QkFBd0IsQ0FBQyxLQUFELENBQXhCO0FBQ0QsR0FKRDs7QUFLQSxRQUFNRSx5QkFBeUIsR0FBRyxNQUFNO0FBQ3RDRiw0QkFBd0IsQ0FBQyxJQUFELENBQXhCO0FBQ0FGLGdCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0QsR0FIRDs7QUFJQSxRQUFNSyxLQUFLLEdBQUcsTUFBTTtBQUNsQkgsNEJBQXdCLENBQUMsS0FBRCxDQUF4QjtBQUNBRixnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNELEdBSEQ7O0FBS0EsU0FDRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUNFLGtCQUFjLEVBQUVHLGNBRGxCO0FBRUUsa0JBQWMsRUFBRVAsY0FGbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBS0UsTUFBQyxpREFBRDtBQUNFLG1CQUFlLEVBQUVHLFlBRG5CO0FBRUUsNkJBQXlCLEVBQUVLLHlCQUY3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFTRSxNQUFDLDhEQUFEO0FBQ0UsNkJBQXlCLEVBQUVILHlCQUQ3QjtBQUVFLFNBQUssRUFBRUksS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsQ0FERixDQURGO0FBa0JELENBckNEOztBQXVDZVYsa0ZBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1RyYW5zY3JpcHQvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIGltcG9ydCBjb21wb25lbnRzXG5pbXBvcnQgQWRkRmlsZXNCdG4gZnJvbSBcIi4vQWRkRmlsZXNCdG5cIjtcbmltcG9ydCBBZGRGaWxlcyBmcm9tIFwiLi9BZGRGaWxlc1wiO1xuaW1wb3J0IFRyYW5zY3JpcHRpb25TZXR0aW5ncyBmcm9tIFwiLi9UcmFuc2NyaXB0aW9uU2V0dGluZ3NcIjtcblxuY29uc3QgVHJhbnNjcmlwdENvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgW2hpZGVBZGRGaWxlQnRuLCBzZXRIaWRlRmlsZUJ0bl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2hpZGVBZGRGaWxlcywgc2V0SGlkZUZpbGVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2hpZGVUcmFuc2NyaXB0aW9uU2V0dGluZ3MsIHNldFRyYW5zY3JpcHRpb25TZXR0aW5nc10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgc2hvd1RyYW5zY3JpcHQgPSAoKSA9PiB7XG4gICAgc2V0SGlkZUZpbGVCdG4oZmFsc2UpO1xuICAgIHNldEhpZGVGaWxlcyh0cnVlKTtcbiAgICBzZXRUcmFuc2NyaXB0aW9uU2V0dGluZ3MoZmFsc2UpO1xuICB9O1xuICBjb25zdCBzaG93VHJhbnNjcmlwdGlvblNldHRpbmdzID0gKCkgPT4ge1xuICAgIHNldFRyYW5zY3JpcHRpb25TZXR0aW5ncyh0cnVlKTtcbiAgICBzZXRIaWRlRmlsZXMoZmFsc2UpO1xuICB9O1xuICBjb25zdCBDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRUcmFuc2NyaXB0aW9uU2V0dGluZ3MoZmFsc2UpO1xuICAgIHNldEhpZGVGaWxlcyh0cnVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhbnNjcmlwdC1jb250YWluZXJcIj5cbiAgICAgICAgPEFkZEZpbGVzQnRuXG4gICAgICAgICAgc2hvd1RyYW5zY3JpcHQ9e3Nob3dUcmFuc2NyaXB0fVxuICAgICAgICAgIGhpZGVBZGRGaWxlQnRuPXtoaWRlQWRkRmlsZUJ0bn1cbiAgICAgICAgLz5cbiAgICAgICAgPEFkZEZpbGVzXG4gICAgICAgICAgaGlkZUFkZEZpbGVzQnRuPXtoaWRlQWRkRmlsZXN9XG4gICAgICAgICAgc2hvd1RyYW5zY3JpcHRpb25TZXR0aW5ncz17c2hvd1RyYW5zY3JpcHRpb25TZXR0aW5nc31cbiAgICAgICAgLz5cbiAgICAgICAgPFRyYW5zY3JpcHRpb25TZXR0aW5nc1xuICAgICAgICAgIGhpZGVUcmFuc2NyaXB0aW9uU2V0dGluZ3M9e2hpZGVUcmFuc2NyaXB0aW9uU2V0dGluZ3N9XG4gICAgICAgICAgQ2xvc2U9e0Nsb3NlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zY3JpcHRDb250YWluZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Transcript/index.js\n");

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