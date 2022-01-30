// var products=[
//     {name:"samsung s10",price:1234},
//     {name:"leptop s10",price:1234},
//     {name:"moble s10",price:1234},
//     {name:"i phone moble s10",price:1234},
//     {name:"LG smart s10",price:1234},
//     {name:"ph leptop s10",price:1234},
//     {name:"nokiya s10",price:1234},
// ]

// function searchProduct(products,searchText){
//     const matched=[];
//     for(const product of products){
//         const name=product.name
//         if(name.indexOf(searchText)!=-1){
//             matched.push(name)
//         }
        
//     }
//     return matched;
// }
// const match=searchProduct(products,'leptop');
// console.log(match);

// var table = 13;
// var count = 10;

// for (var i = 0; i < count; i++) {
//      i++;
//     console.log(table, "X", i, "=", table * i);
//     --i;
// }

var numbers=[10,20,30,40,50,60,70];
//delet from middle==splice

//arrayNumber.splice(index number.total koyta korte hobe)

numbers.splice(1,1);
//console.log(numbers);

//kivabe insert korte hoy
numbers.splice(4,0,500);
//console.log(numbers);
numbers.splice(5,0,155,220,330,33);
//console.log(numbers);

numbers.splice(3,2,299995);
//console.log(numbers);


