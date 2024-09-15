//another type is called Funtion which allows to store only a function

//ex

function multiply(n1: number, n2: number): number {
	return n1 * n2;
}

let funcVal: Function;
funcVal = multiply; //valid
// funcVal = 5 ; // invalid

// to be more specific

let mathOp: () => number; // mathOp will accepts any function that returns number

let mathOp_2: (a: number, b: number) => number; // function that accepts 2 params as number and  returns number
mathOp_2 = multiply;

//callback
function addHandler(n1: number, n2: number, callback: (res: number) => void) {
	callback(n1 + n2);
}

addHandler(10, 20, (res: number) => {
	console.log(res);
});
