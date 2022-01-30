function singara(number){
    var singraQuantity=10;
    if(number<10){
        return 'Not money ableavle '
    }
    else{
        var totalSingara=number/singraQuantity;
        return totalSingara;
    }
    
}
var num=6;
var result=singara(num);
//console.log(result);

// var names='how are you';
// var len=names.length;
// for(let i=len; i>=0;i--){
//     console.log(i);
// }

// function sum(i){
//     if(i==1){
//         return 1;
//     }
//     return i+sum(i-1);
// }
// var num=6;
// var result=sum(num);
// console.log(result); 

var fact=1;
for(i=6;i>=1;i--){
    //console.log(i);
    fact=fact*i
    //console.log(fact);
}

// function factarial(i){
//     if(i==1){
//         return 1;
//     }
//     return i*factarial(i-1)
// }
// var num=6;
// var fact=factarial(num);
// console.log(fact);

// const fibo=[0,1];
// for(let i=2; i<=10;i++){
//     console.log(i);
//     fibo[i]=fibo[i-1]+fibo[i-2];
// }
// console.log(fibo);


// function fibo(i){
//     if(i == 0){
//         return 0;
//     }
//     if(i == 1){
//         return 1;
//     }
//      return fibo(i-1)+fibo(i-2)
// }

// var res=6;
// var result=fibo(res);
// console.log(result);

//const fibonacciSerize=[0,1,1,2,3,4,5,6,6,7,]

function fibonacciSerize(n){
    if(n==0){
        return [0];
    }
    if(n==1){
        return [0,1];
    }
    const fibo= fibonacciSerize(n-1)
    fibo[n]=fibo[n]=fibo[n-1]+fibo[n-2];
    return fibo;
}
const fiboSerize=fibonacciSerize(6);
console.log(fiboSerize);