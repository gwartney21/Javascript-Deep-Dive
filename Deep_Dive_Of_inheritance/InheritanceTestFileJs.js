
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


