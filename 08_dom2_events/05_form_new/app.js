const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catName');
const list = document.querySelector('#cats');
form.addEventListener('submit', function (e) {
	e.preventDefault();
	// console.log('SUBMITTED THE FORM');
	// console.log(input.value);
	const catName = input.value;
	const newLI = document.createElement('li');
	newLI.innerText = catName;
	console.log(newLI);
	list.append(newLI);
	input.value = '';
});
