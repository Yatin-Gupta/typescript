class SuperCharacter {
  constructor(name: string) {}
}

class Hero extends SuperCharacter {}

class Villian extends SuperCharacter {}

class SuperTeam<T extends SuperCharacter> {
  constructor(public team: T[], public leader: T) {}
}

let ironMan = new Hero("Iron Man");
let captainAmerica = new Hero("Captain America");
let thor = new Hero("Thor");
let avengers = new SuperTeam([ironMan, captainAmerica, thor], captainAmerica);
// To prevent case as:
let nums = new SuperTeam([1, 2, 3], 0); // This class is not intented to take number, we need to restrict generic class from it else it will be valid
// restriction will be done by extending class of whose object or child object only we want to pass as shown above
