const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
const lis = document.querySelectorAll('li');

tweetForm.addEventListener('submit', function (e) {
	e.preventDefault();
	const usernameInput = tweetForm.elements.username;
	const tweetInput = tweetForm.elements.tweet;
	addTweet(usernameInput.value, tweetInput.value);
	usernameInput.value = '';
	tweetInput.value = '';
});

// for (let li of lis) {
// 	li.addEventListener('click', function () {
// 		li.remove();
// 	});
// }

const addTweet = (username, tweet) => {
	const newTweet = document.createElement('li');
	const bTag = document.createElement('b');
	bTag.append(username);
	newTweet.append(bTag);
	newTweet.append(`- ${tweet}`);
	// console.log(newTweet);
	tweetsContainer.append(newTweet);
};

tweetsContainer.addEventListener('click', function (e) {
	// console.log('CLICK ON UL!');
	console.dir(e.target);
	e.target.nodeName === 'LI' && e.target.remove();
});
