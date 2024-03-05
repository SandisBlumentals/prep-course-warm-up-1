export {};

const repeatString = (letter:string,num:number) => {
    return letter.repeat(num);
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
