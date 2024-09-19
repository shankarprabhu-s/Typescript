import { ValidateNonEmpty } from './ValidateNonEmpty';
import { IProduct } from './IProduct';

export class ProductService<T extends IProduct> {
	private products: T[] = [];

	// Create a new product
	@ValidateNonEmpty
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
	@ValidateNonEmpty
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
