
 
 function Dog(name){
	this.name = name;
	this.stomach = [];
}
Dog.prototype.eat = function(Cat) {
	this.stomach.push(Cat);
};
Dog.prototype.sayHi = function() {
	console.log('Hi! i am a dog.My name is'+ this.name);
};
module.exports = Dog;
