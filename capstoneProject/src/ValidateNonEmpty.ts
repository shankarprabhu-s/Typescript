export function ValidateNonEmpty(
	target: Object,
	propertyKey: string | symbol,
	descriptor: PropertyDescriptor
): void {
	const originalMethod = descriptor.value;

	descriptor.value = function (...args: any[]) {
		const product = args[0]; // Assuming the product is the first argument in the method

		// Validate the 'name' field if it is provided
		if (product.hasOwnProperty('name')) {
			if (
				product.name === undefined ||
				product.name === '' ||
				product.name === null
			) {
				throw new Error('Validation Error: Name field cannot be empty.');
			}
		}

		// Validate the 'price' field if it is provided
		if (product.hasOwnProperty('price')) {
			if (product.price === undefined || product.price === null) {
				throw new Error('Validation Error: Price field cannot be undefined.');
			}
		}

		return originalMethod.apply(this, args);
	};
}
