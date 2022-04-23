/*-------- Coding challenge #10: Create a function that receives an array of numbers and returns an array containing only the positive numbers-----------*/

 function Arr( arr )
{
    let a = [];
    for ( let i = 0; i < arr.length; i++ )
    {
        arr[ i ] > 0 ? a.push( arr[ i ] ) : true;
    }
    return a; 
}
let ar = [ -5, 10, -3, 12, -9, 5, 90, 0, 1 ];

console.log( Arr( ar ) );