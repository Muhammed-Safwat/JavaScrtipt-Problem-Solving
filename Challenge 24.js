/* ----------Coding challenge #31a. Create a function that will return the number of words in a text ------------------*/
// simple sloution 
let text = "I learn javascript";
let text1="I like to learn JavaScript"
let arr = text.split( " " );
console.log( arr.length );
// second solution
let c = 0;
let text2 = "challange 24 in javascript";
function findWord( T )
{
    for ( let i = 1; i < T.length; i++ )
    {
        if (isSeparator(T.indexOf(i))) 
             c++;
    }
    console.log( c );
}
function isSeparator(p)
{
    var separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
    return separators.includes(p);
}
findWord(text2);