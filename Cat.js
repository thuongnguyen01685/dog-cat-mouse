 var Mouse = require('./Mouse');
function Cat(name){
	
	this.stomach = [];
}
Cat.prototype.eat = function(animal){
    if(animal instanceof Mouse){
	this.stomach.push(animal);
	}else {
	throw new Error ('Cats can only eat mouse!')
      };
};
module.exports = Cat;