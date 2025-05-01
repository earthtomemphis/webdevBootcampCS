// axios
// 	.get('https://catfact.ninja/facts')
// 	.then((res) => {
// 		console.log('RESPONSE:', res);
// 	})
// 	.catch((e) => {
// 		console.log('ERROR! ', e);
// 	});

const loadCatFacts = async () => {
	try {
		const res = await axios.get('https://catfact.ninja/facts');
		console.log(res.data);
	} catch (e) {
		console.log('ERROR', e);
	}
};

// loadCatFacts();

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
	const jokeText = await getDadJoke();
	// console.log(jokeText);
	const newLI = document.createElement('li');
	newLI.append(jokeText);
	jokes.append(newLI);
};
const getDadJoke = async () => {
	try {
		const config = { headers: { Accept: 'application/json' } };
		const res = await axios.get('https://icanhazdadjoke.com/', config);
		return res.data.joke;
		// console.log(res.data.joke);
		// const newLI = document.createElement('li');
		// newLI.append(res.data.joke);
		// jokes.append(newLI);
	} catch (e) {
		return 'NO JOKES AVAILABLE! SORRY :(';
	}
};

button.addEventListener('click', addNewJoke);
