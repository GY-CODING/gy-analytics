"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./src/app/dashboard/page.tsx":
/*!************************************!*\
  !*** ./src/app/dashboard/page.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Box_CircularProgress_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,CircularProgress!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_CircularProgress_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,CircularProgress!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/CircularProgress/CircularProgress.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useCharactersStory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useCharactersStory */ \"(app-pages-browser)/./src/app/hooks/useCharactersStory.ts\");\n/* harmony import */ var _hooks_useCharactersGame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useCharactersGame */ \"(app-pages-browser)/./src/app/hooks/useCharactersGame.ts\");\n/* harmony import */ var _components_KpiComponentBars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/KpiComponentBars */ \"(app-pages-browser)/./src/components/KpiComponentBars.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Page() {\n    _s();\n    const { data: charactersStory, isLoading: isLoadingStory, isError: isErrorStory, countCharactersByWorld: countCharactersStoryByWorld } = (0,_hooks_useCharactersStory__WEBPACK_IMPORTED_MODULE_2__.useCharactersStory)();\n    const { data: charactersGame, isLoading: isLoadingGame, isError: isErrorGame, countCharactersByWorld: countCharactersGameByWorld } = (0,_hooks_useCharactersGame__WEBPACK_IMPORTED_MODULE_3__.useCharactersGame)();\n    const colors1 = [\n        \"#FFC107\",\n        \"#FF5722\"\n    ];\n    const colors2 = [\n        \"#9929ea\",\n        \"#5808fb\"\n    ];\n    const colors3 = [\n        \"#14b8a6\",\n        \"#2dd4bf\"\n    ];\n    const colors4 = [\n        \"#22d3ee\",\n        \"#0891b2\"\n    ];\n    const colors5 = [\n        \"#fb7185\",\n        \"#db2777\"\n    ];\n    const colors6 = [\n        \"#f472b6\",\n        \"#db2777\"\n    ];\n    if (isLoadingStory || isLoadingGame || isErrorStory || isErrorGame) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_CircularProgress_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            sx: {\n                width: \"78%\",\n                height: \"95vh\",\n                backgroundColor: \"#171717\",\n                filter: \"drop-shadow(0px 0px 10px #000000)\",\n                borderRadius: \"10px\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_CircularProgress_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/guillermofiguerasjimenez/Projects/gycoding/gy-analytics/src/app/dashboard/page.tsx\",\n                lineNumber: 22,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/guillermofiguerasjimenez/Projects/gycoding/gy-analytics/src/app/dashboard/page.tsx\",\n            lineNumber: 21,\n            columnNumber: 13\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_CircularProgress_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        sx: {\n            width: \"78%\",\n            height: \"95vh\",\n            backgroundColor: \"#171717\",\n            filter: \"drop-shadow(0px 0px 10px #000000)\",\n            borderRadius: \"10px\",\n            display: \"flex\",\n            flexDirection: \"row\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            flexWrap: \"wrap\",\n            overflow: \"auto\",\n            gap: \"10px\",\n            padding: \"20px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_KpiComponentBars__WEBPACK_IMPORTED_MODULE_4__.KpiComponentBars, {\n                title: \"Dinero en putas\",\n                colors: colors1,\n                datasetA: countCharactersGameByWorld(),\n                datasetB: countCharactersStoryByWorld(),\n                dataKey: [\n                    \"world\"\n                ]\n            }, void 0, false, {\n                fileName: \"/Users/guillermofiguerasjimenez/Projects/gycoding/gy-analytics/src/app/dashboard/page.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(KpiComponentLines, {\n                title: \"Dinero en farlopa\",\n                colors: colors2,\n                datasetA: countCharactersGameByWorld(),\n                datasetB: countCharactersStoryByWorld(),\n                dataKey: [\n                    \"world\"\n                ]\n            }, void 0, false, {\n                fileName: \"/Users/guillermofiguerasjimenez/Projects/gycoding/gy-analytics/src/app/dashboard/page.tsx\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_KpiComponentBars__WEBPACK_IMPORTED_MODULE_4__.KpiComponentBars, {\n                title: \"Dinero en heroina\",\n                colors: colors3,\n                datasetA: countCharactersGameByWorld(),\n                datasetB: countCharactersStoryByWorld(),\n                dataKey: [\n                    \"world\"\n                ]\n            }, void 0, false, {\n                fileName: \"/Users/guillermofiguerasjimenez/Projects/gycoding/gy-analytics/src/app/dashboard/page.tsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_KpiComponentBars__WEBPACK_IMPORTED_MODULE_4__.KpiComponentBars, {\n                title: \"Dinero en armas\",\n                colors: colors4,\n                datasetA: countCharactersGameByWorld(),\n                datasetB: countCharactersStoryByWorld(),\n                dataKey: [\n                    \"world\"\n                ]\n            }, void 0, false, {\n                fileName: \"/Users/guillermofiguerasjimenez/Projects/gycoding/gy-analytics/src/app/dashboard/page.tsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_KpiComponentBars__WEBPACK_IMPORTED_MODULE_4__.KpiComponentBars, {\n                title: \"Detenciones\",\n                colors: colors5,\n                datasetA: countCharactersGameByWorld(),\n                datasetB: countCharactersStoryByWorld(),\n                dataKey: [\n                    \"world\"\n                ]\n            }, void 0, false, {\n                fileName: \"/Users/guillermofiguerasjimenez/Projects/gycoding/gy-analytics/src/app/dashboard/page.tsx\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_KpiComponentBars__WEBPACK_IMPORTED_MODULE_4__.KpiComponentBars, {\n                title: \"Arresto domiciliario\",\n                colors: colors6,\n                datasetA: countCharactersGameByWorld(),\n                datasetB: countCharactersStoryByWorld(),\n                dataKey: [\n                    \"world\"\n                ]\n            }, void 0, false, {\n                fileName: \"/Users/guillermofiguerasjimenez/Projects/gycoding/gy-analytics/src/app/dashboard/page.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/guillermofiguerasjimenez/Projects/gycoding/gy-analytics/src/app/dashboard/page.tsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, this);\n}\n_s(Page, \"nXBpEEA3RkE+07ILbKi6LbWAeXo=\", false, function() {\n    return [\n        _hooks_useCharactersStory__WEBPACK_IMPORTED_MODULE_2__.useCharactersStory,\n        _hooks_useCharactersGame__WEBPACK_IMPORTED_MODULE_3__.useCharactersGame\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ3FEO0FBQzVCO0FBQ3VDO0FBQ0Y7QUFDRTtBQUVqRCxTQUFTTTs7SUFDcEIsTUFBTSxFQUFFQyxNQUFNQyxlQUFlLEVBQUVDLFdBQVdDLGNBQWMsRUFBRUMsU0FBU0MsWUFBWSxFQUFFQyx3QkFBd0JDLDJCQUEyQixFQUFFLEdBQUdYLDZFQUFrQkE7SUFDM0osTUFBTSxFQUFFSSxNQUFNUSxjQUFjLEVBQUVOLFdBQVdPLGFBQWEsRUFBRUwsU0FBU00sV0FBVyxFQUFFSix3QkFBd0JLLDBCQUEwQixFQUFFLEdBQUdkLDJFQUFpQkE7SUFDdEosTUFBTWUsVUFBVTtRQUFDO1FBQVc7S0FBVTtJQUN0QyxNQUFNQyxVQUFVO1FBQUM7UUFBVztLQUFVO0lBQ3RDLE1BQU1DLFVBQVU7UUFBQztRQUFXO0tBQVU7SUFDdEMsTUFBTUMsVUFBVTtRQUFDO1FBQVc7S0FBVTtJQUN0QyxNQUFNQyxVQUFVO1FBQUM7UUFBVztLQUFVO0lBQ3RDLE1BQU1DLFVBQVU7UUFBQztRQUFXO0tBQVU7SUFHdEMsSUFBSWQsa0JBQWtCTSxpQkFBaUJKLGdCQUFnQkssYUFBYTtRQUNoRSxxQkFDSSw4REFBQ2pCLGdHQUFHQTtZQUFDeUIsSUFBSTtnQkFBRUMsT0FBTztnQkFBT0MsUUFBUTtnQkFBUUMsaUJBQWlCO2dCQUFXQyxRQUFRO2dCQUFxQ0MsY0FBYztZQUFPO3NCQUNuSSw0RUFBQzdCLGdHQUFnQkE7Ozs7Ozs7Ozs7SUFHN0I7SUFFQSxxQkFDSSw4REFBQ0QsZ0dBQUdBO1FBQUN5QixJQUFJO1lBQ0xDLE9BQU87WUFDUEMsUUFBUTtZQUNSQyxpQkFBaUI7WUFDakJDLFFBQVE7WUFDUkMsY0FBYztZQUNkQyxTQUFTO1lBQ1RDLGVBQWU7WUFDZkMsZ0JBQWdCO1lBQ2hCQyxZQUFZO1lBQ1pDLFVBQVU7WUFDVkMsVUFBVTtZQUNWQyxLQUFLO1lBQ0xDLFNBQVM7UUFDYjs7MEJBQ0ksOERBQUNqQywwRUFBZ0JBO2dCQUFDa0MsT0FBTztnQkFBbUJDLFFBQVFyQjtnQkFBU3NCLFVBQVV2QjtnQkFBOEJ3QixVQUFVNUI7Z0JBQStCNkIsU0FBUztvQkFBQztpQkFBUTs7Ozs7OzBCQUNoSyw4REFBQ0M7Z0JBQWtCTCxPQUFPO2dCQUFxQkMsUUFBUXBCO2dCQUFTcUIsVUFBVXZCO2dCQUE4QndCLFVBQVU1QjtnQkFBK0I2QixTQUFTO29CQUFDO2lCQUFROzs7Ozs7MEJBQ25LLDhEQUFDdEMsMEVBQWdCQTtnQkFBQ2tDLE9BQU87Z0JBQXFCQyxRQUFRbkI7Z0JBQVNvQixVQUFVdkI7Z0JBQThCd0IsVUFBVTVCO2dCQUErQjZCLFNBQVM7b0JBQUM7aUJBQVE7Ozs7OzswQkFDbEssOERBQUN0QywwRUFBZ0JBO2dCQUFDa0MsT0FBTztnQkFBbUJDLFFBQVFsQjtnQkFBU21CLFVBQVV2QjtnQkFBOEJ3QixVQUFVNUI7Z0JBQStCNkIsU0FBUztvQkFBQztpQkFBUTs7Ozs7OzBCQUNoSyw4REFBQ3RDLDBFQUFnQkE7Z0JBQUNrQyxPQUFPO2dCQUFlQyxRQUFRakI7Z0JBQVNrQixVQUFVdkI7Z0JBQThCd0IsVUFBVTVCO2dCQUErQjZCLFNBQVM7b0JBQUM7aUJBQVE7Ozs7OzswQkFDNUosOERBQUN0QywwRUFBZ0JBO2dCQUFDa0MsT0FBTztnQkFBd0JDLFFBQVFoQjtnQkFBU2lCLFVBQVV2QjtnQkFBOEJ3QixVQUFVNUI7Z0JBQStCNkIsU0FBUztvQkFBQztpQkFBUTs7Ozs7Ozs7Ozs7O0FBR2pMO0dBM0N3QnJDOztRQUNxSEgseUVBQWtCQTtRQUN0QkMsdUVBQWlCQTs7O0tBRmxJRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2Rhc2hib2FyZC9wYWdlLnRzeD9jMTVlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgQm94LCBDaXJjdWxhclByb2dyZXNzIH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUNoYXJhY3RlcnNTdG9yeSB9IGZyb20gJy4uL2hvb2tzL3VzZUNoYXJhY3RlcnNTdG9yeSdcbmltcG9ydCB7IHVzZUNoYXJhY3RlcnNHYW1lIH0gZnJvbSAnLi4vaG9va3MvdXNlQ2hhcmFjdGVyc0dhbWUnXG5pbXBvcnQgeyBLcGlDb21wb25lbnRCYXJzIH0gZnJvbSAnQC9jb21wb25lbnRzL0twaUNvbXBvbmVudEJhcnMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKTogSlNYLkVsZW1lbnQge1xuICAgIGNvbnN0IHsgZGF0YTogY2hhcmFjdGVyc1N0b3J5LCBpc0xvYWRpbmc6IGlzTG9hZGluZ1N0b3J5LCBpc0Vycm9yOiBpc0Vycm9yU3RvcnksIGNvdW50Q2hhcmFjdGVyc0J5V29ybGQ6IGNvdW50Q2hhcmFjdGVyc1N0b3J5QnlXb3JsZCB9ID0gdXNlQ2hhcmFjdGVyc1N0b3J5KClcbiAgICBjb25zdCB7IGRhdGE6IGNoYXJhY3RlcnNHYW1lLCBpc0xvYWRpbmc6IGlzTG9hZGluZ0dhbWUsIGlzRXJyb3I6IGlzRXJyb3JHYW1lLCBjb3VudENoYXJhY3RlcnNCeVdvcmxkOiBjb3VudENoYXJhY3RlcnNHYW1lQnlXb3JsZCB9ID0gdXNlQ2hhcmFjdGVyc0dhbWUoKVxuICAgIGNvbnN0IGNvbG9yczEgPSBbJyNGRkMxMDcnLCAnI0ZGNTcyMiddXG4gICAgY29uc3QgY29sb3JzMiA9IFsnIzk5MjllYScsICcjNTgwOGZiJ11cbiAgICBjb25zdCBjb2xvcnMzID0gWycjMTRiOGE2JywgJyMyZGQ0YmYnXVxuICAgIGNvbnN0IGNvbG9yczQgPSBbJyMyMmQzZWUnLCAnIzA4OTFiMiddXG4gICAgY29uc3QgY29sb3JzNSA9IFsnI2ZiNzE4NScsICcjZGIyNzc3J11cbiAgICBjb25zdCBjb2xvcnM2ID0gWycjZjQ3MmI2JywgJyNkYjI3NzcnXVxuXG5cbiAgICBpZiAoaXNMb2FkaW5nU3RvcnkgfHwgaXNMb2FkaW5nR2FtZSB8fCBpc0Vycm9yU3RvcnkgfHwgaXNFcnJvckdhbWUpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCb3ggc3g9e3sgd2lkdGg6ICc3OCUnLCBoZWlnaHQ6ICc5NXZoJywgYmFja2dyb3VuZENvbG9yOiAnIzE3MTcxNycsIGZpbHRlcjogXCJkcm9wLXNoYWRvdygwcHggMHB4IDEwcHggIzAwMDAwMClcIiwgYm9yZGVyUmFkaXVzOiAnMTBweCcgfX0+XG4gICAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveCBzeD17e1xuICAgICAgICAgICAgd2lkdGg6ICc3OCUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnOTV2aCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMTcxNzE3JyxcbiAgICAgICAgICAgIGZpbHRlcjogXCJkcm9wLXNoYWRvdygwcHggMHB4IDEwcHggIzAwMDAwMClcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgICAgICAgZ2FwOiAnMTBweCcsXG4gICAgICAgICAgICBwYWRkaW5nOiAnMjBweCcsXG4gICAgICAgIH19PlxuICAgICAgICAgICAgPEtwaUNvbXBvbmVudEJhcnMgdGl0bGU9eydEaW5lcm8gZW4gcHV0YXMnfSBjb2xvcnM9e2NvbG9yczF9IGRhdGFzZXRBPXtjb3VudENoYXJhY3RlcnNHYW1lQnlXb3JsZCgpfSBkYXRhc2V0Qj17Y291bnRDaGFyYWN0ZXJzU3RvcnlCeVdvcmxkKCl9IGRhdGFLZXk9e1tcIndvcmxkXCJdfSAvPlxuICAgICAgICAgICAgPEtwaUNvbXBvbmVudExpbmVzIHRpdGxlPXsnRGluZXJvIGVuIGZhcmxvcGEnfSBjb2xvcnM9e2NvbG9yczJ9IGRhdGFzZXRBPXtjb3VudENoYXJhY3RlcnNHYW1lQnlXb3JsZCgpfSBkYXRhc2V0Qj17Y291bnRDaGFyYWN0ZXJzU3RvcnlCeVdvcmxkKCl9IGRhdGFLZXk9e1tcIndvcmxkXCJdfSAvPlxuICAgICAgICAgICAgPEtwaUNvbXBvbmVudEJhcnMgdGl0bGU9eydEaW5lcm8gZW4gaGVyb2luYSd9IGNvbG9ycz17Y29sb3JzM30gZGF0YXNldEE9e2NvdW50Q2hhcmFjdGVyc0dhbWVCeVdvcmxkKCl9IGRhdGFzZXRCPXtjb3VudENoYXJhY3RlcnNTdG9yeUJ5V29ybGQoKX0gZGF0YUtleT17W1wid29ybGRcIl19IC8+XG4gICAgICAgICAgICA8S3BpQ29tcG9uZW50QmFycyB0aXRsZT17J0RpbmVybyBlbiBhcm1hcyd9IGNvbG9ycz17Y29sb3JzNH0gZGF0YXNldEE9e2NvdW50Q2hhcmFjdGVyc0dhbWVCeVdvcmxkKCl9IGRhdGFzZXRCPXtjb3VudENoYXJhY3RlcnNTdG9yeUJ5V29ybGQoKX0gZGF0YUtleT17W1wid29ybGRcIl19IC8+XG4gICAgICAgICAgICA8S3BpQ29tcG9uZW50QmFycyB0aXRsZT17J0RldGVuY2lvbmVzJ30gY29sb3JzPXtjb2xvcnM1fSBkYXRhc2V0QT17Y291bnRDaGFyYWN0ZXJzR2FtZUJ5V29ybGQoKX0gZGF0YXNldEI9e2NvdW50Q2hhcmFjdGVyc1N0b3J5QnlXb3JsZCgpfSBkYXRhS2V5PXtbXCJ3b3JsZFwiXX0gLz5cbiAgICAgICAgICAgIDxLcGlDb21wb25lbnRCYXJzIHRpdGxlPXsnQXJyZXN0byBkb21pY2lsaWFyaW8nfSBjb2xvcnM9e2NvbG9yczZ9IGRhdGFzZXRBPXtjb3VudENoYXJhY3RlcnNHYW1lQnlXb3JsZCgpfSBkYXRhc2V0Qj17Y291bnRDaGFyYWN0ZXJzU3RvcnlCeVdvcmxkKCl9IGRhdGFLZXk9e1tcIndvcmxkXCJdfSAvPlxuICAgICAgICA8L0JveCA+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJCb3giLCJDaXJjdWxhclByb2dyZXNzIiwiUmVhY3QiLCJ1c2VDaGFyYWN0ZXJzU3RvcnkiLCJ1c2VDaGFyYWN0ZXJzR2FtZSIsIktwaUNvbXBvbmVudEJhcnMiLCJQYWdlIiwiZGF0YSIsImNoYXJhY3RlcnNTdG9yeSIsImlzTG9hZGluZyIsImlzTG9hZGluZ1N0b3J5IiwiaXNFcnJvciIsImlzRXJyb3JTdG9yeSIsImNvdW50Q2hhcmFjdGVyc0J5V29ybGQiLCJjb3VudENoYXJhY3RlcnNTdG9yeUJ5V29ybGQiLCJjaGFyYWN0ZXJzR2FtZSIsImlzTG9hZGluZ0dhbWUiLCJpc0Vycm9yR2FtZSIsImNvdW50Q2hhcmFjdGVyc0dhbWVCeVdvcmxkIiwiY29sb3JzMSIsImNvbG9yczIiLCJjb2xvcnMzIiwiY29sb3JzNCIsImNvbG9yczUiLCJjb2xvcnM2Iiwic3giLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImZpbHRlciIsImJvcmRlclJhZGl1cyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZmxleFdyYXAiLCJvdmVyZmxvdyIsImdhcCIsInBhZGRpbmciLCJ0aXRsZSIsImNvbG9ycyIsImRhdGFzZXRBIiwiZGF0YXNldEIiLCJkYXRhS2V5IiwiS3BpQ29tcG9uZW50TGluZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/page.tsx\n"));

/***/ })

});