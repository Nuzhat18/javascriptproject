/*var a = 100;
var b = a%2;

if (b==0)
{
    console.log ("number is even");
}else
{
    console.log ("number is odd");
}*/

var num = 100;

if (typeof num !== 'number') {
    console.log("Not a number");
}
else if (num % 2 === 0) {
    console.log("it is even");
}
else {
    console.log("it is odd");
}
