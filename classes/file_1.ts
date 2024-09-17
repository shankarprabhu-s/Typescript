class Department {
	name: string;
	private employee: string[] = [];
	constructor(n: string) {
		this.name = n;
	}
	describe() {
		console.log('Dept: ' + this.name);
	}
	addEmployee(employee: string) {
		this.employee.push(employee);
	}
	printEmployeeInformation() {
		console.log(this.employee.length);
		console.log(this.employee);
	}
}
const dep_1 = new Department('ISE');
console.log(dep_1);
dep_1.describe();
dep_1.addEmployee('Shankar');
dep_1.addEmployee('Sharath');
dep_1.addEmployee('Suhas');
// dep_1.employee[0] = 'hi'; cannot access

dep_1.printEmployeeInformation();
