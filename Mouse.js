function Mouse(){
	this.name = name;
	this.isDead = false;
}
Mouse.prototype.die = function(){
	this.isDead = true;
}
module.exports = Mouse;