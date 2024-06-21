// names functions

function sum(x:number,y:number):number{
    return x+y;
}
// anonymous function
let sumofTwoNumbers = function(x:number,y:number):number
{
    return x+y;
}

//Arrow functions
let calculateSum = (x:number,y:number):number => x+y;

console.log(sum(345,654));
console.log(sumofTwoNumbers(87900000, 78));
console.log(calculateSum(678.00908, 675));
