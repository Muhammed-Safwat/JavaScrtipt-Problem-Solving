/* --------------  Coding challenge #17: Calculate the sum of digits of a positive integer number  --------------*/


function sumOfDigits( num )
{
    let sum = 0; 
    let dig = 0;
    while ( num > 0 )
    {
        dig = num % 10;
        sum += dig;
        num = num / 10;
        num = num.toFixed();
    }
    return sum;
}
console.log( sumOfDigits( 22222 ) );
