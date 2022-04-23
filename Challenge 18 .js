/*------------------Coding challenge #18: Rotate an array to the left 1 position--------------*/

/* frist solution */

var ar = [1, 2, 3];
rotateLeft(ar);
console.log(ar);

function rotateLeft(ar)
{
    var first = ar.shift();
    ar.push(first);
}

/* socend solution */


let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

function rotateLeft( arr )
{
    let last = arr.pop();
    arr.unshift(last);
}
rotateLeft( arr );

console.log( arr );
 