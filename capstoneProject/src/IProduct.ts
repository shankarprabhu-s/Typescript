
export interface IProduct {
	id: number;
	name: string;
	price: number;
}

export interface Electronics extends IProduct {
	warranty: number; 
}

export interface Clothing extends IProduct {
	size: string;
}
