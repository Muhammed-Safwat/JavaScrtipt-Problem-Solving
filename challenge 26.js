/*---------------Coding challenge #26: Create a function that will receive an array of numbers as argument and will return a new array with distinct elements--------------*/

function removeduplicate(arr)
{
    let newArr = [];
    for ( let i = 0; i < arr.length; i++ )
    {   
        let a = 1;
        for ( let j = i+1; j < arr.length; j++ )
        {
                if ( arr[ i ] == arr[ j ] )
            {
                a = 0; 
            }
        }
            if ( a !== 0 )
            {
                newArr.unshift( arr[ i ] );
            }
    }
    return newArr;
}
let arr=[ 1, 2, 3,1, 4, 5, 6, 7,5, 8, 9, 10,5]


console.log( removeduplicate( arr ) );