const makeRandomColor = () => {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return `rgb(${r}, ${g}, ${b})`;
};

// const btns = document.querySelectorAll('button');

// for (let btn of btns) {
// 	btn.addEventListener('click', function () {
// 		btn.style.backgroundColor = makeRandomColor();
// 		btn.style.color = makeRandomColor();
// 	});
// }

// const h1s = document.querySelectorAll('h1');

// for (let h1 of h1s) {
// 	h1.addEventListener('click', function () {
// 		h1.style.backgroundColor = makeRandomColor();
// 		h1.style.color = makeRandomColor();
// 	});
// }

const btns = document.querySelectorAll('button');

for (let btn of btns) {
	btn.addEventListener('click', colorize);
}

const h1s = document.querySelectorAll('h1');

for (let h1 of h1s) {
	h1.addEventListener('click', colorize);
}

function colorize() {
	this.style.backgroundColor = makeRandomColor();
	this.style.color = makeRandomColor();
}
