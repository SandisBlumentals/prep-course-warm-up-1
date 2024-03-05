export {};
function truncateString (word:string, lenght:number){
    return word.slice(0,lenght);
}
console.log(truncateString("CODELEX", 4)); // Expected output: CODE
