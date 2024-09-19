"use strict";
// Define the generic ProductService class
class ProductService {
    constructor() {
        this.products = [];
    }
    // Create a new product
    create(product) {
        this.products.push(product);
        console.log(`Product added: ${JSON.stringify(product)}`);
    }
    // Read a product by ID
    read(id) {
        const product = this.products.find((product) => product.id === id);
        if (product) {
            console.log(`Product found: ${JSON.stringify(product)}`);
        }
        else {
            console.log(`Product with ID ${id} not found.`);
        }
        return product;
    }
    // Update an existing product
    update(id, updatedProduct) {
        const index = this.products.findIndex((product) => product.id === id);
        if (index !== -1) {
            this.products[index] = Object.assign(Object.assign({}, this.products[index]), updatedProduct);
            console.log(`Product updated: ${JSON.stringify(this.products[index])}`);
        }
        else {
            console.log(`Product with ID ${id} not found.`);
        }
    }
    // Delete a product by ID
    delete(id) {
        this.products = this.products.filter((product) => product.id !== id);
        console.log(`Product with ID ${id} deleted.`);
    }
    // Get all products
    getAll() {
        return this.products;
    }
}
const electronicsService = new ProductService();
const clothingService = new ProductService();
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
//# sourceMappingURL=project.js.map