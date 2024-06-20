let x: number;   //* Explicitly declares x as a number type
let y = 1;       //* Implicitly declares y as a number type
let z;           //* Declares z without initializing it

x = 1
z = 'one'
z = 1


// Declaring and Initialising variables of type boolean
let flag: boolean;
let yes = true;
let no = false;

flag = true

console.log(x);
console.log(y);
console.log(z);
console.log(flag);
console.log(yes);
console.log(no);

// Declaring and Initialising variables of type number
let num1: number;
num1 = 456
let num2 = 0;
let num3: number = 123.456;

console.log(num1);
console.log(num2);
console.log(num3);

// Declaring and Initialising variables of type string
let s: string;
s = 'Typescript'
let empty = "";
let abc = 'abc';

console.log(s);
console.log(empty);
console.log(abc);

// String type

let firstName: string = "Mateo";
let sentence: string = `My name is ${firstName}.
    I am new to TypeScript.`;
console.log(sentence);

// Enum Type
enum ContractStatus {
    Permanent,
    Temp,
    Apprentice
}
let employeeContractStatus:ContractStatus = ContractStatus.Permanent;
// Default value of enum starts from 0
console.log(employeeContractStatus); // output : 0
console.log(ContractStatus[1]); // output : Temp