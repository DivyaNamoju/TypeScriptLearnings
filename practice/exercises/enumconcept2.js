// 
var Season;
(function (Season) {
    Season[Season["Fall"] = 0] = "Fall";
    Season[Season["Winter"] = 1] = "Winter";
    Season[Season["Spring"] = 2] = "Spring";
    Season[Season["Summer"] = 3] = "Summer";
})(Season || (Season = {}));
console.log(Season.Fall);
function whichMonths(val) {
    var monthsInSeason = "";
    switch (val) {
        case 0:
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
