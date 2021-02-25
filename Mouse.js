function Mouse(){
	this.name = 'Mickey';
	this.isDead = false;
}
Mouse.prototype.die = function(){
	this.isDead = true;
}
module.exports = Mouse;