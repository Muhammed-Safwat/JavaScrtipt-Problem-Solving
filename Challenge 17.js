/*---------------------------------------Coding challenge #17:--------------------------------------------------
----------------------Create a function that will return in an array the first "nPrimes"
 -------------- ----------prime numbers greater than a particular number "startAt" */

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
function findPrime( n1 , n2 )
{
    let c = 0;
    for ( let i = n1; ; i++ )
    {
        if ( isPrime( i ) )
        {
            c++;
            console.log( i + " " + c );
        }
        if ( c == n2 )
        {
            break;
        }
    }
}
findPrime( 2, 7 );