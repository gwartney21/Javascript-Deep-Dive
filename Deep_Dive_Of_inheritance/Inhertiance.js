

// I have a constructor named BigDog that takes in 2 parameters
function BigDog(breed,age) {
	this.breed = breed
    this.age = age
}

function littleDog(breed,age,size){
    BigDog.call(this,breed,age);
    this.size = size
}

BigDog.prototype.animalInfo = function () {
  var animalBreed = `I am a ${this.breed} , ${this.age}`;
  console.log(animalBreed, this);
}

littleDog.prototype.getsmalldog = function(){
  var smallBreed = `I am a ${this.breed} , ${this.age} , ${this.size}`;
  console.log(smallBreed, this);
}

// I create an object from my constructor and give it the 2 parameters
ralph_dog = new BigDog("german shepard",24);
small_dog = new littleDog("chuwawa",25,"small");

ralph_dog.animalInfo();
small_dog.getsmalldog();

