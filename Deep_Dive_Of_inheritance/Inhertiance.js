

//constructor named BigDog that takes in 2 parameters
function BigDog(breed,age) {
	this.breed = breed
    this.age = age
}

//constructor named littleDog that takes in 3 parameters
function littleDog(breed,age,size){
    /*Call the constructor BigDog and bind the values of its 
    this to the littleDogs empty object.
    Then pass in the arguments to be set
    add in a extra size value to the empty object
    */
    BigDog.call(this,breed,age);
    //Add in one other specific value
    this.size = size;
}

//Add animal info function to the prototype object
BigDog.prototype.animalInfo = function () {
   
  /*
  The this in side the .prototype obj is set to what 
  ever create the create the object when we called the new keyword
  you can look at as the same thing small_dog.bred ect....
  */

  var animalBreed = `I am a ${this.breed} ${this.age} ${this.size}`;
  console.log(animalBreed);
}

/*
This now gets rid of littleDog 
Constructor creates another empty object. That is then linked back to the bigDog prototyoe obj
*/
littleDog.prototype = Object.create(BigDog.prototype);


//Then add the function getsmall dog function to the newly created linked object
littleDog.prototype.getsmalldog = function(){
 /*
   The this will be again bound to what ever it was created with 
   when calling the new keyword In this case since there is know 
   animalInfo on this specific object it will then
   look up the prototye chain to find the function and invoke it
  */
    return this.animalInfo();
}


/*
I create an object from my constructor and give it the parameters
 It then does 4 things to se evrey thing else in motion
 1:create a new empty object, 2:bind the this value of the constructor to this new empty object
 3:link the empty object to the prototype object.
 4:return the final object unless one is defined specificly in the constructor
*/

small_dog = new littleDog("chuwawa",25,"small");

small_dog.getsmalldog();
