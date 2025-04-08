const btn = document.querySelector('#v2');

btn.onclick = function () {
	console.log('YOU CLICKED ME!');
	console.log(' I HOPE IT WORKED!!');
};

function scream() {
	console.log('AAAAAHHHHHH');
	console.log('STOP TOUCHING ME!');
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = function () {
	alert('you clicked the h1!');
};
document.querySelector('h1').onclick = () => {
	alert('you clicked the h1!');
};

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
	alert('CLICKED!');
});

function twist() {
	console.log('TWIST!');
}
function shout() {
	console.log('SHOUT!');
}
const tasBtn = document.querySelector('#tas');
// tasBtn.onclick = twist;
// tasBtn.onclick = shout;
tasBtn.addEventListener('click', twist);
tasBtn.addEventListener('click', shout);
