function displayAlert(message:string) {
    alert('The message is ' + message);
}

// Array with elements of type string union number
let arr:(string|number)[]=['nayan', 123, 'fellow', 23,45,78,100];
function sum(input: number[]): number {        
    let total: number =  0;
    for(let count = 0; count < input.length; count++) {
        if(isNaN(input[count])){
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}

// console.log('Sum : ' + sum(arr)); // throws an error