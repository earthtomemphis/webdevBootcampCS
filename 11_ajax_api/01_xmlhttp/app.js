const req = new XMLHttpRequest();

req.onload = function () {
	console.log('IT LOADED!!!');
	const data = JSON.parse(this.responseText);
	console.log(data);
};

req.onerror = function () {
	console.log('ERROR!!!');
	console.log(this);
};

req.open('GET', 'https://catfact.ninja/facts');
req.send();
