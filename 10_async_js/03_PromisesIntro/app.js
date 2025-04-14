// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
	const delay = Math.floor(Math.random() * 4500) + 500;
	setTimeout(() => {
		if (delay > 4000) {
			failure('Connection Timeout :(');
		} else {
			success(`Here is your fake data from ${url}`);
		}
	}, delay);
};
// THE PROMISE VERSION
const fakeRequestPromise = (url) => {
	return new Promise((resolve, reject) => {
		const delay = Math.floor(Math.random() * 4500) + 500;
		setTimeout(() => {
			if (delay > 4000) {
				reject('Connection Timeout :(');
			} else {
				resolve(`Here is your fake data from ${url}`);
			}
		}, delay);
	});
};

// fakeRequestCallback(
// 	'books.com',
// 	function (response) {
// 		console.log('IT WORKED!!!');
// 		console.log(response);
// 	},
// 	function (err) {
// 		console.log('ERROR!!!', err);
// 	}
// );
// fakeRequestCallback(
// 	'books.com/page1',
// 	function (response) {
// 		console.log('IT WORKED!!!');
// 		console.log(response);
// 		fakeRequestCallback(
// 			'books.com/page2',
// 			function (response) {
// 				console.log('IT WORKED AGAIN!!!');
// 				console.log(response);
// 				fakeRequestCallback(
// 					'books.com/page3',
// 					function (response) {
// 						console.log('IT WORKED AGAIN (3rd req)!!!');
// 						console.log(response);
// 					},
// 					function (err) {
// 						console.log('ERROR (3rd req)!!!', err);
// 					}
// 				);
// 			},
// 			function (err) {
// 				console.log('ERROR (2nd req)!!!', err);
// 			}
// 		);
// 	},
// 	function (err) {
// 		console.log('ERROR!!!', err);
// 	}
// );

// const request = fakeRequestPromise('yelp.com/api/coffee');
// request
// 	.then(() => {
// 		console.log('PROMISE RESOLVED!');
// 		console.log('IT WORKED!!!!!!');
// 	})
// 	.catch(() => {
// 		console.log('PROMISE REJECTED!');
// 		console.log('OH NO, ERROR!!!');
// 	});
// fakeRequestPromise('yelp.com/api/coffee/page1')
// 	.then(() => {
// 		console.log('PROMISE RESOLVED! (page1)');
// 		console.log('IT WORKED!!!!!!');
// 		fakeRequestPromise('yelp.com/api/coffee/page2')
// 			.then(() => {
// 				console.log('PROMISE RESOLVED! (page2)');
// 				console.log('IT WORKED!!!!!!');
// 				fakeRequestPromise('yelp.com/api/coffee/page3')
// 					.then(() => {
// 						console.log('PROMISE RESOLVED! (page3)');
// 						console.log('IT WORKED!!!!!!');
// 					})
// 					.catch(() => {
// 						console.log('PROMISE REJECTED! (page3)');
// 						console.log('OH NO, ERROR!!!');
// 					});
// 			})
// 			.catch(() => {
// 				console.log('PROMISE REJECTED! (page2)');
// 				console.log('OH NO, ERROR!!!');
// 			});
// 	})
// 	.catch(() => {
// 		console.log('PROMISE REJECTED! (page1)');
// 		console.log('OH NO, ERROR!!!');
// 	});

// fakeRequestPromise('yelp.com/api/coffee/page1')
// 	.then(() => {
// 		console.log('PROMISE RESOLVED! (page1)');
// 		console.log('IT WORKED!!!!!!');
// 		return fakeRequestPromise('yelp.com/api/coffee/page2');
// 	})
// 	.then(() => {
// 		console.log('PROMISE RESOLVED! (page2)');
// 		console.log('IT WORKED!!!!!!');
// 		return fakeRequestPromise('yelp.com/api/coffee/page3');
// 	})
// 	.then(() => {
// 		console.log('PROMISE RESOLVED! (page3)');
// 		console.log('IT WORKED!!!!!!');
// 	})
// 	.catch(() => {
// 		console.log('OH NO, A REQUEST FAILED!!!');
// 	});

fakeRequestPromise('yelp.com/api/coffee/page1')
	.then((data) => {
		console.log('PROMISE RESOLVED! (page1)');
		console.log('IT WORKED!!!!!!');
		console.log(data);
		return fakeRequestPromise('yelp.com/api/coffee/page2');
	})
	.then((data) => {
		console.log('PROMISE RESOLVED! (page2)');
		console.log('IT WORKED!!!!!!');
		console.log(data);
		return fakeRequestPromise('yelp.com/api/coffee/page3');
	})
	.then((data) => {
		console.log('PROMISE RESOLVED! (page3)');
		console.log('IT WORKED!!!!!!');
		console.log(data);
	})
	.catch((err) => {
		console.log('OH NO, A REQUEST FAILED!!!');
		console.error(err);
	});
