const input = document.querySelector('input');
const h1 = document.querySelector('h1');

// input.addEventListener('change', function (e) {
//     console.log('CHANGE EVENT!');
// })

input.addEventListener('input', function (e) {
	// console.log('INPUT EVENT!');
	// console.log(e);
	h1.innerText = input.value;
});
