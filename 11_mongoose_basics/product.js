const mongoose = require('mongoose');
mongoose
	.connect('mongodb://127.0.0.1:27017/shopApp')
	.then(() => {
		console.log('CONNECTION OPEN!!!');
	})
	.catch((err) => {
		console.log('OH NO ERROR!!!', err);
	});

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		maxLength: 20,
	},
	price: {
		type: Number,
		required: true,
		min: [0, 'Price must be positive ya dodo!'],
	},
	onSale: {
		type: Boolean,
		default: false,
	},
	categories: {
		type: [String],
		default: 'Cycling',
	},
	qty: {
		online: {
			type: Number,
			default: 0,
		},
		inStore: {
			type: Number,
			default: 0,
		},
	},
	size: {
		type: String,
		enum: ['S', 'M', 'L', 'XL'],
	},
});

// productSchema.methods.greet = function () {
// 	console.log('HELLO!!! HI!! HOWDY!!!');
// 	console.log(`from ${this.name}`);
// };

productSchema.methods.toggleOnSale = function () {
	this.onSale = !this.onSale;
	return this.save();
};

productSchema.methods.addCategory = function (newCat) {
	this.categories.push(newCat);
	return this.save();
};

productSchema.statics.fireSale = function () {
	return this.updateMany({}, { onSale: true, price: price / 2 });
};

const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
	const foundProduct = await Product.findOne({ name: 'Mountain Bike' });
	console.log(foundProduct);
	// await foundProduct.toggleOnSale();
	// await foundProduct.addCategory('Outdoors');
	console.log(foundProduct);
	// foundProduct.greet();
};

// Product.fireSale().then((res) => console.log(res));

// findProduct();

// const bike = new Product({
// 	name: 'Cycling Jersey',
// 	price: 28.5,
// 	categories: ['Cycling'],
// 	size: 'S',
// });
// bike.save()
// 	.then((data) => {
// 		console.log('IT WORKED!');
// 		console.log(data);
// 	})
// 	.catch((err) => {
// 		console.log('OH NO ERROR!');
// 		console.log(err);
// 	});
// Product.findOneAndUpdate(
// 	{ name: 'Tire Pump' },
// 	{ price: -9 },
// 	{
// 		new: true,
// 		runValidators: true,
// 	}
// )
// 	.then((data) => {
// 		console.log('IT WORKED!');
// 		console.log(data);
// 	})
// 	.catch((err) => {
// 		console.log('OH NO ERROR!');
// 		console.log(err);
// 	});

// const products = [
// 	{
// 		_id: ObjectId('66e3d17ba8305e99a9d18d7d'),
// 		name: 'Mountain Bike',
// 		price: 599,
// 		onSale: false,
// 		__v: 0,
// 	},
// 	{
// 		_id: ObjectId('66e3d70a20fad694bae571b5'),
// 		name: 'Bike Helmet',
// 		price: 19.5,
// 		onSale: false,
// 		categories: ['Cycling', 'Safety'],
// 		qty: { online: 0, inStore: 0 },
// 		__v: 0,
// 	},
// 	{
// 		_id: ObjectId('66e3d77b8ace8d1726929861'),
// 		name: 'Mountain Bike',
// 		price: 599,
// 		onSale: false,
// 		categories: ['Cycling', 'Safety'],
// 		qty: { online: 0, inStore: 0 },
// 		__v: 0,
// 	},
// 	{
// 		_id: ObjectId('66e3d961e6dd97db76dec9ec'),
// 		name: 'Tire Pump',
// 		price: 100,
// 		onSale: false,
// 		categories: ['Cycling'],
// 		qty: { online: 0, inStore: 0 },
// 		__v: 0,
// 	},
// 	{
// 		_id: ObjectId('66e3ddd46be91f136eb99cdc'),
// 		name: 'Cycling Jersey',
// 		price: 28.5,
// 		onSale: false,
// 		categories: ['Cycling'],
// 		qty: { online: 0, inStore: 0 },
// 		size: 'S',
// 		__v: 0,
// 	},
// ];
