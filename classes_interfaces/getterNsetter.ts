class Student {
	private name: string;
	private rollNo: number;
	private address: {
		houseNo: number;
		city: string;
		country: string;
	};

	constructor() {
		this.name = '';
		this.rollNo = 0;
		this.address = {
			houseNo: 0,
			city: '',
			country: '',
		};
	}

	// Setter and Getter for name
	set _name(name: string) {
		this.name = name;
	}
	get _name(): string {
		return this.name;
	}

	// Setter and Getter for rollNo
	set _rollNo(rollNo: number) {
		this.rollNo = rollNo;
	}
	get _rollNo(): number {
		return this.rollNo;
	}

	// Setter and Getter for address
	set _address(address: { houseNo: number; city: string; country: string }) {
		this.address = address;
	}
	get _address(): { houseNo: number; city: string; country: string } {
		return this.address;
	}
}

// Example usage:
const student = new Student();
student._name = 'John Doe';
student._rollNo = 101;
student._address = { houseNo: 12, city: 'New York', country: 'USA' };

console.log(student._name); // Output: John Doe
console.log(student._rollNo); // Output: 101
console.log(student._address); // Output: { houseNo: 12, city: 'New York', country: 'USA' }
