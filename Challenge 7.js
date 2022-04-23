
/*-------- Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30 ----------*/

 let sum = 0; 
for ( let i = 10; i < 30; i++ )
{
    i % 2 != 0 ? sum += i :true;  
}
console.log( sum );
 
 /************************/
let sum1 = 0;

for(var i = 11; i <= 30; i += 2)
{
    sum1 += i;
}

console.log(sum1); 