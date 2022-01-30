const a=30;
const b=60;
var result=Math.max(a,b);
//console.log(result);

const c=50;
const d=30;
var value=Math.min(c,d);
//console.log(value);

function number(num1,num2,num3){
    if(num1>num2){
        return num1;
    }
    else if(num2>num1){
        return num2;
    }
    else{
        return num3
    }
}
var largest=number(500,60,40);
console.log(largest);

