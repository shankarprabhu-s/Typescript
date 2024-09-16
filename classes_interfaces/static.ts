class Student2 {
	private name: string;
	private rollNo: number;
	private address: {
		houseNo: number;
		city: string;
		country: string;
	};

	// Static property
	static schoolName: string = 'Greenwood High School';

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

	// Static method
	static getSchoolName(): string {
		return this.schoolName;
	}
}

// Example usage:

// Accessing static property directly from the class
console.log(Student2.schoolName); // Output: Greenwood High School

// Accessing static method directly from the class
console.log(Student2.getSchoolName()); // Output: Greenwood High School

// Instance-based operations
const student2 = new Student2();
student2._name = 'John Doe';
student2._rollNo = 101;
student2._address = { houseNo: 12, city: 'New York', country: 'USA' };

console.log(student2._name); // Output: John Doe
console.log(student2._rollNo); // Output: 101
console.log(student2._address); // Output: { houseNo: 12, city: 'New York', country: 'USA' }
