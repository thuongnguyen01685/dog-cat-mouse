
 
 function Dog(name){
	this.name = name;
	this.stomach = [];
}
Dog.prototype.eat = function(Cat) {
	this.stomach.push(Cat);
};
Dog.prototype.sayHi = function() {
<<<<<<< HEAD
	console.log('Hi! i am a dog.My name is'+this.name)
=======
	console.log('Hi! i am a dog.My name is'+ this.name);
>>>>>>> 96e1b2d6a75a9aa8de4747ff0f07aecb5f02bb67
};
module.exports = Dog;
