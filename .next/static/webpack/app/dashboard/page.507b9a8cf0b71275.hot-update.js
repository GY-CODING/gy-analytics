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

/***/ "(app-pages-browser)/./src/components/KpiComponentCircle.tsx":
/*!***********************************************!*\
  !*** ./src/components/KpiComponentCircle.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   KpiComponentCircle: function() { return /* binding */ KpiComponentCircle; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_x_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/x-charts */ \"(app-pages-browser)/./node_modules/@mui/x-charts/esm/PieChart/PieChart.js\");\n/* __next_internal_client_entry_do_not_use__ KpiComponentCircle auto */ \n\n\n\nfunction KpiComponentCircle(param) {\n    let { title, colors, datasetA, datasetB } = param;\n    const valueFormatter = (value)=>\"\".concat(value, \" characters\");\n    const chartDataStory = Object.entries(datasetA).map((param)=>{\n        let [world, count] = param;\n        return {\n            world,\n            count\n        };\n    });\n    const chartDataGame = Object.entries(datasetB).map((param)=>{\n        let [world, count] = param;\n        return {\n            world,\n            count\n        };\n    });\n    const combinedDataset = chartDataGame.map((gameData, index)=>({\n            world: gameData.world,\n            storyCount: chartDataStory[index].count,\n            gameCount: gameData.count\n        }));\n    const data = [\n        {\n            id: 0,\n            value: 10,\n            label: \"series A\"\n        },\n        {\n            id: 1,\n            value: 15,\n            label: \"series B\"\n        },\n        {\n            id: 2,\n            value: 20,\n            label: \"series C\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        sx: {\n            filter: \"drop-shadow(0px 0px 10px #09090b)\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                variant: \"h6\",\n                sx: {\n                    textAlign: \"left\",\n                    marginLeft: \"2%\",\n                    fontFamily: \"lexend\",\n                    color: \"#e5e5e5\"\n                },\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/guillermofiguerasjimenez/Projects/gycoding/gy-analytics/src/components/KpiComponentCircle.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_charts__WEBPACK_IMPORTED_MODULE_4__.PieChart, {\n                xAxis: [\n                    {\n                        scaleType: \"band\",\n                        data: combinedDataset.map((data)=>data.world),\n                        tickFontSize: 10\n                    }\n                ],\n                series: [\n                    {\n                        data,\n                        highlightScope: {\n                            faded: \"global\",\n                            highlighted: \"item\"\n                        },\n                        faded: {\n                            innerRadius: 30,\n                            additionalRadius: -30,\n                            color: \"gray\"\n                        }\n                    }\n                ],\n                sx: {\n                    \"tspan\": {\n                        fill: \"transparent\",\n                        userSelect: \"none\",\n                        pointerEvents: \"none\"\n                    },\n                    \"& .MuiChartsAxis-line\": {\n                        stroke: \"transparent\",\n                        display: \"none\"\n                    },\n                    \"& .MuiChartsAxis-tick\": {\n                        stroke: \"transparent\",\n                        display: \"none\"\n                    },\n                    backgroundColor: \"#262626\",\n                    borderRadius: \"10px\"\n                },\n                colors: colors,\n                width: 470,\n                dataset: combinedDataset.map((data)=>({\n                        world: data.world,\n                        storyCount: data.storyCount,\n                        gameCount: data.gameCount\n                    })),\n                height: 320,\n                viewBox: {\n                    x: 0,\n                    y: 15,\n                    width: 500,\n                    height: 380\n                }\n            }, void 0, false, {\n                fileName: \"/Users/guillermofiguerasjimenez/Projects/gycoding/gy-analytics/src/components/KpiComponentCircle.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/guillermofiguerasjimenez/Projects/gycoding/gy-analytics/src/components/KpiComponentCircle.tsx\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, this);\n}\n_c = KpiComponentCircle;\nvar _c;\n$RefreshReg$(_c, \"KpiComponentCircle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0twaUNvbXBvbmVudENpcmNsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDK0M7QUFDdEI7QUFDZTtBQUVqQyxTQUFTSSxtQkFBbUIsS0FBNkQ7UUFBN0QsRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUEwQixHQUE3RDtJQUUvQixNQUFNQyxpQkFBaUIsQ0FBQ0MsUUFBeUIsR0FBUyxPQUFOQSxPQUFNO0lBRTFELE1BQU1DLGlCQUFpQkMsT0FBT0MsT0FBTyxDQUFDTixVQUFVTyxHQUFHLENBQUM7WUFBQyxDQUFDQyxPQUFPQyxNQUFNO2VBQU07WUFDckVEO1lBQ0FDO1FBQ0o7O0lBQ0EsTUFBTUMsZ0JBQWdCTCxPQUFPQyxPQUFPLENBQUNMLFVBQVdNLEdBQUcsQ0FBQztZQUFDLENBQUNDLE9BQU9DLE1BQU07ZUFBTTtZQUNyRUQ7WUFDQUM7UUFDSjs7SUFFQSxNQUFNRSxrQkFBa0JELGNBQWNILEdBQUcsQ0FBQyxDQUFDSyxVQUFVQyxRQUFXO1lBQzVETCxPQUFPSSxTQUFTSixLQUFLO1lBQ3JCTSxZQUFZVixjQUFjLENBQUNTLE1BQU0sQ0FBQ0osS0FBSztZQUN2Q00sV0FBV0gsU0FBU0gsS0FBSztRQUM3QjtJQUdBLE1BQU1PLE9BQU87UUFDVDtZQUFFQyxJQUFJO1lBQUdkLE9BQU87WUFBSWUsT0FBTztRQUFXO1FBQ3RDO1lBQUVELElBQUk7WUFBR2QsT0FBTztZQUFJZSxPQUFPO1FBQVc7UUFDdEM7WUFBRUQsSUFBSTtZQUFHZCxPQUFPO1lBQUllLE9BQU87UUFBVztLQUN6QztJQUVELHFCQUNJLDhEQUFDekIsMEZBQUdBO1FBQUMwQixJQUFJO1lBQ0xDLFFBQVE7UUFDWjs7MEJBQ0ksOERBQUMxQiwwRkFBVUE7Z0JBQUMyQixTQUFRO2dCQUFLRixJQUFJO29CQUFFRyxXQUFXO29CQUFRQyxZQUFZO29CQUFNQyxZQUFZO29CQUFVQyxPQUFPO2dCQUFVOzBCQUFJM0I7Ozs7OzswQkFDL0csOERBQUNGLG1EQUFRQTtnQkFFTDhCLE9BQU87b0JBQUM7d0JBQUVDLFdBQVc7d0JBQVFYLE1BQU1MLGdCQUFnQkosR0FBRyxDQUFDLENBQUNTLE9BQVNBLEtBQUtSLEtBQUs7d0JBQUdvQixjQUFjO29CQUFHO2lCQUFFO2dCQUNqR0MsUUFBUTtvQkFDSjt3QkFDSWI7d0JBQ0FjLGdCQUFnQjs0QkFBRUMsT0FBTzs0QkFBVUMsYUFBYTt3QkFBTzt3QkFDdkRELE9BQU87NEJBQUVFLGFBQWE7NEJBQUlDLGtCQUFrQixDQUFDOzRCQUFJVCxPQUFPO3dCQUFPO29CQUNuRTtpQkFDSDtnQkFDRE4sSUFBSTtvQkFDQSxTQUFTO3dCQUNMZ0IsTUFBTTt3QkFDTkMsWUFBWTt3QkFDWkMsZUFBZTtvQkFDbkI7b0JBQ0EseUJBQXlCO3dCQUFFQyxRQUFRO3dCQUFlQyxTQUFTO29CQUFPO29CQUNsRSx5QkFBeUI7d0JBQUVELFFBQVE7d0JBQWVDLFNBQVM7b0JBQU87b0JBQ2xFQyxpQkFBaUI7b0JBQVdDLGNBQWM7Z0JBQzlDO2dCQUNBMUMsUUFBUUE7Z0JBQ1IyQyxPQUFPO2dCQUNQQyxTQUFTaEMsZ0JBQWdCSixHQUFHLENBQUMsQ0FBQ1MsT0FBVTt3QkFBRVIsT0FBT1EsS0FBS1IsS0FBSzt3QkFBWU0sWUFBWUUsS0FBS0YsVUFBVTt3QkFBRUMsV0FBV0MsS0FBS0QsU0FBUztvQkFBQztnQkFDOUg2QixRQUFRO2dCQUNSQyxTQUFTO29CQUFFQyxHQUFHO29CQUFHQyxHQUFHO29CQUFJTCxPQUFPO29CQUFLRSxRQUFRO2dCQUFJOzs7Ozs7Ozs7Ozs7QUFHaEU7S0ExRGdCL0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvS3BpQ29tcG9uZW50Q2lyY2xlLnRzeD81ODIzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgQm94LCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFBpZUNoYXJ0IH0gZnJvbSAnQG11aS94LWNoYXJ0cydcblxuZXhwb3J0IGZ1bmN0aW9uIEtwaUNvbXBvbmVudENpcmNsZSh7IHRpdGxlLCBjb2xvcnMsIGRhdGFzZXRBLCBkYXRhc2V0QiB9OiBCYXJDb21wb25lbnRMaW5lc1Byb3BzKTogSlNYLkVsZW1lbnQge1xuXG4gICAgY29uc3QgdmFsdWVGb3JtYXR0ZXIgPSAodmFsdWU6IG51bWJlciB8IG51bGwpID0+IGAke3ZhbHVlfSBjaGFyYWN0ZXJzYDtcblxuICAgIGNvbnN0IGNoYXJ0RGF0YVN0b3J5ID0gT2JqZWN0LmVudHJpZXMoZGF0YXNldEEpLm1hcCgoW3dvcmxkLCBjb3VudF0pID0+ICh7XG4gICAgICAgIHdvcmxkLFxuICAgICAgICBjb3VudCxcbiAgICB9KSk7XG4gICAgY29uc3QgY2hhcnREYXRhR2FtZSA9IE9iamVjdC5lbnRyaWVzKGRhdGFzZXRCISkubWFwKChbd29ybGQsIGNvdW50XSkgPT4gKHtcbiAgICAgICAgd29ybGQsXG4gICAgICAgIGNvdW50LFxuICAgIH0pKTtcblxuICAgIGNvbnN0IGNvbWJpbmVkRGF0YXNldCA9IGNoYXJ0RGF0YUdhbWUubWFwKChnYW1lRGF0YSwgaW5kZXgpID0+ICh7XG4gICAgICAgIHdvcmxkOiBnYW1lRGF0YS53b3JsZCxcbiAgICAgICAgc3RvcnlDb3VudDogY2hhcnREYXRhU3RvcnlbaW5kZXhdLmNvdW50LFxuICAgICAgICBnYW1lQ291bnQ6IGdhbWVEYXRhLmNvdW50LFxuICAgIH0pKTtcblxuXG4gICAgY29uc3QgZGF0YSA9IFtcbiAgICAgICAgeyBpZDogMCwgdmFsdWU6IDEwLCBsYWJlbDogJ3NlcmllcyBBJyB9LFxuICAgICAgICB7IGlkOiAxLCB2YWx1ZTogMTUsIGxhYmVsOiAnc2VyaWVzIEInIH0sXG4gICAgICAgIHsgaWQ6IDIsIHZhbHVlOiAyMCwgbGFiZWw6ICdzZXJpZXMgQycgfSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveCBzeD17e1xuICAgICAgICAgICAgZmlsdGVyOiBcImRyb3Atc2hhZG93KDBweCAwcHggMTBweCAjMDkwOTBiKVwiLFxuICAgICAgICB9fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIHN4PXt7IHRleHRBbGlnbjogJ2xlZnQnLCBtYXJnaW5MZWZ0OiAnMiUnLCBmb250RmFtaWx5OiAnbGV4ZW5kJywgY29sb3I6ICcjZTVlNWU1JyB9fT57dGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFBpZUNoYXJ0XG5cbiAgICAgICAgICAgICAgICB4QXhpcz17W3sgc2NhbGVUeXBlOiAnYmFuZCcsIGRhdGE6IGNvbWJpbmVkRGF0YXNldC5tYXAoKGRhdGEpID0+IGRhdGEud29ybGQpLCB0aWNrRm9udFNpemU6IDEwIH1dfVxuICAgICAgICAgICAgICAgIHNlcmllcz17W1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0U2NvcGU6IHsgZmFkZWQ6ICdnbG9iYWwnLCBoaWdobGlnaHRlZDogJ2l0ZW0nIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWRlZDogeyBpbm5lclJhZGl1czogMzAsIGFkZGl0aW9uYWxSYWRpdXM6IC0zMCwgY29sb3I6ICdncmF5JyB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgJ3RzcGFuJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAnJiAuTXVpQ2hhcnRzQXhpcy1saW5lJzogeyBzdHJva2U6ICd0cmFuc3BhcmVudCcsIGRpc3BsYXk6ICdub25lJyB9LFxuICAgICAgICAgICAgICAgICAgICAnJiAuTXVpQ2hhcnRzQXhpcy10aWNrJzogeyBzdHJva2U6ICd0cmFuc3BhcmVudCcsIGRpc3BsYXk6ICdub25lJyB9LFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjYyNjI2JywgYm9yZGVyUmFkaXVzOiAnMTBweCcsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjb2xvcnM9e2NvbG9yc31cbiAgICAgICAgICAgICAgICB3aWR0aD17NDcwfVxuICAgICAgICAgICAgICAgIGRhdGFzZXQ9e2NvbWJpbmVkRGF0YXNldC5tYXAoKGRhdGEpID0+ICh7IHdvcmxkOiBkYXRhLndvcmxkIGFzIHN0cmluZywgc3RvcnlDb3VudDogZGF0YS5zdG9yeUNvdW50LCBnYW1lQ291bnQ6IGRhdGEuZ2FtZUNvdW50IH0pKX1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezMyMH1cbiAgICAgICAgICAgICAgICB2aWV3Qm94PXt7IHg6IDAsIHk6IDE1LCB3aWR0aDogNTAwLCBoZWlnaHQ6IDM4MCB9fSAvPlxuICAgICAgICA8L0JveD5cbiAgICApXG59XG5cbmludGVyZmFjZSBCYXJDb21wb25lbnRMaW5lc1Byb3BzIHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGNvbG9yczogc3RyaW5nW107XG4gICAgZGF0YXNldEE6IFJlY29yZDxzdHJpbmcsIG51bWJlcj47XG4gICAgZGF0YXNldEI/OiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+O1xuICAgIGRhdGFLZXk6IHN0cmluZ1tdO1xufSJdLCJuYW1lcyI6WyJCb3giLCJUeXBvZ3JhcGh5IiwiUmVhY3QiLCJQaWVDaGFydCIsIktwaUNvbXBvbmVudENpcmNsZSIsInRpdGxlIiwiY29sb3JzIiwiZGF0YXNldEEiLCJkYXRhc2V0QiIsInZhbHVlRm9ybWF0dGVyIiwidmFsdWUiLCJjaGFydERhdGFTdG9yeSIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJ3b3JsZCIsImNvdW50IiwiY2hhcnREYXRhR2FtZSIsImNvbWJpbmVkRGF0YXNldCIsImdhbWVEYXRhIiwiaW5kZXgiLCJzdG9yeUNvdW50IiwiZ2FtZUNvdW50IiwiZGF0YSIsImlkIiwibGFiZWwiLCJzeCIsImZpbHRlciIsInZhcmlhbnQiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5MZWZ0IiwiZm9udEZhbWlseSIsImNvbG9yIiwieEF4aXMiLCJzY2FsZVR5cGUiLCJ0aWNrRm9udFNpemUiLCJzZXJpZXMiLCJoaWdobGlnaHRTY29wZSIsImZhZGVkIiwiaGlnaGxpZ2h0ZWQiLCJpbm5lclJhZGl1cyIsImFkZGl0aW9uYWxSYWRpdXMiLCJmaWxsIiwidXNlclNlbGVjdCIsInBvaW50ZXJFdmVudHMiLCJzdHJva2UiLCJkaXNwbGF5IiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwid2lkdGgiLCJkYXRhc2V0IiwiaGVpZ2h0Iiwidmlld0JveCIsIngiLCJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/KpiComponentCircle.tsx\n"));

/***/ })

});