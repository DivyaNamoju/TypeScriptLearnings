// tuples : are of fixed size and order matters
let person:[number, string] = [1,'Divya'];
let user:[number, string, string] = [1,'Navya','female'];

console.log(person[0]);
console.log(person[1]);

// tuple as as array

let employees:[string, string][] = [['Divya','female'],['Navya','female']];
console.log('Length of tuple ' + employees.length);
let len = employees.length;
for(let i=0;i<len;i++)
    {
        for(let j=0;j<len;j++)
            console.log(employees[i][j]);
    }

console.log(employees);