export {};

/**
 * Implement map function which works similarly as
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * NB! The goal of this exercise is not to call .map inside your own map function,
 * but instead  you have to figure out how Array.prototype.map() works under the hood
 * and recreate the logic yourself.
 */

const map = (numArr:Array<number>, callback:any) => {
    const newArr:Array<number> = [];
    for (var i = 0; i < numArr.length; i++){
      newArr[i] = callback(numArr[i]);
    }
    return newArr;
};

// "callback" calls back to const doubled "inside" function - function(number) - that returns input number multiplied by 2.

const numbers = [1, 2, 3];
const doubled = map(numbers, function(number:number) {
  return number * 2;
});
console.log(doubled); // Expected result: [2, 4, 6]
