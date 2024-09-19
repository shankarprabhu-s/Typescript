// Define the common interface for products
interface IProduct {
	id: number;
	name: string;
	price: number;
}

// Define the generic ProductService class
class ProductService<T extends IProduct> {
	private products: T[] = [];

	// Create a new product
	create(product: T): void {
		this.products.push(product);
		console.log(`Product added: ${JSON.stringify(product)}`);
	}

	// Read a product by ID
	read(id: number): T | undefined {
		const product = this.products.find((product) => product.id === id);
		if (product) {
			console.log(`Product found: ${JSON.stringify(product)}`);
		} else {
			console.log(`Product with ID ${id} not found.`);
		}
		return product;
	}

	// Update an existing product
	update(id: number, updatedProduct: Partial<T>): void {
		const index = this.products.findIndex((product) => product.id === id);
		if (index !== -1) {
			this.products[index] = { ...this.products[index], ...updatedProduct };
			console.log(`Product updated: ${JSON.stringify(this.products[index])}`);
		} else {
			console.log(`Product with ID ${id} not found.`);
		}
	}

	// Delete a product by ID
	delete(id: number): void {
		this.products = this.products.filter((product) => product.id !== id);
		console.log(`Product with ID ${id} deleted.`);
	}

	// Get all products
	getAll(): T[] {
		return this.products;
	}
}

// Example usage
interface Electronics extends IProduct {
	warranty: number; // in years
}

interface Clothing extends IProduct {
	size: string;
}

const electronicsService = new ProductService<Electronics>();
const clothingService = new ProductService<Clothing>();

// Add new products
electronicsService.create({ id: 1, name: 'Laptop', price: 1000, warranty: 2 });
clothingService.create({ id: 2, name: 'T-Shirt', price: 20, size: 'M' });

// Read a product
console.log(electronicsService.read(1)); // Output: Laptop product

// Update a product
electronicsService.update(1, { price: 900 });

// Delete a product
clothingService.delete(2);

// Get all products
console.log(electronicsService.getAll());
