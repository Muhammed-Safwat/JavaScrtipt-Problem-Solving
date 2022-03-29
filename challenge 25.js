/*Coding challenge #25: Create a function that will receive two arrays of numbers 
                                 as arguments and return an array composed of all the numbers
                                 that are either in the first array or second array but not in both*/
var ar1 = [1, 2, 3, 10, 5, 3, 14];
var ar2 = [ 1, 4, 5, 6, 14 ];
let arr3 = ar1.concat( ar2 );
console.log( arr3 );
// first solution using set 
    let set = new Set( arr3 );
    console.log( set );//  [2, 10, 3, 1, 4, 5, 6, 14]
//second solution
let arr4=[];
let a = 1;
for ( let i = 0; i < arr3.length; i++ )
{   
    a = 1;
    for ( let j = i+1; j < arr3.length; j++ )
    { 
        if ( arr3[ i ] == arr3[ j ] )
        {
            a = 0; 
        }
    }
    if ( a !== 0 )
    {
        console.log( "arr4" );
        arr4.push( arr3[ i ] );
    }
}
console.log( arr4 );//  [2, 10, 3, 1, 4, 5, 6, 14]

