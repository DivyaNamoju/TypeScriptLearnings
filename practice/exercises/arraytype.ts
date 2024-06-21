let randomNumbers:number[]=[];
let nextNumber:number;
for (let i = 0; i < 10; i++) {
    nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
    randomNumbers.push(nextNumber);
}

console.log(randomNumbers);
console.log('***** Using for loop *********');
for(let n in randomNumbers)
    {
        console.log(n);
    }