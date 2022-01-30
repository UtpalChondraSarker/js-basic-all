/* function factorial(number){
    let fact=1;
    let i=1;
    while(i<=number){
        fact=fact*i;
        i++;
    
    }
    return fact;
}
var num=7;
var result=factorial(num);
console.log(result); */

//let fact=1;

function factorial(number){
    let i=number;
    let fact=1;
    while(i>=1){
        console.log(i);
        fact=fact*i;
        i--;
    }
    return fact;
}
var num=7;
var result=factorial(num);
console.log(result);

function fact1(num1){
    var factorial1=1;
    for(let i=num1;i>=1;i--){
        console.log(i);
        factorial1=factorial1*i;
    }
    return factorial1;
}
var sum=7;
var value=fact1(sum);
console.log(value);