"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"278761a51b98\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzY1MmIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIyNzg3NjFhNTFiOThcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/AuthProviders.tsx":
/*!**************************************!*\
  !*** ./components/AuthProviders.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst AuthProviders = ()=>{\n    _s();\n    const [providers, setProviders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, []);\n    if (providers) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: Object.values(providers).map((provider, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: provider.id\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\shrey\\\\Downloads\\\\flexibble_ss\\\\components\\\\AuthProviders.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\shrey\\\\Downloads\\\\flexibble_ss\\\\components\\\\AuthProviders.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, undefined);\n    }\n};\n_s(AuthProviders, \"/fgZJB+kQat6cj9IgcF9C5KoR2U=\");\n_c = AuthProviders;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthProviders);\nvar _c;\n$RefreshReg$(_c, \"AuthProviders\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQXV0aFByb3ZpZGVycy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRW1EO0FBTW5ELE1BQU1HLGdCQUFnQjs7SUFDcEIsTUFBTSxDQUFDQyxXQUFVQyxhQUFhLEdBQUdILCtDQUFRQSxDQUFvQjtJQUM3REQsZ0RBQVNBLENBQUMsS0FFVixHQUFFLEVBQUU7SUFDSixJQUFHRyxXQUNIO1FBQ0UscUJBQ0UsOERBQUNFO3NCQUNFQyxPQUFPQyxNQUFNLENBQUNKLFdBQVdLLEdBQUcsQ0FBQyxDQUFDQyxVQUFrQkMsa0JBQy9DLDhEQUFDQzs4QkFBUUYsU0FBU0csRUFBRTs7Ozs7Ozs7Ozs7SUFJNUI7QUFDRjtHQWZNVjtLQUFBQTtBQWlCTiwrREFBZUEsYUFBYUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0F1dGhQcm92aWRlcnMudHN4P2JlYjYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCBSZWFjdCwgeyAgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG50eXBlIFByb3ZpZGVyPXtcclxuICBpZDpzdHJpbmc7IG5hbWU6c3RyaW5nOyB0eXBlOnN0cmluZzsgc2lnbmluVXJsOnN0cmluZzsgY2FsbGJhY2tVcmw6c3RyaW5nOyBzaWduaW5VcmxQYXJhbXM6UmVjb3JkPHN0cmluZyxzdHJpbmc+IHwgbnVsbDtcclxufVxyXG50eXBlIFByb3ZpZGVycz1SZWNvcmQ8c3RyaW5nLFByb3ZpZGVyPjtcclxuXHJcbmNvbnN0IEF1dGhQcm92aWRlcnMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Byb3ZpZGVycyxzZXRQcm92aWRlcnNdID0gdXNlU3RhdGU8UHJvdmlkZXJzIHwgbnVsbCA+KG51bGwpO1xyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICB9LFtdKVxyXG4gIGlmKHByb3ZpZGVycylcclxuICB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtPYmplY3QudmFsdWVzKHByb3ZpZGVycykubWFwKChwcm92aWRlcjpQcm92aWRlcixpKT0+KFxyXG4gICAgICAgICAgPGJ1dHRvbj57cHJvdmlkZXIuaWR9PC9idXR0b24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aFByb3ZpZGVycyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXV0aFByb3ZpZGVycyIsInByb3ZpZGVycyIsInNldFByb3ZpZGVycyIsImRpdiIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsInByb3ZpZGVyIiwiaSIsImJ1dHRvbiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/AuthProviders.tsx\n"));

/***/ })

});