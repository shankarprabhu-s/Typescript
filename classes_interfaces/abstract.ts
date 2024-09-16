abstract class Vehicle {
	v_name: string;
	noOfWheels: number;
	constructor(v_name: string, noOfWheels: number) {
		this.v_name = v_name;
		this.noOfWheels = noOfWheels;
	}
	nameOfVehicle(): void {
		console.log(this.v_name);
	}
	howManyWheels(): number {
		return this.noOfWheels;
	}
}
class TwoWheeler extends Vehicle {
	constructor(v_name: string, noOfWheels: number) {
		super(v_name, noOfWheels);
	}
}

const tvs = new TwoWheeler('XL400', 2);
console.log(tvs.nameOfVehicle());
console.log(tvs.howManyWheels());
