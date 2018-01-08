'use strict';

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


///TESTING OUT STATIC METHODS 


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

//tESTING OUT STATIC A DIFFRENT WAYS OF USING STATIC METHODS WITH
//USING INSTANCES

//jshint esnext:true
class Bird {
  static changeColor(bcolor) {
    this.color = color;
   
  }
  
  constructor({ color = 'red' } = {}) {
    this.color = color;
  }
  
}

let set = new Bird();
//This will bind the this value to the new empty 
//Object instead of the constructor value on the prototype
Bird.changeColor.call(set,'blue');
console.log(set.color);

