"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AbstractClass = /** @class */ (function () {
    function AbstractClass() {
        this.aclass = "AClass";
        console.log("Constructor of Abstract class");
        this.bclass = "4";
        this.cclass = "5";
    }
    AbstractClass.prototype.testMethod = function () {
        console.log(this.aclass);
    };
    AbstractClass.myStaticMethod = function () {
        //console.log("Call to static method: ", this.aclass); cannot use this inside static method
        //console.log("Call to static method: ", aclass); cannot use directly
        //console.log("Call to static method: ", AbstractClass.aclass); cannot use with class name
        console.log("Call to static method: ", this.sclass); // valid
        //console.log("Call to static method: ", sclass);cannot use directly
        console.log("Call to static method: ", AbstractClass.sclass);
    };
    AbstractClass.sclass = "SClass";
    return AbstractClass;
}());
var ChildClass = /** @class */ (function (_super) {
    __extends(ChildClass, _super);
    function ChildClass(prop1) {
        var _this = 
        // readonly properties can be initialized in constructor
        _super.call(this) || this;
        _this.prop1 = prop1;
        return _this;
    }
    ChildClass.prototype.myMethod1 = function () {
        console.log("My Method called from child class");
    };
    return ChildClass;
}(AbstractClass));
var ThirdClass = /** @class */ (function (_super) {
    __extends(ThirdClass, _super);
    function ThirdClass(prop1) {
        var _this = 
        // readonly properties can be initialized in constructor
        _super.call(this) || this;
        _this.prop1 = prop1;
        return _this;
    }
    ThirdClass.prototype.myMethod1 = function () {
        console.log("My Method called from child class");
    };
    return ThirdClass;
}(AbstractClass));
var ob1 = new ChildClass("3");
ob1.myMethod1();
// Output
// Constructor of Abstract class // base class constructor called implicitly even when constructor is not defined
// My Method called from child class
AbstractClass.myStaticMethod();
ChildClass.myStaticMethod();
// interface can be implemented with interface, class and even object and variables
var h = {
    bclass: "",
    cclass: ""
};
var h1 = {
    bclass: "",
    cclass: ""
};
h = h1; // valid as both implements interface that has same members.Not affected by interface name
var tc = new ThirdClass("4");
tc = ob1;
console.log(tc instanceof ThirdClass); // false
//# sourceMappingURL=oop2.js.map