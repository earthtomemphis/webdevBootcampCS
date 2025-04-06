const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', function () {
	// const r = Math.floor(Math.random() * 256);
	// const g = Math.floor(Math.random() * 256);
	// const b = Math.floor(Math.random() * 256);
	// const newColor = `rgb(${r}, ${g}, ${b})`;
	const newColor = makeRandomColor();
	document.body.style.backgroundColor = newColor;
	h1.innerText = newColor;
});

const makeRandomColor = () => {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return `rgb(${r}, ${g}, ${b})`;
};
