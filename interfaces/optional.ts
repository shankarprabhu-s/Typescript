class Student {
	private name: string;
	private rollNo?: number; // Optional property
	private address?: string; // Optional property

	// Constructor with optional parameters
	constructor(name: string, rollNo?: number, address?: string) {
		this.name = name;
		this.rollNo = rollNo; // Can be undefined
		this.address = address; // Can be undefined
	}

	// Getter for name
	get _name(): string {
		return this.name;
	}

	// Getter for rollNo (handling undefined)
	get _rollNo(): number | undefined {
		return this.rollNo;
	}

	// Getter for address (handling undefined)
	get _address(): string | undefined {
		return this.address;
	}
}

// Example usage:

// Creating an instance with only name (rollNo and address are optional)
const student1 = new Student('John Doe');

// Creating an instance with all details
const student2 = new Student('Jane Doe', 101, '123 Elm Street');

console.log(student1._name); // Output: John Doe
console.log(student1._rollNo); // Output: undefined (since rollNo was not provided)
console.log(student1._address); // Output: undefined (since address was not provided)

console.log(student2._name); // Output: Jane Doe
console.log(student2._rollNo); // Output: 101
console.log(student2._address); // Output: 123 Elm Street
