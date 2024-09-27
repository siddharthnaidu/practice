// adding a new function to string prototype

String.prototype.siddu = function () {
    let str = this;
    return str.split('').reverse().join('');
}

let str = 'abcdefghijklmn';

console.log(str.siddu());
//-----------------------

let num1 = 1234;   /// this is primitive value
let num2 = new Number(123); // this is an Object so u can set properties
let num3 = Number(123); // this is again primitive values
console.log(num1, num2, num3);

console.log(num1 + num2);

 num2.sidd = 'sidd';
console.log(num2.sidd);
console.log(typeof(num1));// number
console.log(typeof(num2)); // object
//-------------------------------------


// here when you create number with new key word its an object
