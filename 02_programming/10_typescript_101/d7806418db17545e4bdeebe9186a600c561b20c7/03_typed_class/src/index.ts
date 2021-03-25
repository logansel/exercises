class Bird {
  age: number;

  constructor(age: number) {
    this.age = age;
  }
  
  sing(): void {
    console.log("Cui cui");
  }

  fly(nbSec: number): void {
    if (this.age <= 1){
      console.log("The bird is too young to fly");
    } else if (this.age > 1 && this.age <= 3){
      console.log(`The bird flew ${nbSec} meters in ${nbSec} seconds`);
    } else if ( this.age > 3) {
      console.log(`The bird flew ${nbSec*2} meters in ${nbSec} seconds`);
    }
  }


}

// Leave the line below for tests to work properly.
export { Bird };
