class Person {
	private parent: string[] = [];
	constructor(private readonly name: string, private age: number) {
		this.name = name;
		this.age = age;
	}
	describe(): string {
		// this.name = 'gopaal'; //! we cannot initialize again
		return `${this.name} ${this.age} ${this.parent}`;
	}
}

const p1 = new Person('Shankar', 21);
console.log(p1.describe());

//! some of the property need not to change
//===> ' readonly'
