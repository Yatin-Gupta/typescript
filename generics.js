"use strict";
var heroes = [
    { name: "Superman" },
    { name: "Batman" },
    { name: "Green Lantern" }
];
/*function cloneArray(array: any[]): any[] {
  return array.slice(0);
}*/
//const clones: HasName[] = cloneArray(heroes); valid but clones is of any[] type
function cloneArray(array) {
    // Generics
    return array.slice(0);
}
var clones = cloneArray(heroes); // now cloneArray returns HasName[]
// This is called type inference in which parameter you pass, its type automatically
// infered to T type and accodingly its return type also set.
// we can also write as:
//const aclones: HasName[] = cloneArray<Number>(heroes);// error comes: HasName[] is not assignable to Number[]
var aclones = cloneArray(heroes); // valid
var nclones = cloneArray([1, 2, 3]);
// we use generics where we don't know what type can come, but don't want to use any type
// generics allow to predict type and be type safe all the time.
// generics used for container solution
//# sourceMappingURL=generics.js.map