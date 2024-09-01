const btn = document.querySelector('button');
const container = document.querySelector('#container');

btn.addEventListener('click', (e) => {
	container.style.backgroundColor = makeRandomColor();
	e.stopPropagation();
});
container.addEventListener('click', () => {
	container.classList.toggle('hide');
});

const makeRandomColor = () => {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);
	return `rgb(${r}, ${g}, ${b})`;
};
