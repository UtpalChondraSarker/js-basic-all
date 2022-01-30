const numbers=[12,45,34,34,56,12,45,4,5,6,4,5,6]

function dublicate(num){
    const unique=[];
    for(let i=0; i<numbers.length;i++){
        const element=numbers[i];
        if(unique.indexOf(element) == -1){
            unique.push(element)
        }
        
    }
    return unique;
}

var result=dublicate(numbers);
console.log(result);