function factorial(n){
    if(n == 1){
        return 1;
    }
    else
    {
        return n = n * factorial(n-1);
    }
}
const myFact=(7);
var result=factorial(myFact);
console.log(result);