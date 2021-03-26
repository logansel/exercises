// Code the class here.

abstract class Tree {
  // Properties member.
  age: number;
  
  height: number;
  alive: boolean = true;

  // Constructor member.
  constructor(age: number) {
    this.age = age;
    

    if (this.age <= 9) {                                // age jusqua 9 ans inclus
      this.height = this.age * 25;                      // age  * 25 cm
    } else if ( this.age >= 10 && this.age <= 20 ) {    // age de 10 a 20 compris
      const growTenToTwenty = (this.age - 9) * 10       // age - 9 ( parce que on sait que il y a deja 9*25cm au minimum) *10 parce que cest le reste d'année qu'on veut up
      this.height =  growTenToTwenty + 225              // donc la variable du dessus + 225 ( 9 * 25 cm)
    } else if (this.age > 20) {                         // si plus de 20 ans
      this.height = (25 * 9)+ (10 *11)                  // Il grandit plus donc maxi les 25cm * 9 ans + les 11 ans restant * 10
    }
  }
  
  //methode 1    age++ / height up => return boolean type
  abstract ageOneYear(): void; 

  // methode 2   Tree.alive = (true || false) => return void type 
  abstract isAlive(): boolean; 
   

  // methode 3 restart (  age = 0 , height = 0, alive = true)
  seed(): void {
    this.age = 0;
    this.height = 0;
    this.alive = true;
  }
    
}


// Leave the line below for tests to work properly.
export { Tree };

