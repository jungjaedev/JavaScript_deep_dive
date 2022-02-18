let myObject = {
	name: 'foo',
	sayName: function() {
		console.log(this)
	}
}
myObject.sayName();
