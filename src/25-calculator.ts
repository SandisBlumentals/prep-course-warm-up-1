export {};

function add(num1:number,num2:number) {
    return num1+num2;
}

function subtract(num1:number,num2:number) {
    return num1-num2;
}

function sum(arr:number[]) {
    var sum:number = arr[0];
    for (var i = 1; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

function multiply(arr:number[]) {
    var multip:number = arr[0];
    for (var i = 1; i < arr.length; i++){
        multip = multip * arr[i];
    }
    return multip;
}

function power(num1:number,num2:number) {
    return Math.pow(num1,num2);
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
