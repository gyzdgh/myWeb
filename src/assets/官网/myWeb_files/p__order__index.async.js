(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["p__order__index"],{

/***/ "./node_modules/axios/index.js":
/*!***********************************************************************!*\
  !*** delegated ../node_modules/axios/index.js from dll-reference umi ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference umi */ "dll-reference umi"))("./node_modules/axios/index.js");

/***/ }),

/***/ "./src/pages/order/index.css":
/*!***********************************!*\
  !*** ./src/pages/order/index.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"order":"index__order___2SSCs","top":"index__top___2pLDa","deal":"index__deal___qXo0w","goods":"index__goods___2PF_N","clearBoth":"index__clearBoth___2Tv5L","product":"index__product___34fKY","product_title":"index__product_title___1fxsN","pay_over":"index__pay_over___1AYgf","pay_fail":"index__pay_fail___2Grtx","product_content":"index__product_content___1J5Yi","content_mess":"index__content_mess___1xthg","mess_title":"index__mess_title___3BVal","mess_time":"index__mess_time___2bVSX","pay":"index__pay___1KiKj","logistics":"index__logistics___3mLPQ","pay_for":"index__pay_for___2aMZX"};
    if(true) {
      // 1564587515996
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"publicPath":"/","hmr":true,"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/pages/order/index.js":
/*!**********************************!*\
  !*** ./src/pages/order/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Order; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/pages/order/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);



class Order extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    // 为给定 ID 的 user 创建请求
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://yapi.demo.qunar.com/mock/84959/admin/getOrder?type=1').then(response => {
      this.setState({
        data: response.data.data.list
      });
    }).catch(function (error) {
      console.log(error);
    });
  }

  render() {
    var renderTime = (item, status) => {
      var html = '';

      if (status === 10) {
        html = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u4ED8\u6B3E\u5269\u4F59\uFF1A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, item.endTiem), "/>");
      } else if (status === 30) {
        html = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u4ED8\u6B3E\u65F6\u95F4\uFF1A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, item.paidTime), "/>");
      } else if (status === 40) {
        html = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u53D1\u8D27\u65F6\u95F4\uFF1A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, item.deliveryTime), "/>");
      } else if (status === 50) {
        html = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u6536\u8D27\u65F6\u95F4"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, item.receiveTime), "/>");
      } else if (status === 60) {
        html = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u7ED3\u675F\u65F6\u95F4"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, item.cancelTime), "/>");
      }

      return html;
    };

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _index_css__WEBPACK_IMPORTED_MODULE_2___default.a.order
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _index_css__WEBPACK_IMPORTED_MODULE_2___default.a.top
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: _index_css__WEBPACK_IMPORTED_MODULE_2___default.a.deal
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "\u4EA4\u6613\u8BA2\u5355")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: _index_css__WEBPACK_IMPORTED_MODULE_2___default.a.goods
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "\u63D0\u8D27\u8BA2\u5355"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _index_css__WEBPACK_IMPORTED_MODULE_2___default.a.clearBoth
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _index_css__WEBPACK_IMPORTED_MODULE_2___default.a.detail
    }, this.state.data.map(item => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _index_css__WEBPACK_IMPORTED_MODULE_2___default.a.product
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _index_css__WEBPACK_IMPORTED_MODULE_2___default.a.product_title
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u300C\u53D1\u884C\u53F7 ", item.publishNo || '000', "\u300D"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, item.statusName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _index_css__WEBPACK_IMPORTED_MODULE_2___default.a.product_content
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _index_css__WEBPACK_IMPORTED_MODULE_2___default.a.content_mess
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _index_css__WEBPACK_IMPORTED_MODULE_2___default.a.mess_title
      }, item.goodsTitle)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, renderTime(item, item.state)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u6570\u91CF\u2003\u2003\uFF1A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, item.num, "\u4E2A")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u63D0\u8D27\u8D39\u2003\uFF1A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\xA5 ", item.payMoney))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _index_css__WEBPACK_IMPORTED_MODULE_2___default.a.pay
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: _index_css__WEBPACK_IMPORTED_MODULE_2___default.a.logistics
      }, "\u67E5\u770B\u7269\u6D41"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: _index_css__WEBPACK_IMPORTED_MODULE_2___default.a.pay_for
      }, "\u7ACB\u5373\u4ED8\u6B3E")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _index_css__WEBPACK_IMPORTED_MODULE_2___default.a.clearBoth
      }));
    })));
  }

}

/***/ })

}]);
//# sourceMappingURL=p__order__index.async.js.map