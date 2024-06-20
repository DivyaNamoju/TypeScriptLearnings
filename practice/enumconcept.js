// declare constants
// numeric, string, heterogenous
var colors;
(function (colors) {
    colors[colors["blue"] = 0] = "blue";
    colors[colors["green"] = 1] = "green";
    colors[colors["yellow"] = getValue(true)] = "yellow";
})(colors || (colors = {}));
console.log(colors.blue);
console.log(colors);
function getValue(flag) {
    if (flag)
        return 23;
    else
        return 0;
}
console.log(colors.yellow);
console.log(colors['blue']);
