import { ProductService } from './productService';
import { Electronics, Clothing } from './IProduct';

const electronicsService = new ProductService<Electronics>();
const clothingService = new ProductService<Clothing>();

// adding the new product to electronics section
electronicsService.create({
	id: 1,
	name: 'HP Victus',
	price: 55000,
	warranty: 2,
});
electronicsService.create({
	id: 2,
	name: 'Asus TUF',
	price: 58000,
	warranty: 1,
});
electronicsService.create({
	id: 3,
	name: 'Dell Chromebook',
	price: 16000,
	warranty: 3,
});
electronicsService.create({
	id: 4,
	name: 'Mac Book',
	price: 98000,
	warranty: 1,
});

// adding the new product to clothing section
clothingService.create({ id: 6, name: 'T-Shirt', price: 500, size: 'M' });
clothingService.create({ id: 7, name: 'Jeans', price: 800, size: 'S' });
clothingService.create({ id: 8, name: 'Saree', price: 8000, size: 'L' });
clothingService.create({ id: 9, name: 'Sweater', price: 1000, size: 'XL' });

// Read product by ID
console.log(electronicsService.read(1));

// Update product (valid)
electronicsService.update(4, { name: 'Mac-Book Pro' });

// trying to create the product with no name
try {
	console.log('creating the product....');
	clothingService.create({ id: 10, name: '', price: 30, size: 'L' });
} catch (error) {
	console.error(error);
	console.error('An unknown error occurred.');
}

try {
	console.log('updating the product....');
	electronicsService.update(4, { name: '' });
} catch (error) {
	if (error instanceof Error) {
		console.error(error.message);
	} else {
		console.error('An unknown error occurred.');
	}
}
// Delete product
clothingService.delete(8);

// Get all products
console.log(electronicsService.getAll());
console.log(clothingService.getAll());
