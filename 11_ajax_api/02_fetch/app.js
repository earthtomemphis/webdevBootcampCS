fetch('https://catfact.ninja/facts')
	.then((res) => {
		console.log('RESOLVED', res);
		// res.json().then((data) => console.log('JSON DONE', data));
		return res.json();
	})
	.then((data) => {
		console.log(data);
	})
	.catch((e) => {
		console.log('ERROR!', e);
	});

const loadCatFacts = async () => {
	try {
		const res = await fetch('https://catfact.ninja/facts');
		const data = await res.json();
		console.log(data);
	} catch (error) {
		console.log('ERROR!!!', error);
	}
};

loadCatFacts();
