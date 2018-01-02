// function Foo(who){ 	
// 	this.me = who;
// }; 

// Foo.prototype.identify = function(){
// 	return "i AM " + this.me;
// };

// var a1 = new Foo("a1");
// var a2 = new Foo("a2");

// a2.speak = function() {                      
// 	alert("Hello", + this.identify() +  ".");
// };


//Inheriate from the foo class

// function Bar(who){
  
//   //Asssing Bars this to Foo and use the dunder proto linkage to go up
//   //the prototype chain to find the corect method on the Foo constructor object
//   Foo.call(this,who); 
// }

// Bar.prototype = Object.create(Foo.prototype);//This now points to Foos consturctor and removes Bars

// Bar.prototype.speak = function(){
//   console.log("Hello, " + this.identify() + ".");
// };

// var b1 = new Bar("b1");
// b1.speak();

// console.log(b1.constructor);
//console.log(a1.__proto__ === Foo.prototype);


var foo = {
  init: function(who){
      this.me = who;
  },
  
  get:function(){
      return this.me;
    
  }
};

/*
This gets defined through 
the object it was called with
In this case OBJ
when the new object gets created
it does not see the method on the 
Obj so it delegates up to the foo Object
where it finds the method and assigns the 
this keyword to the most immediate member reference aka OBJ 
Since it invoked the methods of foo.
*/

var obj = Object.create(foo);

obj.init("iam calledhere");

/*
  we can also acess the this.me
  property here since its now been intiliazed
  and set onto the obj it self.
  */
obj.show = function(){
  console.log(this.me);
}


var obj2 = Object.create(obj);
 /*
   Note that you can acess the this.me property here 
   Because its now initalized on which ever object that called it
   which in this case since its linked to the obj object this is where
   it is now able to find the intilized property. so it now sets
   this.me to OBJ2.me inside this function.
*/

obj2.showthis = function(){
   console.log(this.me);
}


obj.show();

obj2.showthis();

//This shows linkage between the dunder proto of obj2 and obj is TRUE
console.log(obj2.__proto__ === obj);


