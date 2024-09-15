// to label the types that is human readablec
//! consider role it can be Admin,User , Read_Only
// enum can be defined by using keyword enum

enum Role {
	ADMIN = 3,
	USER,
	READ_ONLY,
}
// we can assign the custom value
const product4: {
	id: string;
	price: number;
	tags: string[];
	details: {
		title: string;
		description: string;
	};
	role: Role;
} = {
	id: 'abc1',
	price: 12.99,
	tags: ['great-offer', 'hot-and-new'],
	details: {
		title: 'Red Carpet',
		description: 'A great carpet - almost brand-new!',
	},
	role: Role.ADMIN,
};

console.log(Role);
