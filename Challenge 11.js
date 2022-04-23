/*--------------Coding challenge #11: Find the maximum number in an array of numbers-----------*/

 function min( arr )
{
    let min =  arr[0];
    for ( let i = 0; i < arr.length; i++ )
    {
        if ( arr[ i ] < min )
        {
        min = arr[ i ];
        }
    }
    return min;
}
var ar = [ -5, 10, -3, 12, -9, 5, 90, 0, 1 ];
console.log( `min number = ${ min( ar ) }` ); 
