/*--------------------Coding challenge #12: Print the first 10 Fibonacci numbers without recursion-----------*/

let f1 = 0, f2 = 1;
console.log( f1 );
console.log( f2 );
for ( let i = 0; i <=10; i++ )
{ 
    let a= f1 + f2;
    console.log( a );
    f1 = f2;
    f2 = a;
} 