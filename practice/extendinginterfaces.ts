interface Icecream{
    readonly brand:string, // few values can be read only
    flavour:string,
    scoops:number,
    holder?:string // this variable can omitted which initialising values
}
// Extending an other interface
interface Sundae extends Icecream {
    sauce: 'chocolate' | 'caramel' | 'strawberry';
    nuts?: boolean;
    whippedCream?: boolean;
    instructions?: boolean;
}
let sundaeOrder:Sundae={
    brand:'Magma',
    flavour:'Vanilla',
    scoops:3,
    sauce:'chocolate',
}
console.log(sundaeOrder);