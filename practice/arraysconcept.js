var fruits = ['banana', 'kiwi', 'apple'];
console.log('size of array ' + fruits.length);
console.log('print the array elements');
for (var ele in fruits) {
    console.log(fruits[ele]);
}
var programminglangs = ['Java', 'JavaScript', 'TypeScript', 'Python'];
console.log('size of array ' + programminglangs.length);
console.log('print the array elements');
for (var ele in programminglangs) {
    console.log(ele + ':' + programminglangs[ele]);
}
fruits.push('orange');
console.log('After push => ' + fruits);
fruits.pop();
console.log('After pop => ' + fruits);
