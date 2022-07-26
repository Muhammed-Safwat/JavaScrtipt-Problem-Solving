//**          Capitalize Words Function        */            

function Capitalize( str ){
    let arr =str.split(' ');
    let newArr=[]; 
    for ( let i = 0; i <arr.length ; i++ )
    {
        newArr.push(arr[i].charAt( 0 ).toUpperCase() + arr[i].slice( 1, str.length ))
    }
    return newArr;
}
console.log( Capitalize( "gaa  asli elsy el al lf lie a llll iei e" ) );
