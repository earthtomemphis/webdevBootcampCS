const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log('Database connected');
});

const userSchema = new mongoose.Schema({
	first: String,
	last: String,
	addresses: [
		{
			street: String,
			city: String,
			state: String,
			country: String,
		},
	],
});

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
	const u = new User({
		first: 'Harry',
		last: 'Potter',
	});
	u.addresses.push({
		street: '123 Sesame St.',
		city: 'New York',
		state: 'NY',
		country: 'USA',
	});
	const res = await u.save();
	console.log(res);
};

// makeUser();

const addAddress = async (id) => {
	const user = await User.findById(id);
	user.addresses.push({
		street: '99 3rd St.',
		city: 'New York',
		state: 'NY',
		country: 'USA',
	});
	const res = await user.save();
	console.log(res);
};

addAddress('686633f121f9e9b374a70337');
