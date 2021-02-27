function Mouse(){
	this.name = 'Mickey';
	this.isDead = false;
}
Mouse.prototype.die = function(){
	this.isDead = true;
}
Mouse.prototype.sleep = function(){
	console.log('Sleeping...');
};
module.exports = Mouse;