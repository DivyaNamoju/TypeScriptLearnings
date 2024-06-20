// tuples : are of fixed size and order matters
var person = [1, 'Divya'];
var user = [1, 'Navya', 'female'];
console.log(person[0]);
console.log(person[1]);
// tuple as as array
var employees = [['Divya', 'female'], ['Navya', 'female']];
console.log('Length of tuple ' + employees.length);
var len = employees.length;
for (var i = 0; i < len; i++) {
    for (var j = 0; j < len; j++)
        console.log(employees[i][j]);
}
console.log(employees);
