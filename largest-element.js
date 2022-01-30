
// function largestElement(numbers){
//     let largest=numbers[0];
//     for(let i=0; i<numbers.length;i++){
//     const element=numbers[i];
//     if(element>largest){
//         largest=element;
//     }
      
//    }  
//    return largest;
// }
// var number=[12,34,56,90,67,89,87,30]
// var result=largestElement(number);
// console.log(result);

function lowestElement(numbers){
    let lowest=numbers[0];
    for(let i=0; i<numbers.length;i++){
        const element=numbers[i];
        if(element<lowest){
            lowest=element
        }
        
    }
    return lowest;
}
var number=[23,56,56,12,34,6,9,8,75];
var result=lowestElement(number);
console.log(result);