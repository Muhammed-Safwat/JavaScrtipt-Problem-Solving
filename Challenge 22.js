/*----------------- Coding challenge #22: Create a function that will merge two arrays and return the result as a new array ----------------- */
    
let arr1 = [ 1, 2, 3 ];
let arr2 = [ 4, 5, 6 ];
function merge( arr1, arr2 )
{
    for ( let i = 0; i < arr2.length ; i++) {
        arr1.push( arr2[ i ] );
    }
}
merge( arr1, arr2 );

console.log( arr1 );
 