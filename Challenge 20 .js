/*-------------------Coding challenge #20: Reverse an array---------------*/

let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
let arr1 = arr;
function reverse( arr , arr1 ){
    for ( let i = arr.length-1; i<=0; i++ )
    {  
        let a = arr[ i ];
        arr1.unshift( a );
    }
    return arr1;
};