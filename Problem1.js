/* var number=12;
var str='utpal sarker';
var num=true; */

// for(let i=1;i<=10;i++){
//     var sum=0;
//     var sum=sum+i
  
// }
// console.log(sum);

// for(i=50; i<=80; i+2){
//     i=i+2;
//     console.log(i);
    
// }

// function addition(a,b,c){
//     var result=a+b+c;
//     return result;
// }
// var a=10;
// var b=20;
// var c=30;
// var value=addition(a,b,c);
// console.log(value);

// function celsiusToFahrenheit(number){
//     var fahrenheit=32;
//     var result=(number*9/5)+fahrenheit;
//     var total=Math.round(result)
//     return total;
// }
// var num=1;
// var value=celsiusToFahrenheit(num);
// console.log(value);

// function fahrenheitToCelsius(fahrenheit1){
//     var celsius=32;
//     var res=(fahrenheit1-32)*5/9;
//     return res;
// };
// var num2=1;
// var value2=fahrenheitToCelsius(num);
// console.log(value2);

function grade(mark){
    if(mark<=100 && mark>=80){
        return 'A+';
    }
    else if(mark<=79 && mark>=70){
        return 'A';
    }
    else if(mark<=69 && mark>=60){
        return 'A-';
    }
    else if(mark<=59 && mark>=50){
        return "B";
    }
    else if(mark<=49 && mark>=40){
        return "c";
    }
    else if(mark<=39 && mark>=33){
        return "D"
    }

    else{
        return "Fail";
    }
}
var number=(80);
var result=grade(number);
console.log(result);
