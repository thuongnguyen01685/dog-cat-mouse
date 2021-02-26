function Horse(){
	
    Horse.prototype.run = function() {
    	console.log('runing...')
    };
    Horse.prototype.fly = function(){
    	console.log('Flying...');
    };

}
module.exports = Horse;