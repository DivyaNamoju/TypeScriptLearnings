var randomNumbers = [];
var nextNumber;
for (var i = 0; i < 10; i++) {
    nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
    randomNumbers.push(nextNumber);
}
console.log(randomNumbers);
console.log('***** Using for loop *********');
for (var n in randomNumbers) {
    console.log(n);
}
