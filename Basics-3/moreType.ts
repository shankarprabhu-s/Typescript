//! unknown type and never type

let userIp: unknown;
userIp = 9;
userIp = 'Max';

// diff between the unknown and any
let userName: string;
// userName = userIp; // gives error

// but
let userIp2: any;
userIp2 = 89;
userName = userIp2; // doesn't give the error

//! never type;

function generateError(message: string, code: number):never {
	throw { message: message, errorCode: code };
}

console.log(generateError('shankar', 9));
//above function actually return nothing since it throws the error so we go with the never type