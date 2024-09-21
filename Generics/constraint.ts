//! but in the previous example we can also pass the any type
// console.log(mergedObj);

// function mergeObj2(objA: any, objB: any) {
// 	return Object.assign({}, objA, objB);
// }

// const mergedObj2 = mergeObj({ name: 'Shankar' },30); // this is not valid as we are passing the number not an object.. to resolve this issue we can impose a constraint


// console.log(mergedObj2);


function mergeObj3< T extends object,U extends object>(objA: T, objB: U) {
	return Object.assign({}, objA, objB);
}

const mergedObj3 = mergeObj({ name: 'Shankar' }, { age: 30 });

console.log(mergedObj3);
// this works all time