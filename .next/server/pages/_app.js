(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./contexts/theme/ThemeContainer.tsx":
/*!*******************************************!*\
  !*** ./contexts/theme/ThemeContainer.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var emotion_theming__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emotion-theming */ "emotion-theming");
/* harmony import */ var emotion_theming__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(emotion_theming__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.ts");

var _jsxFileName = "C:\\Users\\Usu\xE1rio\\Desktop\\sitetest\\taitailoja\\contexts\\theme\\ThemeContainer.tsx";





const ThemeContainer = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
    theme: _styles_theme__WEBPACK_IMPORTED_MODULE_4__.default,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__.ColorModeProvider, {
      value: "light",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(emotion_theming__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {
        theme: _styles_theme__WEBPACK_IMPORTED_MODULE_4__.default,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__.CSSReset, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined), children]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ThemeContainer);

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_theme_ThemeContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/theme/ThemeContainer */ "./contexts/theme/ThemeContainer.tsx");

var _jsxFileName = "C:\\Users\\Usu\xE1rio\\Desktop\\sitetest\\taitailoja\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_theme_ThemeContainer__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/theme.ts":
/*!*************************!*\
  !*** ./styles/theme.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const customTheme = _objectSpread(_objectSpread({}, _chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__.theme), {}, {
  fonts: {
    body: 'Poppins, system-ui, sans-serif',
    heading: 'Poppins, system-ui, sans-serif',
    mono: 'Menlo, monospace'
  },
  fontWeights: _objectSpread(_objectSpread({}, _chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__.theme.fontWeights), {}, {
    normal: 400,
    medium: 600,
    bold: 700
  }),
  radii: _objectSpread(_objectSpread({}, _chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__.theme.radii), {}, {
    sm: '5px',
    md: '8px'
  }),
  colors: _objectSpread(_objectSpread({}, _chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__.theme.colors), {}, {
    purple: _objectSpread(_objectSpread({}, _chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__.theme.colors.purple), {}, {
      100: '#BA55D3',
      500: '#8257e5'
    }),
    gray: _objectSpread(_objectSpread({}, _chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__.theme.colors.gray), {}, {
      300: '#e1e1e6',
      600: '#29292e',
      700: '#202024',
      800: '#121214'
    })
  })
});

/* harmony default export */ __webpack_exports__["default"] = (customTheme);

/***/ }),

/***/ "@chakra-ui/core":
/*!**********************************!*\
  !*** external "@chakra-ui/core" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/core");;

/***/ }),

/***/ "emotion-theming":
/*!**********************************!*\
  !*** external "emotion-theming" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("emotion-theming");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWl0YWlsb2phLy4vY29udGV4dHMvdGhlbWUvVGhlbWVDb250YWluZXIudHN4Iiwid2VicGFjazovL3RhaXRhaWxvamEvLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly90YWl0YWlsb2phLy4vc3R5bGVzL3RoZW1lLnRzIiwid2VicGFjazovL3RhaXRhaWxvamEvZXh0ZXJuYWwgXCJAY2hha3JhLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly90YWl0YWlsb2phL2V4dGVybmFsIFwiZW1vdGlvbi10aGVtaW5nXCIiLCJ3ZWJwYWNrOi8vdGFpdGFpbG9qYS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vdGFpdGFpbG9qYS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlRoZW1lQ29udGFpbmVyIiwiY2hpbGRyZW4iLCJ0aGVtZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY3VzdG9tVGhlbWUiLCJmb250cyIsImJvZHkiLCJoZWFkaW5nIiwibW9ubyIsImZvbnRXZWlnaHRzIiwibm9ybWFsIiwibWVkaXVtIiwiYm9sZCIsInJhZGlpIiwic20iLCJtZCIsImNvbG9ycyIsInB1cnBsZSIsImdyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBTUE7QUFFQTs7QUFFQSxNQUFNQSxjQUF3QixHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBQ2pELHNCQUNFLDhEQUFDLDBEQUFEO0FBQXFCLFNBQUssRUFBRUMsa0RBQTVCO0FBQUEsMkJBQ0UsOERBQUMsOERBQUQ7QUFBbUIsV0FBSyxFQUFDLE9BQXpCO0FBQUEsNkJBQ0UsOERBQUMsMERBQUQ7QUFBc0IsYUFBSyxFQUFFQSxrREFBN0I7QUFBQSxnQ0FDRSw4REFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBRUdELFFBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVVELENBWEQ7O0FBYUEsK0RBQWVELGNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBOztBQUVBLFNBQVNHLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxzQkFDRSw4REFBQyxtRUFBRDtBQUFBLDJCQUNFLDhEQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztBQUVELCtEQUFlRixLQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7O0FBRUEsTUFBTUcsV0FBeUIsbUNBQzFCSixrREFEMEI7QUFFN0JLLE9BQUssRUFBRTtBQUNMQyxRQUFJLEVBQUUsZ0NBREQ7QUFFTEMsV0FBTyxFQUFFLGdDQUZKO0FBR0xDLFFBQUksRUFBRTtBQUhELEdBRnNCO0FBTzdCQyxhQUFXLGtDQUNOVCw4REFETTtBQUVUVSxVQUFNLEVBQUUsR0FGQztBQUdUQyxVQUFNLEVBQUUsR0FIQztBQUlUQyxRQUFJLEVBQUU7QUFKRyxJQVBrQjtBQWE3QkMsT0FBSyxrQ0FDQWIsd0RBREE7QUFFSGMsTUFBRSxFQUFFLEtBRkQ7QUFHSEMsTUFBRSxFQUFFO0FBSEQsSUFid0I7QUFrQjdCQyxRQUFNLGtDQUNEaEIseURBREM7QUFFSmlCLFVBQU0sa0NBQ0RqQixnRUFEQztBQUVKLFdBQUssU0FGRDtBQUdKLFdBQUs7QUFIRCxNQUZGO0FBT0prQixRQUFJLGtDQUNHbEIsOERBREg7QUFFQSxXQUFLLFNBRkw7QUFHQSxXQUFLLFNBSEw7QUFJQSxXQUFLLFNBSkw7QUFLQSxXQUFLO0FBTEw7QUFQQTtBQWxCdUIsRUFBL0I7O0FBbUNBLCtEQUFlSSxXQUFmLEU7Ozs7Ozs7Ozs7O0FDckNBLDZDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgXHJcbiAgVGhlbWVQcm92aWRlciBhcyBDaGFrcmFUaGVtZVByb3ZpZGVyLCBcclxuICBDb2xvck1vZGVQcm92aWRlcixcclxuICBDU1NSZXNldFxyXG59IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIGFzIEVtb3Rpb25UaGVtZVByb3ZpZGVyIH0gZnJvbSAnZW1vdGlvbi10aGVtaW5nJ1xyXG5cclxuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uL3N0eWxlcy90aGVtZSc7XHJcblxyXG5jb25zdCBUaGVtZUNvbnRhaW5lcjogUmVhY3QuRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDaGFrcmFUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgIDxDb2xvck1vZGVQcm92aWRlciB2YWx1ZT1cImxpZ2h0XCI+XHJcbiAgICAgICAgPEVtb3Rpb25UaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgICA8Q1NTUmVzZXQgLz5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0Vtb3Rpb25UaGVtZVByb3ZpZGVyPlxyXG4gICAgICA8L0NvbG9yTW9kZVByb3ZpZGVyPlxyXG4gICAgPC9DaGFrcmFUaGVtZVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRoZW1lQ29udGFpbmVyOyIsIlxuaW1wb3J0IFRoZW1lQ29udGFpbmVyIGZyb20gXCIuLi9jb250ZXh0cy90aGVtZS9UaGVtZUNvbnRhaW5lclwiXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZUNvbnRhaW5lcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1RoZW1lQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwIiwiaW1wb3J0IHsgdGhlbWUsIERlZmF1bHRUaGVtZSB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSdcclxuXHJcbmNvbnN0IGN1c3RvbVRoZW1lOiBEZWZhdWx0VGhlbWUgPSB7XHJcbiAgLi4udGhlbWUsXHJcbiAgZm9udHM6IHtcclxuICAgIGJvZHk6ICdQb3BwaW5zLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYnLFxyXG4gICAgaGVhZGluZzogJ1BvcHBpbnMsIHN5c3RlbS11aSwgc2Fucy1zZXJpZicsXHJcbiAgICBtb25vOiAnTWVubG8sIG1vbm9zcGFjZSdcclxuICB9LFxyXG4gIGZvbnRXZWlnaHRzOiB7XHJcbiAgICAuLi50aGVtZS5mb250V2VpZ2h0cyxcclxuICAgIG5vcm1hbDogNDAwLFxyXG4gICAgbWVkaXVtOiA2MDAsXHJcbiAgICBib2xkOiA3MDAsXHJcbiAgfSxcclxuICByYWRpaToge1xyXG4gICAgLi4udGhlbWUucmFkaWksXHJcbiAgICBzbTogJzVweCcsXHJcbiAgICBtZDogJzhweCcsXHJcbiAgfSxcclxuICBjb2xvcnM6IHtcclxuICAgIC4uLnRoZW1lLmNvbG9ycyxcclxuICAgIHB1cnBsZToge1xyXG4gICAgICAuLi50aGVtZS5jb2xvcnMucHVycGxlLFxyXG4gICAgICAxMDA6ICcjQkE1NUQzJyxcclxuICAgICAgNTAwOiAnIzgyNTdlNScsXHJcbiAgICB9LFxyXG4gICAgZ3JheToge1xyXG4gICAgICAgIC4uLnRoZW1lLmNvbG9ycy5ncmF5LFxyXG4gICAgICAgIDMwMDogJyNlMWUxZTYnLFxyXG4gICAgICAgIDYwMDogJyMyOTI5MmUnLFxyXG4gICAgICAgIDcwMDogJyMyMDIwMjQnLFxyXG4gICAgICAgIDgwMDogJyMxMjEyMTQnXHJcbiAgICB9LFxyXG4gIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1c3RvbVRoZW1lOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvY29yZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZW1vdGlvbi10aGVtaW5nXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9