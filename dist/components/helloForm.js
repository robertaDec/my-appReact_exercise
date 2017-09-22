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
var HelloForm = (function (_super) {
    __extends(HelloForm, _super);
    function HelloForm(props) {
        return _super.call(this, props) || this;
    }
    HelloForm.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("input", { value: this.props.name, onChange: function (e) { return _this.props.handleChange(e); }, style: { background: "yellow", color: "red" } })));
    };
    return HelloForm;
}(React.Component));
exports.default = HelloForm;
//# sourceMappingURL=helloForm.js.map