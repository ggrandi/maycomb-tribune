webpackHotUpdate("static/development/pages/stories/[id].js",{

/***/ "./components/ArticleRenderer.tsx":
/*!****************************************!*\
  !*** ./components/ArticleRenderer.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _this = undefined,
    _jsxFileName = "/Users/giovannigrandi/Programming/maycomb-tribune/maycomb-tribune-website/components/ArticleRenderer.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/**
 * Renders an article with images
 */
var ArticleRender = function ArticleRender(_ref) {
  var ImageRenderer = _ref.ImageRenderer,
      TextRenderer = _ref.TextRenderer,
      body = _ref.body,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? "" : _ref$name;
  var elems = body.split(/%%|\n/).map(function (el, i) {
    if (/^\[("|')i(\1),\s?(\1.+\1),\s?(\1.+\1)\]$/.test(el)) {
      var _JSON$parse = JSON.parse(el),
          _JSON$parse2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_JSON$parse, 3),
          url = _JSON$parse2[1],
          caption = _JSON$parse2[2];

      return __jsx(ImageRenderer, {
        url: url,
        caption: caption,
        key: "".concat(name).concat(i).concat(url),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 14
        }
      });
    }

    return __jsx(TextRenderer, {
      text: el,
      key: "".concat(name).concat(i).concat(el.substr(0, 10)),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 12
      }
    });
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, elems);
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleRender);

/***/ })

})
//# sourceMappingURL=[id].js.8d9865d63fae06a24144.hot-update.js.map