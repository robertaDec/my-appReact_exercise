"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
exports.ExampleStatelessComponent = function () { return react_1.default.createElement("p", null, "Hello world!"); };
exports.ExampleStatelessValueComponent = function (_a) {
    var value = _a.value;
    return react_1.default.createElement("p", null,
        "Hello ",
        value,
        "!");
};
exports.Input = function (props) { return react_1.default.createElement("input", __assign({ type: "text" }, props)); };
exports.Button = function (props) { return react_1.default.createElement("button", __assign({}, props, { type: "button" })); };
//# sourceMappingURL=sfc.js.map