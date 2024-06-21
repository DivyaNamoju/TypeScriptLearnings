// intersection closely associates with Union, but having either of values it creates 
// a datatype embedding the properties of two or more datatypes
// Example
interface Employee{
    empId:number,
    empName: string,
}
interface Manager{
    canBuyStocks:boolean
}
type ManagementEmployee = Employee & Manager; // creating a new type encompassing the properties of manager and employee
let empManagement:ManagementEmployee ={
    empId:12001,
    empName: 'John Barack',
    canBuyStocks:true
}
console.log(empManagement);