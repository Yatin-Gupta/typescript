enum Movie {
  Netfelix,
  Marvel
}
class Index {
  constructor(
    readonly name: string,
    private movieType: Movie,
    protected rating: string
  ) {
    // in new/current version of ts readonly is allowed in constructor, but in older version, it is needed to declared seperattly as class property
    // eq. of declaring name and movieType as seperate private members
    console.log("Movie Name: " + name);
    console.log("Movie Type: " + movieType);
    console.log("Movie Rating: " + rating);
  }
  get movieName() {
    return this.name; // readonly properties can be declared by this
  }
  set movieName(movie: string) {
    // setter methods cannot have return type annotation
    //this.name = movie; // refering same name i.e created in constructor // readonly properties cannot be changed
  }
}

class Child extends Index {
  fly(message: string): void {
    console.log(message);
    console.log("Rating: ", this.rating);
  }
  get movieName() {
    return this.name + " from Child class";
  }
}

let ob = new Index("1-23", Movie.Netfelix, "5");
console.log(ob);
//ob.movieName = "34-5";
console.log(ob.movieName);
console.log(ob.name); // readonly properties are accessible outside class like public properties
let obc = new Child("1-23", Movie.Marvel, "5");
console.log(obc);
obc.fly("Up and Away");
//console.log(obc.rating); // protected members are not accessible outside class
//console.log(ob.rating);
console.log(obc.movieName); // example of overriding

// A recommendation, we use type for creating type aliases, not for creating new type
// and interface for creating new object types.
// you can make fields readonly in interface
// if certain properties are optional we can mark them as question mark in interface
// Also note makeing object readonly means its reference cannot be changed but its internal
// members can be changed.
