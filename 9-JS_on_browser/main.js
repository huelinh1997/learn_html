function Cat(name) {
	this.name = name;
	this.stomach = []
}
Cat.prototype.eat = function(mouse) {
	this.stomach.push(mouse);
	return this;
};
function Mouse(name) {
	this.name = name;
}

var cat = new Cat('Tom');
var mouse = new Mouse('jerry');
cat.eat(mouse);
console.log(cat);
