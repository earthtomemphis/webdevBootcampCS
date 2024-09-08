const express = require('express');
const app = express();
// console.dir(app);

// app.use((req, res) => {
// 	console.log('WE GOT A NEW REQUEST!!!!');
// 	// console.dir(req);
// 	res.send('<h1>This is my Webpage!!!</h1>');
// });

app.get('/', (req, res) => {
	res.send('This is the home page!');
});

app.get('/r/:subreddit', (req, res) => {
	const { subreddit } = req.params;
	res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
	// console.log(req.params);
	// res.send('THIS IS A SUBREDDIT');
});

app.get('/r/:subreddit/:postId', (req, res) => {
	const { subreddit, postId } = req.params;
	res.send(
		`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`
	);
});

app.get('/cats', (req, res) => {
	// console.log('CAT REQUEST!!!');
	res.send('MEOW!!');
});

app.get('/dogs', (req, res) => {
	res.send('WOOF!!');
});

app.get('/search', (req, res) => {
	const { q } = req.query;
	if (!q) {
		res.send('NOTHING FOUND IF NOTHING SEARCH');
	}
	res.send(`<h1>Search results for: ${q}</h1>`);
	// console.log(req.query);
	// res.send('HI!');
});

app.get('*', (req, res) => {
	res.send("I don't know that path!");
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
