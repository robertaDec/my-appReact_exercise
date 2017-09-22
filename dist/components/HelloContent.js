"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var HelloContent = (function (_super) {
    __extends(HelloContent, _super);
    function HelloContent(props) {
        return _super.call(this, props) || this;
    }
    HelloContent.prototype.render = function () {
        return (React.createElement("div", null,
            "Hello ",
            this.props.name,
            "!"));
    };
    return HelloContent;
}(React.Component));
exports.default = HelloContent;
//# sourceMappingURL=HelloContent.js.map