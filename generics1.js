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
var SuperCharacter = /** @class */ (function () {
    function SuperCharacter(name) {
    }
    return SuperCharacter;
}());
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Hero;
}(SuperCharacter));
var Villian = /** @class */ (function (_super) {
    __extends(Villian, _super);
    function Villian() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Villian;
}(SuperCharacter));
var SuperTeam = /** @class */ (function () {
    function SuperTeam(team, leader) {
        this.team = team;
        this.leader = leader;
    }
    return SuperTeam;
}());
var ironMan = new Hero("Iron Man");
var captainAmerica = new Hero("Captain America");
var thor = new Hero("Thor");
var avengers = new SuperTeam([ironMan, captainAmerica, thor], captainAmerica);
// To prevent case as:
var nums = new SuperTeam([1, 2, 3], 0); // This class is not intented to take number, we need to restrict generic class from it else it will be valid
// restriction will be done by extending class of whose object or child object only we want to pass as shown above
//# sourceMappingURL=generics1.js.map