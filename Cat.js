function Cat(name){
	this.name= 'tom',
	this.weight=55,
	this.stomach = []
}
Cat.prototype.eat = function(){
	this.stomach.push(mouse);
};
module.exports = Cat;