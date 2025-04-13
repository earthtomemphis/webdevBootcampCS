const multiply = (x, y) => x * y;

const square = (x) => multiply(x, x);

const isRightTriangle = (a, b, c) => {
	return square(a) + square(b) === square(c);
};

isRightTriangle(3, 4, 5); // returns true

console.log('Sending request to server!');
setTimeout(() => {
	console.log('Here is your data from the server');
}, 3000);
console.log(' I AM AT THE END OF THE FILE');
