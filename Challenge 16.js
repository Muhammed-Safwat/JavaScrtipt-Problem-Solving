/*---------------coding challenge #16: Print the first 100 prime numbers-------------------*/

 
function isPrime( num )
{
    if ( num === 1 ) return false;
        if( num === 2 )return true;
    for ( let i = 2; i <= num / 2 ; i++ ) {
        if ( num % i === 0 )
        {
            return false;
        }
    }
    return true;
}
let c = 0;
for ( let i = 1; ; i++ )
{
    if ( isPrime( i ) )
    {
        c++;
        console.log( i +" "+c );
    }
    if ( c == 100 )
    {
        break;
    }
}
 