interface Addfn {
	(a: number, b: number): number;
}

let add: Addfn;
add = (n1, n2) => {
	return n1 + n2;
};
