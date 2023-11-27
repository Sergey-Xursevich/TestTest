'use strict';

var React = require('react');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

var SvgArrowBackIos = function SvgArrowBackIos(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#323232",
    d: "M17.51 3.87 15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13"
  }));
};

exports.ArrowBackIos = SvgArrowBackIos;
