// declaring the object

const person = {
	name: 'Shankar',
	age: 30,
};

console.log(person.name);

// in typeScript it goes like

const person2: {
	name: string;
	age: number;
} = {
	name: 'Gopal',
	age: 55,
};
console.log(person2.age);

//// nested objects

const product = {
	id: 'abc1',
	price: 12.99,
	tags: ['great-offer', 'hot-and-new'],
	details: {
		title: 'Red Carpet',
		description: 'A great carpet - almost brand-new!',
	},
};
//// this would be

const product2: {
	id: string;
	price: number;
	tags: string[];
	details: {
		title: string;
		description: string;
	};
} = {
	id: 'abc1',
	price: 12.99,
	tags: ['great-offer', 'hot-and-new'],
	details: {
		title: 'Red Carpet',
		description: 'A great carpet - almost brand-new!',
	},
};
