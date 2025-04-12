const p1 = {
	score: 0,
	button: document.querySelector('#p1Btn'),
	display: document.querySelector('#p1Display'),
};
const p2 = {
	score: 0,
	button: document.querySelector('#p2Btn'),
	display: document.querySelector('#p2Display'),
};
const p3 = {
	score: 0,
	button: document.querySelector('#p3Btn'),
	display: document.querySelector('#p3Display'),
};

const resetBtn = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent1, opponent2) {
	if (!isGameOver) {
		player.score += 1;
		if (player.score === winningScore) {
			isGameOver = true;
			player.display.classList.add('has-text-success');
			opponent1.display.classList.add('has-text-danger');
			opponent2.display.classList.add('has-text-danger');
			player.button.disabled = true;
			opponent1.button.disabled = true;
			opponent2.button.disabled = true;
		}
		player.display.textContent = player.score;
	}
}

p1.button.addEventListener('click', function () {
	updateScores(p1, p2, p3);
});
p2.button.addEventListener('click', function () {
	updateScores(p2, p1, p3);
});
p3.button.addEventListener('click', function () {
	updateScores(p3, p1, p2);
});
// if (!isGameOver) {
// 	p1Score += 1;
// 	if (p1Score === winningScore) {
// 		isGameOver = true;
// 		p1Display.classList.add('has-text-success');
// 		p2Display.classList.add('has-text-danger');
// 		p1Btn.disabled = true;
// 		p2Btn.disabled = true;
// 	}
// 	p1Display.textContent = p1Score;
// }
// if (!isGameOver) {
// 	p2Score += 1;
// 	if (p2Score === winningScore) {
// 		isGameOver = true;
// 		p2Display.classList.add('has-text-success');
// 		p1Display.classList.add('has-text-danger');
// 		p1Btn.disabled = true;
// 		p2Btn.disabled = true;
// 	}
// 	p2Display.textContent = p2Score;
// }
winningScoreSelect.addEventListener('change', function () {
	winningScore = parseInt(this.value);
	reset();
	// alert(this.value);
	// alert('CHANGE!');
});

resetBtn.addEventListener('click', reset);

function reset() {
	isGameOver = false;
	for (let p of [p1, p2, p3]) {
		p.score = 0;
		p.display.textContent = 0;
		p.display.classList.remove('has-text-success', 'has-text-danger');
		p.button.disabled = false;
	}
}
// function reset() {
// 	isGameOver = false;
// 	p1.score = 0;
// 	p2.score = 0;
// 	p1.display.textContent = 0;
// 	p2.display.textContent = 0;
// 	p1.display.classList.remove('has-text-success', 'has-text-danger');
// 	p2.display.classList.remove('has-text-success', 'has-text-danger');
// 	p1.button.disabled = false;
// 	p2.button.disabled = false;
// }
// function reset() {
// 	isGameOver = false;
// 	p1Score = 0;
// 	p2Score = 0;
// 	p1Display.textContent = 0;
// 	p2Display.textContent = 0;
// 	p1Display.classList.remove('has-text-success', 'has-text-danger');
// 	p2Display.classList.remove('has-text-success', 'has-text-danger');
// 	p1Btn.disabled = false;
// 	p2Btn.disabled = false;
// }
