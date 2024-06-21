interface Icecream{
    readonly brand:string, // few values can be read only
    flavour:string,
    scoops:number,
    holder?:string // this variable can omitted which initialising values
}

let icecream:Icecream={
    brand:'Magma',
    flavour:'vanilla',
    scoops:2
}
console.log(icecream);

// Example to demostrate with functions
function tooManyScoops(icecream:Icecream)
{
    if(icecream.scoops>3)
        return 'Too many scoops Not recommended';
    else
        return 'Moderate consumption is OK';
}
let icecream2:Icecream={
    brand:'Magma',
    flavour:'butterscotch',
    scoops:8
}
console.log(tooManyScoops(icecream2));