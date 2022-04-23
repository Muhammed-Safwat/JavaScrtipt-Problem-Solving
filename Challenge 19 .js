/*-------------------Coding challenge #19 Rotate an array to the right 1 position------------------*/


let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
function rotateRight( arr )
{
    let frist = arr.shift();
    arr.push(frist);
}
rotateRight( arr );
rotateRight( arr );
rotateRight( arr );
rotateRight( arr );