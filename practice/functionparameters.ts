// required parameters
function addTwoStrings(str1:string, str2:string):string{
    return str1.concat(str2);
}
console.log(addTwoStrings('Hello','World'));
// default  parameters
function wishes(str1:string, str2=' congrats!!')
{
    console.log(str1.concat(str2));
}
wishes('Martin');
// optional parameters

function subtractTwoNumbers(num1:number, num2?:number):number{
    if(num2===undefined) return num1;
    else return num1-num2;
}

console.log('Subtract 2 numbers : ' + subtractTwoNumbers(45));
console.log('Subtract 2 numbers : ' + subtractTwoNumbers(45, 90));

// Rest parameters, when no idea on the size of parameters
// Rest parameters cannot be optional
function sumAll(num1:number, ...arrNum:number[]):number{
    let result:number=num1;
    for(let counter = 0; counter < arrNum.length; counter++)
        {
            result += arrNum[counter];
        }
    return result;
}

console.log('Sum of given numbers : ' + sumAll(34));
console.log('Sum of given numbers : ' + sumAll(34,23,45,6,7,8));

// Named parameters

interface Message{
    sender:string,
    message:string
}

function deliver(msg:Message){
    console.log(`Message from ${msg.sender} : ${msg.message}`)
}
deliver({sender:'John',message:'Miss you!!'})
