/*-------------Coding challenge #9: Calculate the average of the numbers in an array of numbers -----------*/
 

let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
function sumArr( arr )
{   
    let sum = 0;
    for ( let i = 0; i < arr.length ; i++ ) {
        sum += arr[ i ];
    }
    return sum; 
}
console.log( sumArr( arr )/arr.length ); 
