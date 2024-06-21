var icecream = {
    brand: 'Magma',
    flavour: 'vanilla',
    scoops: 2
};
console.log(icecream);
// Example to demostrate with functions
function tooManyScoops(icecream) {
    if (icecream.scoops > 3)
        return 'Too many scoops Not recommended';
    else
        return 'Moderate consumption is OK';
}
var icecream2 = {
    brand: 'Magma',
    flavour: 'butterscotch',
    scoops: 8
};
console.log(tooManyScoops(icecream2));
