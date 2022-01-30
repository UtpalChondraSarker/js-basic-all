// function leapYear(year){
//     if(year%4==0 && year%4!=1){
//         return ('this is leapyear')
//     }
//     return ('not a leap year')
// }
// var newYear=2021;
// var result=leapYear(newYear);
// console.log(result);

function isLeapYear(year){
    if  ((year % 100 != 0 && year % 4 == 0)|| year % 400 ==0){
        return true;
    }
    else{
        return false;
    }
}
const number=2021;
var value=isLeapYear(number);
console.log(value);