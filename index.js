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
var Movie;
(function (Movie) {
    Movie[Movie["Netfelix"] = 0] = "Netfelix";
    Movie[Movie["Marvel"] = 1] = "Marvel";
})(Movie || (Movie = {}));
var Index = /** @class */ (function () {
    function Index(name, movieType, rating) {
        this.name = name;
        this.movieType = movieType;
        this.rating = rating;
        // in new/current version of ts readonly is allowed in constructor, but in older version, it is needed to declared seperattly as class property
        // eq. of declaring name and movieType as seperate private members
        console.log("Movie Name: " + name);
        console.log("Movie Type: " + movieType);
        console.log("Movie Rating: " + rating);
    }
    Object.defineProperty(Index.prototype, "movieName", {
        get: function () {
            return this.name; // readonly properties can be declared by this
        },
        set: function (movie) {
            // setter methods cannot have return type annotation
            //this.name = movie; // refering same name i.e created in constructor // readonly properties cannot be changed
        },
        enumerable: true,
        configurable: true
    });
    return Index;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.fly = function (message) {
        console.log(message);
        console.log("Rating: ", this.rating);
    };
    Object.defineProperty(Child.prototype, "movieName", {
        get: function () {
            return this.name + " from Child class";
        },
        enumerable: true,
        configurable: true
    });
    return Child;
}(Index));
var ob = new Index("1-23", Movie.Netfelix, "5");
console.log(ob);
//ob.movieName = "34-5";
console.log(ob.movieName);
console.log(ob.name); // readonly properties are accessible outside class like public properties
var obc = new Child("1-23", Movie.Marvel, "5");
console.log(obc);
obc.fly("Up and Away");
//console.log(obc.rating); // protected members are not accessible outside class
//console.log(ob.rating);
console.log(obc.movieName); // example of overriding
//# sourceMappingURL=index.js.map