"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LoggingLevel;
(function (LoggingLevel) {
    LoggingLevel[LoggingLevel["INFO"] = 0] = "INFO";
    LoggingLevel[LoggingLevel["DEBUG"] = 1] = "DEBUG";
    LoggingLevel[LoggingLevel["TRACE"] = 2] = "TRACE";
})(LoggingLevel || (LoggingLevel = {}));
function LogDecorator() {
    return function (target, propertyKey, descriptor) {
        /*console.log(descriptor);
        { value: [Function],
      writable: true,
      enumerable: true,
      configurable: true }
        */
        //console.log(propertyKey); // getName
        //console.log(target); // DecoratorClass { getName: [Function] }
        // calling to original function
        var originalFunction = descriptor.value;
        /*descriptor.value = (...args: any[]) => { // Arrow function is used when you want to this to point
            // at location where it is used not from calling location, but as here this need to be that of
            // calling location thus arrow function is not used
          // Arguments passed to function
          console.log(args);
          originalFunction(args);
        }; // New defination of method*/
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // Arrow function is used when you want to this to point
            // at location where it is used not from calling location, but as here this need to be that of
            // calling location thus arrow function is not used
            // Arguments passed to function
            console.log(args);
            originalFunction.apply(this, args);
        }; // New defination of method
    };
}
var DecoratorClass = /** @class */ (function () {
    function DecoratorClass() {
        this.name = "Yatin";
    }
    // it is also good to enable emitDecoratorsMetadata as then reflect polyfill metadata code also
    // get included in js file which make it predictable for future versions and for other frameworks
    // like angular or react.
    DecoratorClass.prototype.getName = function (loggingLevel) {
        console.log("Name is: " + this.name);
    };
    __decorate([
        LogDecorator() // For make it working you need to enable emitDecorators in tsconfig.json
        // it is also good to enable emitDecoratorsMetadata as then reflect polyfill metadata code also
        // get included in js file which make it predictable for future versions and for other frameworks
        // like angular or react.
        ,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], DecoratorClass.prototype, "getName", null);
    return DecoratorClass;
}());
var dec = new DecoratorClass();
dec.getName(LoggingLevel.DEBUG);
//# sourceMappingURL=decorators.js.map