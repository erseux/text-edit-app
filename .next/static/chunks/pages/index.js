/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Faugust%2FCoding%2Ftext-edit-app%2Fpages%2Findex.tsx!":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Faugust%2FCoding%2Ftext-edit-app%2Fpages%2Findex.tsx! ***!
  \****************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./pages/index.tsx */ \"./pages/index.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/cGFnZT0lMkYmYWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRmF1Z3VzdCUyRkNvZGluZyUyRnRleHQtZWRpdC1hcHAlMkZwYWdlcyUyRmluZGV4LnRzeCEuanMiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyw0Q0FBbUI7QUFDMUM7QUFDQTtBQUNBLE9BQU8sSUFBVTtBQUNqQixNQUFNLFVBQVU7QUFDaEI7QUFDQSxPQUFPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvPzBlZDkiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9cIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvXCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Faugust%2FCoding%2Ftext-edit-app%2Fpages%2Findex.tsx!\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"./node_modules/@auth0/nextjs-auth0/dist/index.browser.js\");\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__.useUser)(), user = ref.user, error = ref.error, isLoading = ref.isLoading;\n    if (isLoading) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/august/Coding/text-edit-app/pages/index.tsx\",\n        lineNumber: 7,\n        columnNumber: 27\n    }, this));\n    if (error) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: error.message\n    }, void 0, false, {\n        fileName: \"/Users/august/Coding/text-edit-app/pages/index.tsx\",\n        lineNumber: 8,\n        columnNumber: 23\n    }, this));\n    if (user) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-10 font-normal text-xl px-2\",\n                    children: [\n                        \"Welcome, \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            children: user.email\n                        }, void 0, false, {\n                            fileName: \"/Users/august/Coding/text-edit-app/pages/index.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 30\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/august/Coding/text-edit-app/pages/index.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-10 px-4\",\n                    children: \"Choose a document to edit\"\n                }, void 0, false, {\n                    fileName: \"/Users/august/Coding/text-edit-app/pages/index.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: \"/api/auth/login\",\n        children: \"Login\"\n    }, void 0, false, {\n        fileName: \"/Users/august/Coding/text-edit-app/pages/index.tsx\",\n        lineNumber: 22,\n        columnNumber: 12\n    }, this));\n};\n_s(Home, \"z8NjDiK5azFgDeQIeOoWnL/sCfs=\", false, function() {\n    return [\n        _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__.useUser\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDNkM7O0FBRTlCLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHLENBQUM7O0lBQzVCLEdBQUssQ0FBOEJELEdBQVMsR0FBVEEsNERBQU8sSUFBbENFLElBQUksR0FBdUJGLEdBQVMsQ0FBcENFLElBQUksRUFBRUMsS0FBSyxHQUFnQkgsR0FBUyxDQUE5QkcsS0FBSyxFQUFFQyxTQUFTLEdBQUtKLEdBQVMsQ0FBdkJJLFNBQVM7SUFFOUIsRUFBRSxFQUFFQSxTQUFTLEVBQUUsTUFBTSw2RUFBRUMsQ0FBRztrQkFBQyxDQUFVOzs7Ozs7SUFDckMsRUFBRSxFQUFFRixLQUFLLEVBQUUsTUFBTSw2RUFBRUUsQ0FBRztrQkFBRUYsS0FBSyxDQUFDRyxPQUFPOzs7Ozs7SUFFckMsRUFBRSxFQUFFSixJQUFJLEVBQUUsQ0FBQztRQUNQLE1BQU07OzRGQUVHRyxDQUFHO29CQUFDRSxTQUFTLEVBQUMsQ0FBZ0M7O3dCQUFDLENBQ25DO29HQUFDQyxDQUFDO3NDQUFFTixJQUFJLENBQUNPLEtBQUs7Ozs7Ozs7Ozs7Ozs0RkFFMUJKLENBQUc7b0JBQUNFLFNBQVMsRUFBQyxDQUFZOzhCQUFDLENBRTVCOzs7Ozs7OztJQUdaLENBQUM7SUFDRCxNQUFNLDZFQUFFRyxDQUFDO1FBQUNDLElBQUksRUFBQyxDQUFpQjtrQkFBQyxDQUFLOzs7Ozs7QUFDMUMsQ0FBQztHQW5CdUJWLElBQUk7O1FBQ1dELHdEQUFPOzs7S0FEdEJDLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcFNoZWxsIGZyb20gXCIuLi9jb21wb25lbnRzL0FwcFNoZWxsXCJcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICdAYXV0aDAvbmV4dGpzLWF1dGgwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCB7IHVzZXIsIGVycm9yLCBpc0xvYWRpbmcgfSA9IHVzZVVzZXIoKTtcblxuICAgIGlmIChpc0xvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj47XG5cbiAgICBpZiAodXNlcikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwIGZvbnQtbm9ybWFsIHRleHQteGwgcHgtMlwiPlxuICAgICAgICAgICAgICAgICAgICBXZWxjb21lLCA8aT57dXNlci5lbWFpbH08L2k+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMCBweC00XCI+XG4gICAgICAgICAgICAgICAgICAgIENob29zZSBhIGRvY3VtZW50IHRvIGVkaXRcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgfVxuICAgIHJldHVybiA8YSBocmVmPVwiL2FwaS9hdXRoL2xvZ2luXCI+TG9naW48L2E+O1xufSJdLCJuYW1lcyI6WyJ1c2VVc2VyIiwiSG9tZSIsInVzZXIiLCJlcnJvciIsImlzTG9hZGluZyIsImRpdiIsIm1lc3NhZ2UiLCJjbGFzc05hbWUiLCJpIiwiZW1haWwiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Faugust%2FCoding%2Ftext-edit-app%2Fpages%2Findex.tsx!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);