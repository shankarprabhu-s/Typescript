//! what is the generics
//// Generics  enable writing code that can work with a variety of data types while maintaining type safety

//! specifying the type withing the type

const arrString: Array<string> = [];
//! once we know the type of data stored in the array we can perform the operations like
// arrString[0].replace('','') like wise

//! in promises
const promise: Promise<string> = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('Hi shankar');
	}, 2000);
});

promise.then((data) => console.log(data));
