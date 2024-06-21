// Exercise 3: Implement an enum type
enum Season{
    Fall,
    Winter,
    Spring,
    Summer
}
console.log(Season.Fall);
function whichMonths(val : Season):string
{
    let monthsInSeason:string="";
    switch(val)
    {
        case 0 :
            monthsInSeason = "September to November";
            break;
        case 1:
            monthsInSeason = "December to February";
            break;
        case 2:
            monthsInSeason = "March to May";
            break;
        case 3:
            monthsInSeason = "June to August";
    }
        return monthsInSeason; 
}

console.log(whichMonths(Season.Fall));
console.log(whichMonths(Season.Spring));
console.log(whichMonths(Season.Summer));
console.log(whichMonths(Season.Winter));