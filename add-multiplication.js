
function calcultator(charQuantity,tableQuantity,bedQuantity){
     
    const charWood=3;
    const tableWood=10;
    const bedWood=50;

    const charTotalWood=charQuantity*charWood;
    const tableTotalWood=tableQuantity*tableWood;
    const bedTotalWood=bedQuantity*bedWood;

    const totalWood=charTotalWood+tableTotalWood+bedTotalWood;
    return totalWood;
}

var result=calcultator();
console.log(result);