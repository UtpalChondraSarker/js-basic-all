// var a=1;
// while(a<=10){
//     //console.log(a);
//     if(a==6){
//         break;
//     }
//     console.log(a);
//     a++;
// }

// for(let i=0; i<20;i++){
//     //console.log(i);
//     if(i==8+1){
//         break;
//     }
//     console.log(i);
// }

var numbers=[23,45,67,98,100,56,45,97,10,]
for(let i=0; i<numbers.length; i++){
    var number=numbers[i];
    if(number>90){
        continue;
    }
    console.log(number);
}