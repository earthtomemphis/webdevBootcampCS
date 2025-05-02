const form = document.querySelector('#searchForm');
form.addEventListener('submit', async (e) => {
	e.preventDefault();
	const searchTerm = form.elements.query.value;
	const config = { params: { q: searchTerm } };
	const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
	displayImg(res.data);
	form.elements.query.value = '';
	// console.log(res.data[0].show.image.medium);
	// const img = document.createElement('img');
	// img.src = res.data[0].show.image.medium;
	// document.body.append(img);
});

const displayImg = (shows) => {
	for (let res of shows) {
		// console.log(res);
		if (res.show.image) {
			const img = document.createElement('img');
			img.src = res.show.image.medium;
			document.body.append(img);
		}
	}
};
