interface Person1 {
	Fname: string;
	country: string;
	greet(message: string): void;
}

let user1: Person1;
user1 = {
	Fname: 'Shankar',
	country: 'India',
	greet(message: string): void {
		console.log(`name is ${this.Fname}${message}`);
	},
};

user1.greet('this lobo');
