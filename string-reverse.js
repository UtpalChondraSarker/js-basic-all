const str='Hello how are you';


function reverseString(text){
    var reverse='';
    //num=0;
    for(let i=0;i<str.length;i++){
        const num=str[i];
        reverse=num+reverse;
        
    }
    return reverse;
}
var result=reverseString(str);
console.log(result);