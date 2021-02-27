function Mouse(){
	this.name = 'Mickey';
	this.isDead = false;
}
Mouse.prototype.die = function(){
	this.isDead = true;
}
Mouse.prototype.run = function(){
console.log('Run');
};
module.exports = Mouse;