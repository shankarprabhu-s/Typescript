let role = [2, 'writer'];

const product3: {
	id: string;
	price: number;
	tags: string[];
	details: {
		title: string;
		description: string;
	};
	//this is how tuple works
	role: [number, string];
} = {
	id: 'abc1',
	price: 12.99,
	tags: ['great-offer', 'hot-and-new'],
	details: {
		title: 'Red Carpet',
		description: 'A great carpet - almost brand-new!',
	},
	role: [1, 'shankar'],
};

//! but 'PUSH' operation is allowed
