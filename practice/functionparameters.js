// required parameters
function addTwoStrings(str1, str2) {
    return str1.concat(str2);
}
console.log(addTwoStrings('Hello', 'World'));
// default  parameters
function wishes(str1, str2) {
    if (str2 === void 0) { str2 = ' congrats!!'; }
    console.log(str1.concat(str2));
}
wishes('Martin');
// optional parameters
function subtractTwoNumbers(num1, num2) {
    if (num2 === undefined)
        return num1;
    else
        return num1 - num2;
}
console.log('Subtract 2 numbers : ' + subtractTwoNumbers(45));
console.log('Subtract 2 numbers : ' + subtractTwoNumbers(45, 90));
// Rest parameters, when no idea on the size of parameters
// Rest parameters cannot be optional
function sumAll(num1) {
    var arrNum = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arrNum[_i - 1] = arguments[_i];
    }
    var result = num1;
    for (var counter = 0; counter < arrNum.length; counter++) {
        result += arrNum[counter];
    }
    return result;
}
console.log('Sum of given numbers : ' + sumAll(34));
console.log('Sum of given numbers : ' + sumAll(34, 23, 45, 6, 7, 8));
function deliver(msg) {
    console.log("Message from ".concat(msg.sender, " : ").concat(msg.message));
}
deliver({ sender: 'John', message: 'Miss you!!' });
