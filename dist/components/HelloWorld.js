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
var HelloForm_1 = require("./HelloForm");
var HelloContent_1 = require("./HelloContent");
var HelloWorld = (function (_super) {
    __extends(HelloWorld, _super);
    function HelloWorld(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { name: _this.props.defaultName };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    HelloWorld.prototype.handleChange = function (event) {
        this.setState({ name: event.target.value });
    };
    HelloWorld.prototype.render = function () {
        return (React.createElement("div", { style: { background: 'red' } },
            React.createElement(HelloForm_1.default, { name: this.state.name, handleChange: this.handleChange }),
            React.createElement(HelloContent_1.default, { name: this.state.name })));
    };
    return HelloWorld;
}(React.Component));
exports.HelloWorld = HelloWorld;
//# sourceMappingURL=HelloWorld.js.map