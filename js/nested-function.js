function innerFunction() {
	console.log("Hello World from Inner Function");
}

function outerFunction(innerFunction) {
	innerFunction();
}

outerFunction(innerFunction);