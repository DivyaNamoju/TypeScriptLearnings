var x; //* Explicitly declares x as a number type
var y = 1; //* Implicitly declares y as a number type
var z; //* Declares z without initializing it
x = 1;
z = 'one';
z = 1;
// Declaring and Initialising variables of type boolean
var flag;
var yes = true;
var no = false;
flag = true;
console.log(x);
console.log(y);
console.log(z);
console.log(flag);
console.log(yes);
console.log(no);
// Declaring and Initialising variables of type number
var num1;
num1 = 456;
var num2 = 0;
var num3 = 123.456;
console.log(num1);
console.log(num2);
console.log(num3);
// Declaring and Initialising variables of type string
var s;
s = 'Typescript';
var empty = "";
var abc = 'abc';
console.log(s);
console.log(empty);
console.log(abc);
// String type
var firstName = "Mateo";
var sentence = "My name is ".concat(firstName, ".\n    I am new to TypeScript.");
console.log(sentence);
// Enum Type
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 0] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 1] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 2] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
var employeeContractStatus = ContractStatus.Permanent;
// Default value of enum starts from 0
console.log(employeeContractStatus); // output : 0
console.log(ContractStatus[1]); // output : Temp
