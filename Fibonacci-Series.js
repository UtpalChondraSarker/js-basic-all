//nth=(n-1)th +(n-2)th
// ifibo=(i-1)fibo + (i-2)fibo
// const fibo=[0,1]
// for(let i=2; i<=10; i++){

//     fibo[i]=fibo[i-1] + fibo[i-2];
    
// }

// function fibonacci(num){
//     let fibo=[0,1]
//     for(let i=2; i<=num;i++){
//         fibo[i]=fibo[i-1]+fibo[i-2];

//     }
//     console.log(fibo);
// }
// var number=(10);
// var result=fibonacci(number);
// console.log(result);

// function fibonacci(num){
//     if(typeof num !='number'){
//         return 'please give a number'
//     }
//     if(num<2){
//         return 'please possitive number gather then 2'
//     }
//     let fibo=[0,1]
//     for(let i=2; i<=num;i++){
//         fibo[i]=fibo[i-1]+fibo[i-2];

//     }
//     return fibo;
// }
// var number=(10);
// var result=fibonacci(number);
// console.log(result);

const selected =[]
for(let i=0;i<10;i++){
    const random=Math.random()*100;
    const picked=Math.round(random);
    if(selected.indexOf(picked)==-1){
        selected.push(picked)
    }
    else{
        console.log(selected,picked);
    }
}
console.log(selected);