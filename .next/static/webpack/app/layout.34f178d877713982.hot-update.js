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

/***/ "(app-pages-browser)/./components/AuthProviders.tsx":
/*!**************************************!*\
  !*** ./components/AuthProviders.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst AuthProviders = ()=>{\n    _s();\n    const [providers, setProviders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchProviders = async ()=>{\n            const res = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getProviders)();\n            setProviders(res);\n        };\n        fetchProviders();\n    }, []);\n    if (providers) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: Object.values(providers).map((provider, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: provider.id\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\shrey\\\\Downloads\\\\flexibble_ss\\\\components\\\\AuthProviders.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\shrey\\\\Downloads\\\\flexibble_ss\\\\components\\\\AuthProviders.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined);\n    }\n};\n_s(AuthProviders, \"/fgZJB+kQat6cj9IgcF9C5KoR2U=\");\n_c = AuthProviders;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthProviders);\nvar _c;\n$RefreshReg$(_c, \"AuthProviders\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQXV0aFByb3ZpZGVycy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDbUQ7QUFDTDtBQVE5QyxNQUFNSSxnQkFBZ0I7O0lBQ3BCLE1BQU0sQ0FBQ0MsV0FBVUMsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBb0I7SUFDN0RELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU0saUJBQWU7WUFDbkIsTUFBTUMsTUFBSSxNQUFNTCw2REFBWUE7WUFDNUJHLGFBQWFFO1FBQ2Y7UUFDQUQ7SUFDRixHQUFFLEVBQUU7SUFDSixJQUFHRixXQUNIO1FBQ0UscUJBQ0UsOERBQUNJO3NCQUNFQyxPQUFPQyxNQUFNLENBQUNOLFdBQVdPLEdBQUcsQ0FBQyxDQUFDQyxVQUFrQkMsa0JBQy9DLDhEQUFDQzs4QkFBUUYsU0FBU0csRUFBRTs7Ozs7Ozs7Ozs7SUFJNUI7QUFDRjtHQW5CTVo7S0FBQUE7QUFxQk4sK0RBQWVBLGFBQWFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRoUHJvdmlkZXJzLnRzeD9iZWI2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBSZWFjdCwgeyAgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBnZXRQcm92aWRlcnMgfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXHJcblxyXG5cclxudHlwZSBQcm92aWRlcj17XHJcbiAgaWQ6c3RyaW5nOyBuYW1lOnN0cmluZzsgdHlwZTpzdHJpbmc7IHNpZ25pblVybDpzdHJpbmc7IGNhbGxiYWNrVXJsOnN0cmluZzsgc2lnbmluVXJsUGFyYW1zOlJlY29yZDxzdHJpbmcsc3RyaW5nPiB8IG51bGw7XHJcbn1cclxudHlwZSBQcm92aWRlcnM9UmVjb3JkPHN0cmluZyxQcm92aWRlcj47XHJcblxyXG5jb25zdCBBdXRoUHJvdmlkZXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm92aWRlcnMsc2V0UHJvdmlkZXJzXSA9IHVzZVN0YXRlPFByb3ZpZGVycyB8IG51bGwgPihudWxsKTtcclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGNvbnN0IGZldGNoUHJvdmlkZXJzPWFzeW5jKCk9PntcclxuICAgICAgY29uc3QgcmVzPWF3YWl0IGdldFByb3ZpZGVycygpO1xyXG4gICAgICBzZXRQcm92aWRlcnMocmVzKVxyXG4gICAgfVxyXG4gICAgZmV0Y2hQcm92aWRlcnMoKVxyXG4gIH0sW10pXHJcbiAgaWYocHJvdmlkZXJzKVxyXG4gIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge09iamVjdC52YWx1ZXMocHJvdmlkZXJzKS5tYXAoKHByb3ZpZGVyOlByb3ZpZGVyLGkpPT4oXHJcbiAgICAgICAgICA8YnV0dG9uPntwcm92aWRlci5pZH08L2J1dHRvbj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoUHJvdmlkZXJzIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXRQcm92aWRlcnMiLCJBdXRoUHJvdmlkZXJzIiwicHJvdmlkZXJzIiwic2V0UHJvdmlkZXJzIiwiZmV0Y2hQcm92aWRlcnMiLCJyZXMiLCJkaXYiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJwcm92aWRlciIsImkiLCJidXR0b24iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/AuthProviders.tsx\n"));

/***/ })

});