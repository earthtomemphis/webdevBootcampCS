// class Color {
// 	constructor(r, g, b, name) {
// 		this.r = r;
// 		this.g = g;
// 		this.b = b;
// 		this.name = name;
// 		// console.log('INSIDE CONSTRUCTOR');
// 		// console.log(r, g, b);
// 	}
// 	greet() {
// 		return `HELLO FROM ${this.name.toUpperCase()}!`;
// 	}
// 	rgb() {
// 		const { r, g, b } = this;
// 		return `rgb(${r}, ${g}, ${b})`;
// 	}
// 	rgba(a = 1.0) {
// 		const { r, g, b } = this;
// 		return `rgb(${r}, ${g}, ${b},${a})`;
// 	}
// 	hex() {
// 		const { r, g, b } = this;
// 		return (
// 			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
// 		);
// 	}
// }
class Color {
	constructor(r, g, b, name) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.name = name;
		this.calcHSL();
		// console.log('INSIDE CONSTRUCTOR');
		// console.log(r, g, b);
	}
	greet() {
		return `HELLO FROM ${this.name.toUpperCase()}!`;
	}
	innerRGB() {
		const { r, g, b } = this;
		return `rgb(${r}, ${g}, ${b})`;
	}
	rgb() {
		return `rgb(${this.innerRGB()})`;
	}
	rgba(a = 1.0) {
		return `rgb(${this.innerRGB()},${a})`;
	}
	hex() {
		const { r, g, b } = this;
		return (
			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
		);
	}
	hsl() {
		const { h, s, l } = this;
		return `hsl(${h}, ${s}%, ${l}%)`;
	}
	fullySaturated() {
		const { h, l } = this;
		return `hsl(${h}, 100%, ${l}%)`;
	}
	opposite() {
		const { h, s, l } = this;
		const newHue = (h + 180) % 360;
		return `hsl(${newHue}, ${s}%, ${l}%)`;
	}
	calcHSL() {
		let { r, g, b } = this;
		// Make r, g, and b fractions of 1
		r /= 255;
		g /= 255;
		b /= 255;

		// Find greatest and smallest channel values
		let cmin = Math.min(r, g, b),
			cmax = Math.max(r, g, b),
			delta = cmax - cmin,
			h = 0,
			s = 0,
			l = 0;
		if (delta == 0) h = 0;
		else if (cmax == r)
			// Red is max
			h = ((g - b) / delta) % 6;
		else if (cmax == g)
			// Green is max
			h = (b - r) / delta + 2;
		// Blue is max
		else h = (r - g) / delta + 4;

		h = Math.round(h * 60);

		// Make negative hues positive behind 360°
		if (h < 0) h += 360;
		// Calculate lightness
		l = (cmax + cmin) / 2;

		// Calculate saturation
		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

		// Multiply l and s by 100
		s = +(s * 100).toFixed(1);
		l = +(l * 100).toFixed(1);
		this.h = h;
		this.s = s;
		this.l = l;
	}
}

const red = new Color(255, 76, 89, 'tomato');
const white = new Color(255, 255, 255, 'white');
const orange = new Color(230, 126, 34, 'carrot');

class Pet {
	constructor(name, age) {
		console.log('IN PET CONSTRUCTOR!');
		this.name = name;
		this.age = age;
	}
	eat() {
		return `${this.name} is eating!`;
	}
}

class Cat extends Pet {
	constructor(name, age, livesLeft = 9) {
		console.log('IN CAT CONSTRUCTOR!');
		super(name, age);
		this.livesLeft = livesLeft;
	}
	meow() {
		return 'MEOWWW!!';
	}
}

class Dog extends Pet {
	bark() {
		return 'WOOOFF!';
	}
	eat() {
		return `${this.name} scarfs his food!`;
	}
}

const monty = new Cat('monty', 9);
const wyatt = new Dog('Wyatt', 13);
