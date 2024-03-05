export {};

function isBlank (word:any){
    return (!word || /^\s*$/.test(word));
}
/**
 * Create a function called isBlank, which checks if passed string is blank or not
 */

console.log(isBlank(null)); // Expected output: true
console.log(isBlank("")); // Expected output: true
console.log(isBlank(" ")); // Expected output: true
console.log(isBlank("abc")); // Expected output: false
console.log(isBlank(" abc ")); // Expected output: false
