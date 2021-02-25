function Cat(){
	this.name: 'Tom',
	this.weight:55,
	this.stomach = []
}
Cat.prototype.eat = function(){
	this.stomach.push(mouse);
};
module.exports = Cat;