const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('tiny'));

app.use((req, res, next) => {
	req.requestTime = Date.now();
	console.log(req.method, req.path);
	next();
});

app.use('/dogs', (req, res, next) => {
	console.log('I LOVE DOGS!!');
	next();
});

// app.use((req, res, next) => {
// 	const { password } = req.query;
// 	if (password === 'chickennugget') {
// 		next();
// 	}
// 	res.send('SORRY YOU NEED A PASSWORD!!!');
//  console.log(req.query);
// });

const verifyPassword = (req, res, next) => {
	const { password } = req.query;
	if (password === 'chickennugget') {
		next();
	}
	res.send('SORRY YOU NEED A PASSWORD!!!');
};

// app.use((req, res, next) => {
// 	console.log('THIS IS MY FIRST MIDDLEWARE!!!!');
// 	next();
// });

app.get('/', (req, res) => {
	console.log(`REQUEST DATE: ${req.requestTime}`);
	res.send('HOME PAGE!');
});

app.get('/dogs', (req, res) => {
	console.log(`REQUEST DATE: ${req.requestTime}`);
	res.send('WOOF WOOF!');
});

app.get('/secret', verifyPassword, (req, res) => {
	res.send(
		'MY SECRET IS: Sometimes I wear headphone in public so that I dont have to talk to anyone'
	);
});

app.use((req, res) => {
	res.status(404).send('NOT FOUND!');
});

app.listen(3000, () => {
	console.log('App listening on port 3000!');
});
