var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var btn = document.getElementById('btn');
var res = document.getElementById('res');
function add(num1, num2) {
    console.log(num1 + num2);
}
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function () {
    add(+num1, +num2);
});
