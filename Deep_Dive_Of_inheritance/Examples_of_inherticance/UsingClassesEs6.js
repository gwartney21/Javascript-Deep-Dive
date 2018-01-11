'use strict';
/*
	Example of using es6 classes with inhertiance
	the person class will extend the student class
	to be able to use methods from the person constructor.
*/
class Person {
  dance(){
    const dances = [
      'waltz',
      'tango',
      'mambo',
      'foxtrot'
    ];
    console.log(`${this.name} is doing the ${dances[Math.floor(Math.random() *  dances.length)]}!`);
  }
  
  constructor({ name, age, eyeColor = 'brown' } = {}) {
    this.name = name;
    this.age = age;
    this.eyeColor = eyeColor;
  }

}

class stuedent extends Person {
   dance(traditional){
     if(traditional){
       super.dance();
       return;
     }
     
     const dances = [
      'lyrical',
      'tap',
      'balet',
      'jazz'
    ];
     
  }
	constructor({name,age,intrestLevel = 5}  = {}){
    
    super({name,age});
		this.name = name;
		this.age = age;
		this.intrestLevel = intrestLevel;
		this.grades = new Map();
	}
}

let stevenJ = new Person({ name: 'Steven', age: 22 });
stevenJ.dance();



/*
This is a way of using a static method
With out the need of instances
This can be used to be more of a utitlity function
*/

class StaticMethodCall {
  
   constructor({ name, age, eyeColor = 'brown' } = {}) {
    this.name = name;
    this.age = age;
    this.eyeColor = eyeColor;
  }
  
  static show() {
    return 'Static method has been called';
  }
 
  static anotherStaticMethod(n) {
     return this.n = n;
  }
  
}


console.log(StaticMethodCall.anotherStaticMethod("alex"));

/*
	Use static methods with class instances
	instead of acessing a static method directly from the
	constructor. It will acess it on the new empty object.
	This example aslo includes the use of getters and setters.
*/


class Bird {
  static changeColor(bcolor) {
    this.color = color;
   
  }
  
  constructor({ color = 'red' } = {}) {
    this.color = color;
  }

  set setnewcolor(color){
  	this.color = color;
  };

  get getnewcolor(){
  	return this.color;
  }
  
}

let set = new Bird();

/*
Object instead of the constructor value on the prototype
This will bind the this value to the new empty 
*/

Bird.changeColor.call(set,'blue');

set.setnewcolor = "greeen";

console.log(set.getnewcolor);
console.log(set.color);

