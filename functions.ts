// functions without return value

function helloWorld():void
{
    console.log('Hello World!!!');
}
function sum(num1:number, num2:number):void
{
    console.log('Sum : ' + (num1+num2));
}
// function with return value
function square(num1:number): number{
    return (num1*num1);
}
helloWorld();
sum(456,659);
console.log('Square of a number: ' + square(45));
console.log('Square of a number: ' + square(45));