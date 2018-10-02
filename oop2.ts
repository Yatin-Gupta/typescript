interface Hero {
  //private bclass: string; // interface member cannot be private member
  //private cclass: string;
  bclass: string;
  cclass: string;
}
interface Hero1 {
  //private bclass: string; // interface member cannot be private member
  //private cclass: string;
  bclass: string;
  cclass: string;
}
abstract class AbstractClass implements Hero {
  private aclass = "AClass";
  private static readonly sclass = "SClass";
  //private bclass: string; not valid as interface implement same property as public, so it has to be implemented as public here
  //private cclass: string;
  bclass: string;
  cclass: string;
  constructor() {
    console.log("Constructor of Abstract class");
    this.bclass = "4";
    this.cclass = "5";
  }
  abstract myMethod1(): void; // cannot have implementation because it is marked abstract
  testMethod() {
    console.log(this.aclass);
  }
  static myStaticMethod() {
    //console.log("Call to static method: ", this.aclass); cannot use this inside static method
    //console.log("Call to static method: ", aclass); cannot use directly
    //console.log("Call to static method: ", AbstractClass.aclass); cannot use with class name
    console.log("Call to static method: ", this.sclass); // valid
    //console.log("Call to static method: ", sclass);cannot use directly
    console.log("Call to static method: ", AbstractClass.sclass);
  }
}
class ChildClass extends AbstractClass {
  //const prop1 = "HW"; A class member cannot have const member. Instead it has readonly
  readonly prop1: string;
  constructor(prop1: string) {
    // readonly properties can be initialized in constructor
    super(); // Must need to call base class constructor before child class constructor
    this.prop1 = prop1;
  }
  myMethod1() {
    console.log("My Method called from child class");
  }
}

class ThirdClass extends AbstractClass {
  readonly prop1: string;
  constructor(prop1: string) {
    // readonly properties can be initialized in constructor
    super(); // Must need to call base class constructor before child class constructor
    this.prop1 = prop1;
  }
  myMethod1() {
    console.log("My Method called from child class");
  }
}

let ob1 = new ChildClass("3");
ob1.myMethod1();
// Output
// Constructor of Abstract class // base class constructor called implicitly even when constructor is not defined
// My Method called from child class

AbstractClass.myStaticMethod();
ChildClass.myStaticMethod();

// interface can be implemented with interface, class and even object and variables
let h: Hero = {
  bclass: "",
  cclass: ""
};
let h1: Hero1 = {
  bclass: "",
  cclass: ""
};

h = h1; // valid as both implements interface that has same members.Not affected by interface name

let tc = new ThirdClass("4");
tc = ob1;
console.log(tc instanceof ThirdClass); // false
