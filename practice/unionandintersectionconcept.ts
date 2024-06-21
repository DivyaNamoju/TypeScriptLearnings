// union type allows a variable to have one or more types
// examples : a variable can be a string or number

let str: string | number;
str = 'typescript';
console.log(str);
str = 23; // doesn't throw an error when a number value is assigned to the variable
console.log(str);

// using with functions : Example : 1
function displayValue(value1:number|string)
{
    console.log('Argument values is : ' + value1);
}

displayValue('Learning Typescript union');
displayValue(678); // no error, accepts string and number
// print(true); // throws error, boolean not allowed

// functions - Example : 2

function add(val1: number|string, val2:number|string)
{
    if(typeof val1 === 'number' && typeof val2 === 'number' )
        return val1+val2;
    else if(typeof val1 === 'string' && typeof val2 === 'string' )
        return val1.concat(val2);
    else
        throw new Error('Values should be either all numbers or strings');
}

console.log(add(23,45));
console.log(add('Playwirght', 'Typescript'));
// console.log(add(122,'string')); // throws error