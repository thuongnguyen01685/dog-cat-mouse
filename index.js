var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

var dog = new Dog('Tom');
var cat = new Cat();
var mouse = new Mouse('Mickey');
try {
	cat.eat(dog);

}catch(error){
	console.log('Error while cat eating a dog');
}
cat.eat(mouse);
// cat.eat(dog);
console.log(cat);