let fruitNames:string[] = ['orange','banana','kiwi'];
console.log(fruitNames);

let vegetableNames:Array<string> = ['lettuce','cabbage','tofu', 'tommato'];
console.log(vegetableNames);
vegetableNames.push('potato');
console.log('After push');
console.log(vegetableNames);
console.log('After pop');
vegetableNames.pop();
console.log(vegetableNames);
vegetableNames.shift();
console.log('After shift');
console.log(vegetableNames);