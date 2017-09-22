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
var FormatName = (function (_super) {
    __extends(FormatName, _super);
    function FormatName(user, lastname) {
        var _this = _super.call(this, firstName, lastname) || this;
        _this.firstName = "ciao";
        _this.lastName = "CIAO";
        return _this;
    }
    FormatName.prototype.render = function () {
        return (React.createElement("div", null, "ciao"));
    };
    return FormatName;
}(React.Component));
exports.FormatName = FormatName;
exports.default = FormatName;
//# sourceMappingURL=FormatName.js.map