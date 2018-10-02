enum LoggingLevel {
  INFO,
  DEBUG,
  TRACE
}
function LogDecorator() {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    /*console.log(descriptor);
    { value: [Function],
  writable: true,
  enumerable: true,
  configurable: true }
    */
    //console.log(propertyKey); // getName
    //console.log(target); // DecoratorClass { getName: [Function] }

    // calling to original function
    const originalFunction: Function = descriptor.value;

    /*descriptor.value = (...args: any[]) => { // Arrow function is used when you want to this to point 
        // at location where it is used not from calling location, but as here this need to be that of 
        // calling location thus arrow function is not used 
      // Arguments passed to function
      console.log(args);
      originalFunction(args);
    }; // New defination of method*/

    descriptor.value = function(...args: any[]) {
      // Arrow function is used when you want to this to point
      // at location where it is used not from calling location, but as here this need to be that of
      // calling location thus arrow function is not used
      // Arguments passed to function
      console.log(args);
      originalFunction.apply(this, args);
    }; // New defination of method
  };
}
class DecoratorClass {
  public name: string = "Yatin";

  @LogDecorator() // For make it working you need to enable emitDecorators in tsconfig.json
  // it is also good to enable emitDecoratorsMetadata as then reflect polyfill metadata code also
  // get included in js file which make it predictable for future versions and for other frameworks
  // like angular or react.
  getName(loggingLevel: LoggingLevel) {
    console.log("Name is: " + this.name);
  }
}

let dec = new DecoratorClass();
dec.getName(LoggingLevel.DEBUG);
