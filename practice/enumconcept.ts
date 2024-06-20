// declare constants
// numeric, string, heterogenous

enum colors {
    blue,
    green,
    yellow = getValue(true)
}
console.log(colors.blue);
console.log(colors);

function getValue(flag : boolean):number{
    if(flag) return 23;
    else return 0;
}

console.log(colors.yellow);
console.log(colors['blue']);