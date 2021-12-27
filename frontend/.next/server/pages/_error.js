/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_error";
exports.ids = ["pages/_error"];
exports.modules = {

/***/ "./misc/helpers.ts":
/*!*************************!*\
  !*** ./misc/helpers.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hasValue\": () => (/* binding */ hasValue)\n/* harmony export */ });\nfunction hasValue(v) {\n  return v !== null && v !== undefined;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9taXNjL2hlbHBlcnMudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLFNBQVNBLFFBQVQsQ0FBc0JDLENBQXRCLEVBQXVEO0FBQzVELFNBQVFBLENBQUMsS0FBSyxJQUFOLElBQWNBLENBQUMsS0FBS0MsU0FBNUI7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2RlZmF1bHQvLi9taXNjL2hlbHBlcnMudHM/ZWYxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaGFzVmFsdWU8VD4gKHY6IFQgfCB1bmRlZmluZWQgfCBudWxsKTogdiBpcyBUIHtcbiAgcmV0dXJuICh2ICE9PSBudWxsICYmIHYgIT09IHVuZGVmaW5lZClcbn1cbiJdLCJuYW1lcyI6WyJoYXNWYWx1ZSIsInYiLCJ1bmRlZmluZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./misc/helpers.ts\n");

/***/ }),

/***/ "./pages/_error.tsx":
/*!**************************!*\
  !*** ./pages/_error.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/error */ \"next/error\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var clean_stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clean-stack */ \"clean-stack\");\n/* harmony import */ var clean_stack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clean_stack__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _misc_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @misc/helpers */ \"./misc/helpers.ts\");\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== \"function\") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\n\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\n\n\n\n\n\nfunction loadStackTrace(html) {\n  Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(/*! highlight.js */ \"highlight.js\"))).then(mod => mod.highlightBlock(html)).finally(() => {});\n}\n\nfunction ErrorStatus(props) {\n  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_error__WEBPACK_IMPORTED_MODULE_1___default()), {\n    statusCode: props.statusCode ?? 400\n  }), (0,_misc_helpers__WEBPACK_IMPORTED_MODULE_3__.hasValue)(props.stack) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"link\", {\n    href: __webpack_require__(/*! highlight.js/styles/github.css */ \"./node_modules/highlight.js/styles/github.css\"),\n    rel: \"stylesheet\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"details\", {\n    onClick: () => {\n      loadStackTrace(ref.current);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"summary\", null, \"Stack trace\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"pre\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"code\", {\n    className: \"js\",\n    style: {\n      borderRadius: 4,\n      padding: 24,\n      margin: 24,\n      width: 'calc(100% - 96px)'\n    },\n    ref: ref\n  }, clean_stack__WEBPACK_IMPORTED_MODULE_2___default()(props.stack ?? ''))))));\n}\n\nfunction getInitialProps(props) {\n  var _props$err;\n\n  const statusCode = props.res != null ? props.res.statusCode : props.err != null ? props.err.statusCode : 404;\n  return {\n    statusCode,\n    stack: (_props$err = props.err) === null || _props$err === void 0 ? void 0 : _props$err.stack\n  };\n}\n\nErrorStatus.getInitialProps = getInitialProps;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorStatus);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZXJyb3IudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVNLLGNBQVQsQ0FBeUJDLElBQXpCLEVBQWtEO0FBQ2hELDJFQUFPLGtDQUFQLElBQXVCQyxJQUF2QixDQUE0QkMsR0FBRyxJQUFJQSxHQUFHLENBQUNDLGNBQUosQ0FBbUJILElBQW5CLENBQW5DLEVBQTZESSxPQUE3RCxDQUFxRSxNQUFNLENBQUUsQ0FBN0U7QUFDRDs7QUFDRCxTQUFTQyxXQUFULENBQXNCQyxLQUF0QixFQUE4RTtBQUM1RSxRQUFNQyxHQUFHLEdBQUdaLDZDQUFNLEVBQWxCO0FBRUEsc0JBQ0UsdUlBQ0UsMkRBQUMsbURBQUQ7QUFBTyxjQUFVLEVBQUVXLEtBQUssQ0FBQ0UsVUFBTixJQUFvQjtBQUF2QyxJQURGLEVBSUdWLHVEQUFRLENBQUNRLEtBQUssQ0FBQ0csS0FBUCxDQUFSLGlCQUNDLHVJQUNFO0FBQ0UsUUFBSSxFQUFFQyxtQkFBTyxDQUFDLHFGQUFELENBRGY7QUFFRSxPQUFHLEVBQUM7QUFGTixJQURGLGVBS0U7QUFDRSxXQUFPLEVBQUUsTUFBTTtBQUNiWCxNQUFBQSxjQUFjLENBQUNRLEdBQUcsQ0FBQ0ksT0FBTCxDQUFkO0FBQ0Q7QUFISCxrQkFLRSwwRkFMRixlQU1FLHFGQUNFO0FBQ0UsYUFBUyxFQUFDLElBRFo7QUFFRSxTQUFLLEVBQUU7QUFDTEMsTUFBQUEsWUFBWSxFQUFFLENBRFQ7QUFFTEMsTUFBQUEsT0FBTyxFQUFFLEVBRko7QUFHTEMsTUFBQUEsTUFBTSxFQUFFLEVBSEg7QUFJTEMsTUFBQUEsS0FBSyxFQUFFO0FBSkYsS0FGVDtBQVFFLE9BQUcsRUFBRVI7QUFSUCxLQVVHVixrREFBVSxDQUFDUyxLQUFLLENBQUNHLEtBQU4sSUFBZSxFQUFoQixDQVZiLENBREYsQ0FORixDQUxGLENBTEosQ0FERjtBQW9DRDs7QUFPRCxTQUFTTyxlQUFULENBQTBCVixLQUExQixFQUE4RTtBQUFBOztBQUM1RSxRQUFNRSxVQUFVLEdBQUlGLEtBQUssQ0FBQ1csR0FBTixJQUFhLElBQWQsR0FDZlgsS0FBSyxDQUFDVyxHQUFOLENBQVVULFVBREssR0FFZEYsS0FBSyxDQUFDWSxHQUFOLElBQWEsSUFBZCxHQUNFWixLQUFLLENBQUNZLEdBQU4sQ0FBVVYsVUFEWixHQUVFLEdBSk47QUFLQSxTQUFPO0FBQUVBLElBQUFBLFVBQUY7QUFBY0MsSUFBQUEsS0FBSyxnQkFBRUgsS0FBSyxDQUFDWSxHQUFSLCtDQUFFLFdBQVdUO0FBQWhDLEdBQVA7QUFDRDs7QUFFREosV0FBVyxDQUFDVyxlQUFaLEdBQThCQSxlQUE5QjtBQUVBLGlFQUFlWCxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVmYXVsdC8uL3BhZ2VzL19lcnJvci50c3g/MGY4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICduZXh0J1xuaW1wb3J0IEVycm9yIGZyb20gJ25leHQvZXJyb3InXG5pbXBvcnQgY2xlYW5TdGFjayBmcm9tICdjbGVhbi1zdGFjaydcbmltcG9ydCB7IGhhc1ZhbHVlIH0gZnJvbSAnQG1pc2MvaGVscGVycydcblxuZnVuY3Rpb24gbG9hZFN0YWNrVHJhY2UgKGh0bWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gIGltcG9ydCgnaGlnaGxpZ2h0LmpzJykudGhlbihtb2QgPT4gbW9kLmhpZ2hsaWdodEJsb2NrKGh0bWwpKS5maW5hbGx5KCgpID0+IHt9KVxufVxuZnVuY3Rpb24gRXJyb3JTdGF0dXMgKHByb3BzOiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRJbml0aWFsUHJvcHM+KTogSlNYLkVsZW1lbnQge1xuICBjb25zdCByZWYgPSB1c2VSZWY8YW55PigpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEVycm9yIHN0YXR1c0NvZGU9e3Byb3BzLnN0YXR1c0NvZGUgPz8gNDAwfSAvPlxuXG4gICAgICB7LyogQ2hlY2sgaWYgZGVidWdnaW5nIG1vZGUgaXMgZW5hYmxlZC4gKi99XG4gICAgICB7aGFzVmFsdWUocHJvcHMuc3RhY2spICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgaHJlZj17cmVxdWlyZSgnaGlnaGxpZ2h0LmpzL3N0eWxlcy9naXRodWIuY3NzJyl9XG4gICAgICAgICAgICByZWw9J3N0eWxlc2hlZXQnXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGV0YWlsc1xuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBsb2FkU3RhY2tUcmFjZShyZWYuY3VycmVudClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHN1bW1hcnk+U3RhY2sgdHJhY2U8L3N1bW1hcnk+XG4gICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgICA8Y29kZVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nanMnXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI0LFxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyNCxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAnY2FsYygxMDAlIC0gOTZweCknXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjbGVhblN0YWNrKHByb3BzLnN0YWNrID8/ICcnKX1cbiAgICAgICAgICAgICAgPC9jb2RlPlxuICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC8+XG4gIClcbn1cblxuaW50ZXJmYWNlIEdldEluaXRpYWxQcm9wc1JldHVyblByb3BzIHtcbiAgc3RhdHVzQ29kZTogbnVtYmVyIHwgdW5kZWZpbmVkXG4gIHN0YWNrOiBzdHJpbmcgfCB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZ2V0SW5pdGlhbFByb3BzIChwcm9wczogTmV4dFBhZ2VDb250ZXh0KTogR2V0SW5pdGlhbFByb3BzUmV0dXJuUHJvcHMge1xuICBjb25zdCBzdGF0dXNDb2RlID0gKHByb3BzLnJlcyAhPSBudWxsKVxuICAgID8gcHJvcHMucmVzLnN0YXR1c0NvZGVcbiAgICA6IChwcm9wcy5lcnIgIT0gbnVsbClcbiAgICAgID8gcHJvcHMuZXJyLnN0YXR1c0NvZGVcbiAgICAgIDogNDA0XG4gIHJldHVybiB7IHN0YXR1c0NvZGUsIHN0YWNrOiBwcm9wcy5lcnI/LnN0YWNrIH1cbn1cblxuRXJyb3JTdGF0dXMuZ2V0SW5pdGlhbFByb3BzID0gZ2V0SW5pdGlhbFByb3BzXG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yU3RhdHVzXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJFcnJvciIsImNsZWFuU3RhY2siLCJoYXNWYWx1ZSIsImxvYWRTdGFja1RyYWNlIiwiaHRtbCIsInRoZW4iLCJtb2QiLCJoaWdobGlnaHRCbG9jayIsImZpbmFsbHkiLCJFcnJvclN0YXR1cyIsInByb3BzIiwicmVmIiwic3RhdHVzQ29kZSIsInN0YWNrIiwicmVxdWlyZSIsImN1cnJlbnQiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwibWFyZ2luIiwid2lkdGgiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_error.tsx\n");

/***/ }),

/***/ "./node_modules/highlight.js/styles/github.css":
/*!*****************************************************!*\
  !*** ./node_modules/highlight.js/styles/github.css ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "clean-stack":
/*!******************************!*\
  !*** external "clean-stack" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("clean-stack");

/***/ }),

/***/ "highlight.js":
/*!*******************************!*\
  !*** external "highlight.js" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("highlight.js");

/***/ }),

/***/ "next/error":
/*!*****************************!*\
  !*** external "next/error" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/error");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_error.tsx"));
module.exports = __webpack_exports__;

})();