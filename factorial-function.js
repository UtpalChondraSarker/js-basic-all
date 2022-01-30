function factorial(number){
    let fact=1;
    for(let i=1; i<=number;i++){
        fact=fact*i;
        
    }
    return fact;
    
}
var num=7;
var result=factorial(num);
console.log(result);