const num1 = document.getElementById('num1')! as HTMLInputElement; //// '!' will say that the element does not yeild NULL
const num2 = document.getElementById('num2')! as HTMLInputElement;
const btn = document.getElementById('btn')! as HTMLButtonElement;
const res = document.getElementById('res')! as HTMLHeadingElement;

function add(num1:number, num2:number) {
	console.log(num1 + num2);
}

btn?.addEventListener('click', () => {
	add(+num1, +num2);
});
