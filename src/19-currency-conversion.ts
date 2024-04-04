export {};

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 *
 * Additional Challange:
 * Find a way to add 1% to all currency conversions
 * (think about the DRY (don't repeat yourself) principle)
 * You are allowed to create your own functions
 * and use them in place of convertToUSD() and convertToBRL()
 */

function fee (price):number{
    return price/100;
}
// You are allowed to change this function
function convertToUSDPlusFee(price:number) {
    return (price*1.4+fee(price));
}
// You are allowed to change this function
function convertToBRLPlusFee(price:number) {
    return (price*6.35+fee(price));
}

const product = "You don't know JS";
const price = 12.5;
const priceInUSD = convertToUSDPlusFee(price).toFixed(2);
const priceInBRL = convertToBRLPlusFee(price).toFixed(2);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD);
console.log("Price: R$" + priceInBRL);

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/
