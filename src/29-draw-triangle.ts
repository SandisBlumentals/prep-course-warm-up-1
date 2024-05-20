export {};

/**
 * If you find yourself stuck with this exercise, perhaps a more visual approach would help:
 *  - https://blog.codeanalogies.com/2017/11/07/javascript-for-loops-explained/
 */

function draw(num:number) {
    for (var i = 0; i < num; i++){
        var array1:string[] = [];
        for (var j = 0; j <= i; j++){
            array1.push('*');
        } 
        console.log(array1.toString().replace(/,/g, ''));
    }
    console.log("\n");
}

draw(3);
/* Expected output:

    *
    **
    ***

*/

draw(5);
/* Expected output:

    *
    **
    ***
    ****
    *****

*/
