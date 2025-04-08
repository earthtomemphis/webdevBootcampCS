const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }

for (let link of allLinks) {
	link.style.color = 'rgb(0, 108, 134)';
	link.style.textDecorationColor = 'magenta';
	link.style.textDecorationStyle = 'wavy';
}

const firstLink = document.querySelector('a');
document.querySelectorAll('input')[1];
const textInput = document.querySelector('input[type="text"]');

textInput.type = 'color';
textInput.setAttribute('type', 'text');

const h1 = document.querySelector('h1');
console.log(h1.style);
h1.style.fontSize = '3em';
h1.style.border = '2px solid pink';
console.log(h1.style);

const h2 = document.querySelector('h2');
h2.classList.add('purple');
h2.classList.add('border');
console.log(h2.classList);
console.log(h2.classList.contains('purple'));

const firstBold = document.querySelector('b');

firstBold.parentElement.parentElement.parentElement;
const paragraph = firstBold.parentElement;
paragraph.childElementCount;
paragraph.children;

const squareImg = document.querySelector('.square');
squareImg.parentElement;
squareImg.children;

// Returns a node
squareImg.nextSibling;
squareImg.previousSibling;

squareImg.nextElementSibling;
squareImg.previousElementSibling;

const newIng = document.createElement('img');
// console.dir(newIng);
newIng.src =
	'https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80';
document.body.appendChild(newIng);
newIng.classList.add('square');
const newH3 = document.createElement('h3');
newH3.innerText = 'I am new!';
document.body.appendChild(newH3);
const p = document.querySelector('p');
p.append('I am new text yaaaaaayyy!!!', 'asdasdasdasdasd');
const newB = document.createElement('b');
newB.append('Hi!');
p.prepend(newB);

const newH2 = document.createElement('h2');
newH2.append('Are adorable chickens');
h1.insertAdjacentElement('afterend', newH2);
h1.nextElementSibling;
const h3 = document.createElement('h3');
h3.innerText = 'I am h3';
h1.after(h3);

const firstLi = document.querySelector('li');
const ul = firstLi.parentElement;
ul.removeChild(firstLi);
const b = document.querySelector('b');
b.parentElement.removeChild(b);
h3.remove();
