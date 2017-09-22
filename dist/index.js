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
var ReactDOM = require("react-dom");
var Hello_1 = require("./components/Hello");
var HelloWorld_1 = require("./components/HelloWorld");
var sfc_1 = require("./components/sfc");
var Main = (function (_super) {
    __extends(Main, _super);
    function Main(props) {
        return _super.call(this, props) || this;
    }
    Main.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(HelloWorld_1.HelloWorld, { defaultName: 'World' })));
    };
    return Main;
}(React.Component));
ReactDOM.render(React.createElement("div", null,
    React.createElement(Main, null),
    React.createElement("hr", null),
    React.createElement(Main, null),
    React.createElement("hr", null),
    React.createElement(Hello_1.Hello, { compiler: "TypeScript", framework: "React" }),
    React.createElement(Hello_1.Hello, null),
    React.createElement(sfc_1.ExampleStatelessComponent, null),
    React.createElement(sfc_1.ExampleStatelessValueComponent, { value: "donaldpipowitch" }),
    React.createElement(sfc_1.Input, { type: "number" }),
    React.createElement(sfc_1.Button, null, "Test")), document.getElementById("root"));
//# sourceMappingURL=index.js.map