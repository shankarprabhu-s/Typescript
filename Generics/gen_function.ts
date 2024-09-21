// ts will infere the type in runtime
//! function to merge the 2 object
function mergeObj<T, U>(objA: T, objB: U) {
	return { ...objA, ...objB };
	// return Object.assign({},objA, objB);
}

const mergedObj = mergeObj({ name: 'shankar' }, { age: 30 });

console.log(mergedObj);

function mergeObj2(objA: any, objB: any) {
	return Object.assign({}, objA, objB);
}

const mergedObj2 = mergeObj({ name: 'Shankar' }, { age: 30 });

console.log(mergedObj2);

